const Header = async () => {
  await new Promise((r) => setTimeout(r, 10000));
  return <header>header</header>;
};

export default Header;
