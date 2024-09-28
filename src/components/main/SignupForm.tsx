import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { PasswordInput } from "../ui/password-input";
import { toast } from "@/hooks/use-toast";

const SignupForm = ({ onHide }: { onHide: () => void }) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const handleEmailSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, pswd)
      .then(async ({ user: firebaseUser }) => {
        console.log("firebaseUser", firebaseUser);
        onHide();
      })
      .catch((error) => {
        if (error) {
          toast({
            title: "Uh oh!",
            variant: "destructive",
            description: error,
          });
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
      <PasswordInput
        placeholder="Password"
        className="h-[50px] border-gray-500 text-base"
        value={pswd}
        onChange={(e) => setPswd(e.target.value)}
      />
      <PasswordInput
        placeholder="Confirm Password"
        className="h-[50px] border-gray-500 text-base"
      />
      <Button variant="solid" onClick={handleEmailSignUp}>
        Register
      </Button>
    </div>
  );
};

export default SignupForm;
