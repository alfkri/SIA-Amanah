import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  menu__list__container,
  menu__list__containerIcon,
  menu__list__icon,
} from "../../styles/MenuList.module.css";
import HomeIcon from "../../../public/assets/Home.svg";
import UserIcon from "../../../public/assets/User.svg";
import LaporanIcon from "../../../public/assets/File_dock.svg";
import SPPIcon from "../../../public/assets/Paper.svg";
import AbsensiIcon from "../../../public/assets/Date_range.svg";
import LogoutIcon from "../../../public/assets/Sign_out_circle.svg";

const MenuList = () => {
  return (
    <div className={menu__list__container}>
      <div>
        <Link href="/" className={menu__list__containerIcon}>
          <Image className={menu__list__icon} src={HomeIcon} alt="Icon" />
          <p>Dashboard</p>
        </Link>
        <Link href="/siswa" className={menu__list__containerIcon}>
          <Image src={UserIcon} alt="Icon" />
          <p>Data Siswa</p>
        </Link>
        <Link href="/guru" className={menu__list__containerIcon}>
          <Image src={UserIcon} alt="Icon" />
          <p>Data Guru</p>
        </Link>
        <Link href="/rapor" className={menu__list__containerIcon}>
          <Image src={LaporanIcon} alt="Icon" />
          <p>Nilai Rapor</p>
        </Link>
        <Link href="/tagihan" className={menu__list__containerIcon}>
          <Image src={SPPIcon} alt="Icon" />
          <p>Tagihan SPP</p>
        </Link>
        <Link href="/absensi" className={menu__list__containerIcon}>
          <Image src={AbsensiIcon} alt="Icon" />
          <p>Absensi Siswa</p>
        </Link>
      </div>
      <div>
        <div className={menu__list__containerIcon}>
          <Image src={LogoutIcon} alt="Icon" />
          <a href={"/auth/login"}>Logout</a>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
