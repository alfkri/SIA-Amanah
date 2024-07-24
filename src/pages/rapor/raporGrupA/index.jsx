import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  container__raporA,
  container__raporA__main,
  container__raporA__content,
  raporA__header,
  raporA__btn__tambah,
  raporA__data,
} from "@/styles/RaporGrupA.module.css";

const RaporGrupA = () => {
  return (
    <div className={container__raporA}>
      <Navbar />
      <div className={container__raporA__main}>
        <MenuList />
        <div className={container__raporA__content}>
          <div className={raporA__header}>
            <div>
              <h1>Pengisian Perkembangan Bulanan</h1>
              <p>
                Kelola Pengisian Perkembangan Bulanan Siswa RA AMANAH SCHOOL
              </p>
            </div>
            <button className={raporA__btn__tambah} type="submit">
              + Tambahkan
            </button>
          </div>
          <div className={raporA__data}>
            <p>Bulan Januari 2024</p>
            <Link href="/rapor/raporGrupA/januariA">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Februari 2024</p>
            <Link href="/rapor/raporGrupA/februariA">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Maret 2024</p>
            <Link href="/rapor/raporGrupA/maretA">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan April 2024</p>
            <Link href="/rapor/raporGrupA/maretA">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Mei 2024</p>
            <Link href="/rapor/raporGrupA/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Juni 2024</p>
            <Link href="/rapor/raporGrupA/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Juli 2024</p>
            <Link href="/rapor/raporGrupA/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Agustus 2024</p>
            <Link href="/rapor/raporGrupA/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan September 2024</p>
            <Link href="/rapor/raporGrupA/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Oktober 2024</p>
            <Link href="/rapor/raporGrupA/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan November 2024</p>
            <Link href="/rapor/raporGrupA/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Desember 2024</p>
            <Link href="/rapor/raporGrupA/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaporGrupA;
