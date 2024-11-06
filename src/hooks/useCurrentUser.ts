"use client";

import { User } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return currentUser;
};
