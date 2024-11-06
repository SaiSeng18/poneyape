import React, { useState } from "react";

import { useToast } from "@/hooks/use-toast";
import { firebaseClient } from "@/lib/firebase";

const SignupForm = ({ onHide }: { onHide: () => void }) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [confirm, setConfirm] = useState("");

  const { toast } = useToast();

  const handleEmailSignUp = async () => {
    if (pswd !== confirm) {
      toast({
        className: "bg-red-500 border-none",
        title: "Your password does not match",
        description: "Please check your password and try again.",
      });
      return;
    }

    try {
      const res = await firebaseClient.signUpWithEmail(email, pswd);

      if (res) {
        onHide();
      } else {
        toast({
          className: "bg-red-500 border-none",
          title: "Uh oh! Something went wrong.",
          description: "Please check your email and password and try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please check your email and password and try again.",
      });
    }
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
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button className="c-primary c-solid" onClick={handleEmailSignUp}>
        Register
      </button>
    </div>
  );
};

export default SignupForm;
