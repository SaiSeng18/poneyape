// // hooks/useLocale.ts
// "use client";

// import useSWR from "swr";

// import { getUserLocale } from ".";
// import { Locale } from "./config";

// const fetcher = (): Promise<Locale> =>
//   getUserLocale().then((res) => res as Locale);

// export default function useLocale() {
//   const {
//     data: locale,
//     error,
//     isLoading,
//     isValidating,
//   } = useSWR<Locale>("get-locale", fetcher, {
//     refreshInterval: 100,
//   });

//   return { locale, isValidating, isLoading, error };
// }
// hooks/useLocale.ts
"use client";

import { useEffect, useState } from "react";

import { getUserLocale, setUserLocale } from ".";
import { Locale } from "./config";

export default function useLocale() {
  const [locale, setLocale] = useState<Locale>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLocale = async () => {
    setIsLoading(true);
    try {
      const userLocale = await getUserLocale();
      setLocale(userLocale as Locale);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateLocale = async (newLocale: Locale) => {
    setIsLoading(true);
    try {
      await setUserLocale(newLocale);
      setLocale(newLocale); // Immediately update the client-side state
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLocale();
  }, []);

  return { locale, isLoading, error, updateLocale };
}
