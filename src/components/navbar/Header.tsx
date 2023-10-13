import Brand from "../branding/Brand"
import Link from "../navigation/Link"

function Header() {
  return (
    <header className="w-screen flex bg-primary shadow-layout h-24 items-center justify-start">
      <Brand />
      <nav>
        <Link href="/home" label="Accueil" />
        <Link href="/profil" label="Profil" />
        <Link href="/settings" label="Réglage" />
        <Link href="/community" label="Communauté" />
      </nav>
    </header>
  )
}

export default Header