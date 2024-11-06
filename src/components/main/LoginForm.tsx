import React, { useState } from "react";

import { useToast } from "@/hooks/use-toast";
import { firebaseClient } from "@/lib/firebase";

const LoginForm = ({ onHide }: { onHide: () => void }) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const { toast } = useToast();

  const handleEmailSignUp = async () => {
    try {
      const res = await firebaseClient.signInWithEmail(email, pswd);

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

  const handleResetPassword = async () => {
    if (!email) {
      toast({
        className: "bg-red-500 border-none",
        title: "Please enter your email address",
        description: "We need your email address to reset your password.",
      });
      return;
    }

    try {
      const res = await firebaseClient.resetPassword(email);

      if (res) {
        toast({
          className: "bg-green-500 border-none",
          title: "Password reset email sent",
          description:
            "Check your email for instructions on resetting your password.",
        });
      }
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Error resetting password. Please try again.",
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
      <button className="c-primary c-solid" onClick={handleEmailSignUp}>
        Login
      </button>

      <div>
        Forgot your password?{" "}
        <button className="underline" onClick={handleResetPassword}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
