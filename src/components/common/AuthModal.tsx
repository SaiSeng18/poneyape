import {
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import LoginForm from "@/components/main/LoginForm";
import SignupForm from "@/components/main/SignupForm";
import { useState } from "react";
import { Button } from "../ui/button";

const AuthModal = ({ show, setShow }: AuthModalProps) => {
  const [view, setView] = useState<"signup" | "login">("signup");

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    signInWithPopup(auth, provider)
      .then(async (result) => {
        if (getAdditionalUserInfo(result)?.isNewUser) {
          // toast.success("Successfully signed in.");
        }

        setShow(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const closeModal = () => setShow(false);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 ${show ? "flex" : "hidden"} h-full max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-[#000000aa] md:inset-0`}
      aria-label="Backdrop"
    >
      <div
        className="relative h-[700px] max-h-full w-full max-w-[600px] rounded-lg shadow dark:bg-gray-700"
        aria-label="Modal"
        style={{
          background:
            "linear-gradient(156deg, #F8F0FF 3.55%, #FFF 49.39%, #E2F0FF 98.07%)",
        }}
      >
        <div className="flex flex-col items-center justify-between rounded-lg px-6 pt-4 md:px-12 md:pt-4">
          <button
            type="button"
            onClick={closeModal}
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <h1 className="mb-4 font-bold">
            {view === "signup" ? "Register" : "Login"}
          </h1>
          <h5>Join our community!</h5>
        </div>
        <div className="flex flex-col space-y-4 px-6 pb-10 pt-6 md:px-12 md:pb-12 md:pt-8">
          {view === "login" ? (
            <LoginForm onHide={closeModal} />
          ) : (
            <SignupForm onHide={closeModal} />
          )}
          <div className="relative py-4">
            <span className="absolute left-[235px] top-1 bg-black px-1 text-white">
              OR
            </span>
            <hr className="border border-dashed border-[#1B1B1B]" />
          </div>
          <Button
            className="bg-transparent"
            onClick={handleGoogleSignIn}
            variant="outline"
          >
            Continue with Google
          </Button>
          <Button
            className="bg-transparent"
            onClick={handleGoogleSignIn}
            variant="outline"
          >
            Continue with Facebook
          </Button>
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
      </div>
    </div>
  );
};

export default AuthModal;
