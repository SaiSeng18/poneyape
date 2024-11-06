import type { Client, Content } from "@prismicio/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { resources } from "@/constants";

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

export async function getLocales(
  doc: Content.AllDocumentTypes,
  client: Client<Content.AllDocumentTypes>,
) {
  const [repository, altDocs] = await Promise.all([
    client.getRepository(),
    doc.alternate_languages.length > 0
      ? client.getAllByIDs(
          doc.alternate_languages.map((altLang) => altLang.id),
          {
            lang: "*",
            // Exclude all fields to speed up the query.
            fetch: `${doc.type}.__nonexistent-field__`,
          },
        )
      : Promise.resolve([]),
  ]);

  return [doc, ...altDocs].map((page) => {
    const lang = repository?.languages.find((l) => l.id === page.lang);

    return {
      lang: lang?.id || "",
      url: page?.url || "",
      lang_name: lang?.name || "",
    };
  });
}
