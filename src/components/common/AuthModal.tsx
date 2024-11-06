import { useState } from "react";

import LoginForm from "@/components/main/LoginForm";
import SignupForm from "@/components/main/SignupForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { firebaseClient } from "@/lib/firebase";
import { AuthModalProps } from "@/types";

import FacebookIcon from "../icons/FacebookIcon";
import GoogleIcon from "../icons/GoogleIcon";

const AuthModal = ({ show, setShow }: AuthModalProps) => {
  const [view, setView] = useState<"signup" | "login">("signup");

  const handleGoogleSignIn = async () => {
    const res = await firebaseClient.signInWithGoogle();
    if (res) {
      setShow(false);
    }
  };

  const handleFacebookSignIn = async () => {
    const res = await firebaseClient.signInWithFacebook();
    if (res) {
      setShow(false);
    }
  };

  const closeModal = () => setShow(false);

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogContent
        aria-describedby="Authentication Modal"
        className="rounded-lg shadow dark:bg-gray-700"
        style={{
          background:
            "linear-gradient(156deg, #F8F0FF 3.55%, #FFF 49.39%, #E2F0FF 98.07%)",
        }}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col items-center justify-center">
          <DialogTitle className="mb-4 font-bold text-5xl font-roboto">
            {view === "signup" ? "Register" : "Login"}
          </DialogTitle>
          <h5>Join our community!</h5>
        </DialogHeader>
        <div className="flex flex-col space-y-4 px-6 pb-10 pt-6 md:px-12 md:pb-12 md:pt-8">
          {view === "login" ? (
            <LoginForm onHide={closeModal} />
          ) : (
            <SignupForm onHide={closeModal} />
          )}
          <div className="relative flex w-full items-center py-4">
            <div className="w-full border border-dashed border-[#1B1B1B]" />
            <span className="px-1">OR</span>
            <div className="w-full border border-dashed border-[#1B1B1B]" />
          </div>
          <button
            data-modal-hide="default-modal"
            type="button"
            className="c-outline c-black flex items-center justify-center gap-2"
            onClick={handleGoogleSignIn}
          >
            <GoogleIcon />
            Continue with Google
          </button>
          <button
            data-modal-hide="default-modal"
            type="button"
            className="c-outline c-black flex items-center justify-center gap-2"
            onClick={handleFacebookSignIn}
          >
            <FacebookIcon />
            Continue with Facebook
          </button>
          {view === "signup" ? (
            <p className="text-center">
              Already have an account?{" "}
              <button className="underline" onClick={() => setView("login")}>
                Log in
              </button>
            </p>
          ) : (
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <button className="underline" onClick={() => setView("signup")}>
                Sign Up
              </button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
