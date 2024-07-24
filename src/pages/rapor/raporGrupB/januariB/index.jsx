import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  container__raporBBulanan,
  container__raporBBulanan__main,
  container__raporBBulanan__content,
  raporBBulanan__header,
  raporBBulanan__table,
} from "../../../../styles/RaporBBulanan.module.css";

const RaporBJanuari = () => {
  return (
    <div className={container__raporBBulanan}>
      <Navbar />
      <div className={container__raporBBulanan__main}>
        <MenuList />
        <div className={container__raporBBulanan__content}>
          <div className={raporBBulanan__header}>
            <div>
              <h1>Pengisian Perkembangan Bulanan</h1>
              <p>
                Kelola Pengisian Perkembangan Bulanan Siswa RA AMANAH SCHOOL
              </p>
            </div>
          </div>
          <table className={raporBBulanan__table}>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Perkembangan Nilai Moral dan Agama</th>
                <th>Perkembangan Motorik</th>
                <th>Perkembangan Kognitif</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "#323232", fontWeight: "600" }}>
                  Maria Anders
                </td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur aut porro deserunt.
                </td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur aut porro deserunt.
                </td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur aut porro deserunt.
                </td>
                <td>
                  <Link href={"/rapor/grupA/januari/edit"}>
                    <Image
                      src={require("../../../../../public/assets/edit.svg")}
                      alt="hero"
                    ></Image>
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ color: "#323232", fontWeight: "600" }}>
                  Maria Anders
                </td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur aut porro deserunt.
                </td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur aut porro deserunt.
                </td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur aut porro deserunt.
                </td>
                <td>
                  <Link href={"/rapor/grupA/januari/edit"}>
                    <Image
                      src={require("../../../../../public/assets/edit.svg")}
                      alt="hero"
                    ></Image>
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ color: "#323232", fontWeight: "600" }}>
                  Maria Anders
                </td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur aut porro deserunt.
                </td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur aut porro deserunt.
                </td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur aut porro deserunt.
                </td>
                <td>
                  <Link href={"/rapor/grupA/januari/edit"}>
                    <Image
                      src={require("../../../../../public/assets/edit.svg")}
                      alt="hero"
                    ></Image>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RaporBJanuari;
