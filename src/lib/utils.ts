import { resources } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { getDownloadURL, ref } from "firebase/storage";
import { twMerge } from "tailwind-merge";
import { storage } from "./firebase";

export function createStringExtractor(language?: string | null) {
  if (!language) {
    language = "en";
  }
  return (title: string) => resources[language].translation[title];
}

export function getDomain(url: string): string {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  } catch (error) {
    return "";
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIdDownloadUrl(sitedataId: string) {
  return getDownloadURL(ref(storage, `sitedata/${sitedataId}`));
}