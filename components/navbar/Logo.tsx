import Link from "next/link";
import { Button } from "../ui/button";
import logo from "@/public/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="M. Heller Plumbing"
        // objectFit="contain" //outdated
        height={100}
        className="contain"
      />
    </Link>
  );
};
export default Logo;
