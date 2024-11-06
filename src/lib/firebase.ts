// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import {
  Auth,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuid } from "uuid";

import { APIResponse, WebsiteData, WebsiteDataFetch } from "@/types";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW-jY6V-S3vpXOkoaI4f2nSRpjOPYrisg",
  authDomain: "poneyape-com.firebaseapp.com",
  projectId: "poneyape-com",
  storageBucket: "poneyape-com.appspot.com",
  messagingSenderId: "774628739093",
  appId: "1:774628739093:web:f2a6c4de68089d00ab661c",
  measurementId: "G-QN0QW2KX5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);

class FirebaseClient {
  private auth: Auth;

  constructor(auth: Auth) {
    this.auth = auth;
  }

  async createUserDocument(user: User) {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      const { email, displayName, photoURL } = user;
      await setDoc(userDocRef, {
        userId: user.uid,
        email,
        username: displayName || "",
        profileImage: photoURL || "",
      });
    }
  }

  async createFirestoreUser() {}

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      provider.setCustomParameters({ prompt: "select_account" });
      const res = await signInWithPopup(this.auth, provider);
      await this.createUserDocument(res.user);
      return true;
    } catch (error) {
      console.log("FirebaseClient loginWithGoogle error", error);
      return false;
    }
  }

  async signInWithFacebook() {
    const provider = new FacebookAuthProvider();

    try {
      const res = await signInWithPopup(this.auth, provider);
      await this.createUserDocument(res.user);
      return true;
    } catch (error) {
      console.error("Error signing in with Google", error);
      if (
        error instanceof FirebaseError &&
        error.code === "auth/account-exists-with-different-credential"
      ) {
        return "Account already exist with different provider. Try logging in with other provider and link your account";
      }
      return false;
    }
  }

  async signInWithGithub() {
    const provider = new GithubAuthProvider();

    try {
      const res = await signInWithPopup(this.auth, provider);
      await this.createUserDocument(res.user);
      return true;
    } catch (error) {
      console.error("Error signing in with Github", error);
      if (
        error instanceof FirebaseError &&
        error.code === "auth/account-exists-with-different-credential"
      ) {
        return "Account already exist with different provider. Try logging in with other provider and link your account";
      }
      return false;
    }
  }

  async signInWithEmail(email: string, password: string) {
    try {
      const userCreds = await signInWithEmailAndPassword(
        this.auth,
        email,
        password,
      );

      await this.createUserDocument(userCreds.user);
      // const idToken = await userCreds.user.getIdToken();

      // const response = await fetch("/api/auth/sign-in", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ idToken }),
      // });

      // const resBody = (await response.json()) as unknown as APIResponse<string>;
      // if (response.ok && resBody.success) {
      //   return true;
      // } else return false;
      return true;
    } catch (error) {
      console.error("Error signing in with Google", error);
      if (
        error instanceof FirebaseError &&
        error.code === "auth/account-exists-with-different-credential"
      ) {
        return "Account already exist with different provider. Try logging in with other provider and link your account";
      }
      return false;
    }
  }

  async signUpWithEmail(email: string, password: string) {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      );

      await this.createUserDocument(userCreds.user);
      await sendEmailVerification(userCreds.user);
      await userCreds.user.getIdToken();
      return true;
    } catch (error) {
      console.error("Error signing in with Google", error);
      return false;
    }
  }

  async resetPassword(email: string) {
    try {
      const response = await sendPasswordResetEmail(this.auth, email);

      return true;
    } catch (error) {
      console.error("Error resetting link", error);
      return false;
    }
  }

  async signOut() {
    try {
      await this.auth.signOut();
      return true;
    } catch (error) {
      return false;
    }
  }

  async uploadWebsite(data: WebsiteData) {
    try {
      const res = await addDoc(collection(db, "triage-websites"), data);

      return { success: true, data: res };
    } catch (error) {
      return { success: true, error };
    }
  }

  async uploadImage(file: File) {
    try {
      const storageRef = ref(storage, `sitedata/${file.name + uuid()}`);
      const res = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(res.ref);

      return { success: true, res, url };
    } catch (error) {
      return { success: false, error };
    }
  }

  async uploadMultipleImages(files: File[]) {
    const uploadPromises = files.map((file) => this.uploadImage(file));

    // Wait for all uploads to complete
    const results = await Promise.all(uploadPromises);

    // Filter successful uploads and extract URLs
    const urls = await results.map((result) => result.url);

    // Optional: Log or handle any failed uploads
    const errors = results.map((result) => result.error);

    // let urls: string[] = [];
    // for (let i = 0; i < files.length; i++) {
    //   const storageRef = ref(storage, `sitedata/${files[i].name + uuid()}`);
    //   const res = await uploadBytes(storageRef, files[i]).then((res) => res);
    //   const url = await getDownloadURL(res.ref);
    //   urls.push(url);
    // }

    return { urls, errors };
  }

  async fetchData(collectionName: string) {
    // const data: any[] = [];
    // const dataSnapshot = await getDocs(collection(db, collectionName));
    // dataSnapshot.docs.forEach((doc) =>
    //   data.push({ id: doc.id, ...doc.data() }),
    // );
    // return data;

    const docRef = collection(db, collectionName);
    const docSnapshots = await getDocs(docRef);

    const docsData = await Promise.all(
      docSnapshots.docs.map(async (item) => {
        const docData = item.data();
        const ownerRef = doc(db, "users", docData.owner);
        const ownerSnapshot = await getDoc(ownerRef);

        const authorsData = await Promise.all(
          docData.authors.map(async (authorId: string) => {
            const authorRef = doc(db, "users", authorId);
            const authorSnapshot = await getDoc(authorRef);
            const authorData = authorSnapshot.data();
            return authorData ? authorData : null;
          }),
        );

        return {
          id: item.id,
          ...docData,
          owner: ownerSnapshot.exists() ? ownerSnapshot.data() : null,
          authors: authorsData,
        };
      }),
    );

    return docsData;
  }

  async fetchDataById(collectionName: string, value: string) {
    // const docRef = doc(db, collectionName, value);
    // const dataSnapshot = await getDoc(docRef);
    // const data = dataSnapshot.data() as WebsiteDataFetch;

    // return data;

    const docRef = doc(db, collectionName, value);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      throw new Error("Document not found");
    }

    const docData = docSnapshot.data();
    const ownerRef = doc(db, "users", docData?.owner);
    const ownerSnapshot = await getDoc(ownerRef);

    const authorsData = await Promise.all(
      docData?.authors.map(async (authorId: string) => {
        const authorRef = doc(db, "users", authorId);
        const authorSnapshot = await getDoc(authorRef);
        return authorSnapshot.data();
      }),
    );

    return {
      ...docData,
      owner: ownerSnapshot.exists() ? ownerSnapshot.data() : null,
      authors: authorsData,
    };
  }

  async getFirestoreUser(uid: string) {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    return userSnap;
  }
}

export const firebaseClient = new FirebaseClient(auth);
