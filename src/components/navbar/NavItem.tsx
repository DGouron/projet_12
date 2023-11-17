const iconMapping = new Map([
  ["ridding", "/icons/ridding.svg"],
  ["swimming", "/icons/swimming.svg"],
  ["yoga", "/icons/yoga.svg"],
  ["musculation", "/icons/musculation.svg"],
]);

function NavItem({ href, icon }: { href: string; icon: string }) {
  return (
    <a href={href} hrefLang="fr">
      <img src={iconMapping.get(icon)} alt="" className="w-16 h-16" />
    </a>
  );
}

export default NavItem;
