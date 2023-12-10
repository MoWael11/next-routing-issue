import ClientHeader from "@/components/Header";

export default async function Header() {
  const username = "user01"; // getting data from server
  await new Promise((r) => setTimeout(r, 4000));

  return <ClientHeader username={username} />;
}
