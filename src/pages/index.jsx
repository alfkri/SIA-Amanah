import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  container__home,
  container__home__main,
  home__hero,
  container__home__content,
  home__data,
  home__data__item,
  item__left,
  item__right,
} from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={container__home}>
      <Navbar />
      <div className={container__home__main}>
        <MenuList />
        <div className={container__home__content}>
          <div className={home__hero}>
            <p>Selamat Datang di Sistem Informasi Akademik RA AMANAH SCHOOL</p>
          </div>
          <div className={home__data}>
            <div className={`${home__data__item} ${item__left}`}>
              <div>
                <Image
                  src={require("../../public/assets/User_fill.png")}
                  alt="hero"
                />
                <p>Jumlah Siswa RA AMANAH SCHOOL</p>
              </div>
              <p>38 Siswa</p>
            </div>
            <div className={`${home__data__item} ${item__right}`}>
              <div>
                <Image
                  src={require("../../public/assets/User_fill.png")}
                  alt="hero"
                />
                <p>Jumlah Guru RA AMANAH SCHOOL</p>
              </div>
              <p>5 Guru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
