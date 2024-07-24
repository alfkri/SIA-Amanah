import MenuListUser from "@/components/MenuListUser";
import NavbarUser from "@/components/NavbarUser";
import Link from "next/link";
import {
  container__raporSiswa,
  container__raporSiswa__main,
  container__raporSiswa__content,
  raporSiswa__header,
  raporSiswa__data,
} from "@/styles/RaporSiswa.module.css";

const RaporSiswa = () => {
  return (
    <div className={container__raporSiswa}>
      <NavbarUser />
      <div className={container__raporSiswa__main}>
        <MenuListUser />
        <div className={container__raporSiswa__content}>
          <div className={raporSiswa__header}>
            <div>
              <h1>Laporan Perkembangan Bulanan</h1>
              <p>Nama : Muhammad Al Fikri</p>
              <p>Grup : A</p>
            </div>
          </div>
          <div className={raporSiswa__data}>
            <p>Bulan Januari 2024</p>
            <Link href="/raporSiswa/raporSiswaJan">details</Link>
          </div>
          <div className={raporSiswa__data}>
            <p>Bulan Februari 2024</p>
            <Link href="/rapor/raporGrupA/februariA">details</Link>
          </div>
          <div className={raporSiswa__data}>
            <p>Bulan Maret 2024</p>
            <Link href="/rapor/raporGrupA/maretA">details</Link>
          </div>
          <div className={raporSiswa__data}>
            <p>Bulan April 2024</p>
            <Link href="/rapor/raporGrupA/maretA">details</Link>
          </div>
          {/* <div className={raporA__data}>
            <p>Bulan Mei 2024</p>
            <Link href="/rapor/raporGrupA/maret">details</Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Juni 2024</p>
            <Link href="/rapor/raporGrupA/maret">details</Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Juli 2024</p>
            <Link href="/rapor/raporGrupA/maret">details</Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Agustus 2024</p>
            <Link href="/rapor/raporGrupA/maret">details</Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan September 2024</p>
            <Link href="/rapor/raporGrupA/maret">details</Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Oktober 2024</p>
            <Link href="/rapor/raporGrupA/maret">details</Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan November 2024</p>
            <Link href="/rapor/raporGrupA/maret">details</Link>
          </div>
          <div className={raporA__data}>
            <p>Bulan Desember 2024</p>
            <Link href="/rapor/raporGrupA/maret">details</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RaporSiswa;
