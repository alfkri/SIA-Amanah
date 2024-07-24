import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  container__tagihanGrupB,
  container__tagihanGrupB__main,
  container__tagihanGrupB__content,
  tagihanGrupB__header,
  tagihanGrupB__table,
} from "../../../styles/TagihanGrupB.module.css";

const TagihanGrupB = () => {
  return (
    <div className={container__tagihanGrupB}>
      <Navbar />
      <div className={container__tagihanGrupB__main}>
        <MenuList />
        <div className={container__tagihanGrupB__content}>
          <div className={tagihanGrupB__header}>
            <div>
              <h1>Pengisian Perkembangan Bulanan</h1>
              <p>
                Kelola Pengisian Perkembangan Bulanan Siswa RA AMANAH SCHOOL
              </p>
              <p>Nominal: Rp. 500.000</p>
              <p>Tipe: Bulanan</p>
              <p>Grup: B</p>
            </div>
          </div>
          <table className={tagihanGrupB__table}>
            <thead>
              <tr>
                <th>Nama</th>
                <th>JAN</th>
                <th>FEB</th>
                <th>MAR</th>
                <th>APR</th>
                <th>MEI</th>
                <th>JUN</th>
                <th>JUL</th>
                <th>AGS</th>
                <th>SEP</th>
                <th>OKT</th>
                <th>NOV</th>
                <th>DES</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "#323232", fontWeight: "600" }}>
                  Maria Anders
                </td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Link href={"/"}>
                    <Image
                      src={require("../../../../public/assets/edit.svg")}
                      alt="hero"
                    ></Image>
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ color: "#323232", fontWeight: "600" }}>
                  Maria Anders
                </td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Link href={"/"}>
                    <Image
                      src={require("../../../../public/assets/edit.svg")}
                      alt="hero"
                    ></Image>
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ color: "#323232", fontWeight: "600" }}>
                  Maria Anders
                </td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td style={{ color: "#1A9E3D" }}>Lunas</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Link href={"/"}>
                    <Image
                      src={require("../../../../public/assets/edit.svg")}
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

export default TagihanGrupB;
