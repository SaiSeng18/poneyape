export type Locale = (typeof locales)[number];

export const locales = ["en-US", "mm-my"] as const;
export const defaultLocale: Locale = "en-US";
