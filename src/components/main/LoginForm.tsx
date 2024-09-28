import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { PasswordInput } from "../ui/password-input";
import { Input } from "../ui/input";

const LoginForm = ({ onHide }: { onHide: () => void }) => {
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
      <Input
        type="email"
        placeholder="Email"
        className="h-[50px] border-gray-500 text-base"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <PasswordInput
        placeholder="Password"
        className="h-[50px] border-gray-500 text-base"
        value={pswd}
        onChange={(e) => setPswd(e.target.value)}
      />
      <Button variant="solid" onClick={handleEmailSignUp}>
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
