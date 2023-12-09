import ClientHeader from "@/components/Header";

const Header = async () => {
  const username = "user01"; // getting data from server
  await new Promise((r) => setTimeout(r, 10000));

  return <ClientHeader username={username} />;
};

export default Header;
