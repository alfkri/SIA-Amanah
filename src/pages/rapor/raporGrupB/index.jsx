import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  container__raporB,
  container__raporB__main,
  container__raporB__content,
  raporB__header,
  raporB__btn__tambah,
  raporB__data,
} from "@/styles/RaporGrupB.module.css";

const RaporGrupB = () => {
  return (
    <div className={container__raporB}>
      <Navbar />
      <div className={container__raporB__main}>
        <MenuList />
        <div className={container__raporB__content}>
          <div className={raporB__header}>
            <div>
              <h1>Pengisian Perkembangan Bulanan</h1>
              <p>
                Kelola Pengisian Perkembangan Bulanan Siswa RA AMANAH SCHOOL
              </p>
            </div>
            <button className={raporB__btn__tambah} type="submit">
              + Tambahkan
            </button>
          </div>
          <div className={raporB__data}>
            <p>Bulan Januari 2024</p>
            <Link href="/rapor/raporGrupB/januariB">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporB__data}>
            <p>Bulan Februari 2024</p>
            <Link href="/rapor/raporGrupB/februariB">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporB__data}>
            <p>Bulan Maret 2024</p>
            <Link href="/rapor/raporGrupB/maretB">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporB__data}>
            <p>Bulan April 2024</p>
            <Link href="/rapor/raporGrupB/maretB">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporB__data}>
            <p>Bulan Mei 2024</p>
            <Link href="/rapor/raporGrupB/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporB__data}>
            <p>Bulan Juni 2024</p>
            <Link href="/rapor/raporGrupB/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporB__data}>
            <p>Bulan Juli 2024</p>
            <Link href="/rapor/raporGrupB/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporB__data}>
            <p>Bulan Agustus 2024</p>
            <Link href="/rapor/raporGrupB/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporB__data}>
            <p>Bulan September 2024</p>
            <Link href="/rapor/raporGrupB/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporB__data}>
            <p>Bulan Oktober 2024</p>
            <Link href="/rapor/raporGrupB/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporB__data}>
            <p>Bulan November 2024</p>
            <Link href="/rapor/raporGrupB/maret">
              <Image
                src={require("../../../../public/assets/edit.svg")}
                alt="hero"
              ></Image>
            </Link>
          </div>
          <div className={raporB__data}>
            <p>Bulan Desember 2024</p>
            <Link href="/rapor/raporGrupB/maret">
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

export default RaporGrupB;
