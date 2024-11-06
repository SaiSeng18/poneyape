import { redirect } from "next/navigation";

import CreateForm from "@/components/main/CreateForm";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { getUserLocale } from "@/locale";
import { createClient } from "@/prismicio";

export default async function CreatePage() {
  // const user = useCurrentUser();
  const locale = await getUserLocale();
  const client = createClient();

  const details = await client.getSingle("website_detail", { lang: locale });

  // if (!user) redirect("/");

  return <CreateForm details={details} />;
}
