import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  container__absensi,
  container__absensi__main,
  container__absensi__content,
  absensi__data,
  absensi__data__item,
  item__left,
  item__right,
} from "@/styles/Absensi.module.css";
import Link from "next/link";

const AbsensiSiswa = () => {
  return (
    <div className={container__absensi}>
      <Navbar />
      <div className={container__absensi__main}>
        <MenuList />
        <div className={container__absensi__content}>
          <h1 style={{ color: "#02bde3" }}>Absensi Siswa</h1>
          <div className={absensi__data}>
            <Link
              href="/absensi/absensiGrupA"
              className={`${absensi__data__item} ${item__left}`}
            >
              <div>
                <Image
                  src={require("../../../public/assets/User_fill.png")}
                  alt="hero"
                />
                <p>Grup A</p>
              </div>
              <p>15 Siswa</p>
            </Link>
            <Link
              href="/absensi/absensiGrupB"
              className={`${absensi__data__item} ${item__right}`}
            >
              <div>
                <Image
                  src={require("../../../public/assets/User_fill.png")}
                  alt="hero"
                />
                <p>Grup B</p>
              </div>
              <p>23 Siswa</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsensiSiswa;
