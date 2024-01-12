import { Link } from "@remix-run/react";
import Logo from "./Logo";
export default function Header() {
  return (
    <header className="flex justify-center">
      <Link className="max-w-32" to="/">
        <Logo width={128} height={80} />
      </Link>
    </header>
  );
}
