import Brand from "../branding/Brand";
import Link from "../navigation/Link";

function Header() {
  return (
    <header className="w-full pl-7 gap-[150px] flex bg-primary shadow-layout h-24 items-center justify-start">
      <Brand />
      <nav className="w-full flex justify-between pr-24">
        <Link href="/home" label="Accueil" />
        <Link href="/profil" label="Profil" />
        <Link href="/settings" label="Réglages" />
        <Link href="/community" label="Communauté" />
      </nav>
    </header>
  );
}

export default Header;
