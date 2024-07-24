import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  container__rapor,
  container__rapor__main,
  container__rapor__content,
  rapor__data,
  rapor__data__item,
  item__left,
  item__right,
} from "@/styles/Rapor.module.css";
import Link from "next/link";

const Rapor = () => {
  return (
    <div className={container__rapor}>
      <Navbar />
      <div className={container__rapor__main}>
        <MenuList />
        <div className={container__rapor__content}>
          <h1 style={{ color: "#02bde3" }}>Nilai Rapor</h1>
          <div className={rapor__data}>
            <Link
              href="/rapor/raporGrupA"
              className={`${rapor__data__item} ${item__left}`}
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
              href="/rapor/raporGrupB"
              className={`${rapor__data__item} ${item__right}`}
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

export default Rapor;
