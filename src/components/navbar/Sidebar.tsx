import Copyright from "../branding/Copyright";
import NavItem from "./NavItem";

function Sidebar() {
  return (
    <div className="min-h-full w-32 bg-primary fixed shadow-layout left-0 top-0 -z-10 pt-[15%]">
      <div className="flex flex-col gap-5 justify-center items-center w-full">
        <NavItem href="#" icon="yoga" />
        <NavItem href="#" icon="swimming" />
        <NavItem href="#" icon="ridding" />
        <NavItem href="#" icon="musculation" />
      </div>
      <Copyright />
    </div>
  );
}

export default Sidebar;
