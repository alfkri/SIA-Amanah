import MenuListUser from "@/components/MenuListUser";
import NavbarUser from "@/components/NavbarUser";
import {
  container__home,
  container__home__main,
  home__hero,
  container__home__content,
} from "@/styles/Home.module.css";

const UserHome = () => {
  return (
    <div className={container__home}>
      <NavbarUser />
      <div className={container__home__main}>
        <MenuListUser />
        <div className={container__home__content}>
          <div className={home__hero}>
            <p>
              Selamat Datang Muhammad Al Fikri di Sistem Informasi Akademik RA
              AMANAH SCHOOL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
