import { useNavigate } from "react-router"

function Link({label, href}: {label: string, href: string}) {
  const navigateTo = useNavigate();
  const handleNavigation = () => {
    console.log(`Navigating to ${href} for fake`);
    navigateTo('/');
  };
  return (
    <button
      className="cursor-pointer hover:underline text-secondary text-2xl font-medium"
      onClick={() => handleNavigation()}
    >
      {label}
    </button>
  )
}

export default Link