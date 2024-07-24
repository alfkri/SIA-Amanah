import Image from "next/image";
import Link from "next/link";
import NavbarLogo from "../../../public/assets/logo-navbar.png";
import UserLogo from "../../../public/assets/user-navbar.svg";
import {
  navbar__container,
  navbar__logo,
} from "../../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={navbar__container}>
      <ul>
        <li>
          <Image className={navbar__logo} alt="amanah-logo" src={NavbarLogo} />
        </li>
        <li>
          <Link href="/">
            SISTEM INFORMASI AKADEMIK
            <br />
            RA AMANAH SCHOOL
          </Link>
        </li>
      </ul>
      <ul>
        <li>ADMIN</li>
        <li>
          <a href="">
            <Image alt="user" src={UserLogo} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
