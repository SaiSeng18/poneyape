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
import { X } from "lucide-react";
import { FacebookAuthProvider } from "firebase/auth";
import { toast } from "@/hooks/use-toast";

const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
fbProvider.setCustomParameters({
  display: "popup",
});

const AuthModal = ({ show, setShow }: AuthModalProps) => {
  const [activeView, setActiveView] = useState<"signup" | "login">("signup");

  const handleGoogleSignIn = () => {
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });

    signInWithPopup(auth, googleProvider).catch((error) => {
      toast({
        title: "Uh oh!",
        description: error.message,
        variant: "destructive",
      });
    });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, fbProvider).catch((error) => {
      toast({
        title: "Uh oh!",
        description: error.message,
        variant: "destructive",
      });
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
            <X />
            <span className="sr-only">Close modal</span>
          </button>
          <h1 className="mb-4 font-bold">
            {activeView === "signup" ? "Register" : "Login"}
          </h1>
          <h5>Join our community!</h5>
        </div>
        <div className="flex flex-col space-y-4 px-6 pb-10 pt-6 md:px-12 md:pb-12 md:pt-8">
          {activeView === "login" ? (
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
            <svg
              className="me-3"
              role="img"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Google</title>
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            Continue with Google
          </Button>
          <Button
            className="bg-transparent"
            onClick={handleFacebookSignIn}
            variant="outline"
          >
            <svg
              className="me-3"
              role="img"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
            </svg>
            Continue with Facebook
          </Button>
          {activeView === "signup" ? (
            <p className="text-center">
              Already have an account?{" "}
              <button
                className="underline"
                onClick={() => setActiveView("login")}
              >
                Log in
              </button>
            </p>
          ) : (
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <button
                className="underline"
                onClick={() => setActiveView("signup")}
              >
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
