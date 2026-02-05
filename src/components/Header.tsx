import { Menu } from "lucide-react";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between px-4 py-4">
      <div className="flex flex-row items-center gap-4">
        <Menu className="text-primary hover:cursor-pointer" />
        <img
          className="h-auto w-20"
          src="/company_assets/company_logo_blue.webp"
          alt="Header Logo"
        />
      </div>
      <div className="flex flex-row gap-2.5">
        <Button buttonStyle="uppercase px-3 py-0 h-[35px] font-light bg-primary rounded-md text-white text-xs">
          Acceso
        </Button>
        <Button buttonStyle="uppercase p-3 py-0 h-[35px] font-light bg-primary-green rounded-md text-white text-xs">
          Regístrate
        </Button>
      </div>
    </header>
  );
}
