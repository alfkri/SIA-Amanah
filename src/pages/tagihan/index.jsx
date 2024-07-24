import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  container__tagihan,
  container__tagihan__main,
  container__tagihan__content,
  tagihan__data,
  tagihan__data__item,
  item__left,
  item__right,
} from "@/styles/Tagihan.module.css";
import Link from "next/link";

const Tagihan = () => {
  return (
    <div className={container__tagihan}>
      <Navbar />
      <div className={container__tagihan__main}>
        <MenuList />
        <div className={container__tagihan__content}>
          <h1 style={{ color: "#02bde3" }}>Tagihan SPP</h1>
          <div className={tagihan__data}>
            <Link
              href="/tagihan/tagihanGrupA"
              className={`${tagihan__data__item} ${item__left}`}
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
              href="/tagihan/tagihanGrupB "
              className={`${tagihan__data__item} ${item__right}`}
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

export default Tagihan;
