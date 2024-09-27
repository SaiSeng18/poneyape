import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Button } from "../ui/button";

const SignupForm = ({ onHide }: { onHide: () => void }) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const handleEmailSignUp = async () => {
    signInWithEmailAndPassword(auth, email, pswd)
      .then(async ({ user: firebaseUser }) => {
        console.log("firebaseUser", firebaseUser);

        onHide();
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          createUserWithEmailAndPassword(auth, email, pswd).then(
            async ({ user: firebaseUser }) => {
              console.log("firebaseUser", firebaseUser);
              if (error) {
                // delete user from firebase auth
                await firebaseUser.delete();
                return;
              }
              onHide();
            },
          );
        }
      });
  };
  return (
    <div className="flex flex-col space-y-4">
      <input
        className="rounded bg-transparent placeholder:text-midGrey"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="m-0 rounded bg-transparent placeholder:text-midGrey"
        type="password"
        placeholder="Password"
        value={pswd}
        onChange={(e) => setPswd(e.target.value)}
      />
      <input
        className="rounded bg-transparent placeholder:text-midGrey"
        type="password"
        placeholder="Confirm Password"
      />
      <Button variant="solid" onClick={handleEmailSignUp}>Register</Button>
    </div>
  );
};

export default SignupForm;
