import MenuListUser from "@/components/MenuListUser";
import NavbarUser from "@/components/NavbarUser";

import {
  container__raporSiswaJan,
  container__raporSiswaJan__main,
  container__raporSiswaJan__content,
  raporSiswaJan__header,
  raporSiswaJan__table,
  raporSiswaJan__table__row,
  raporSiswaJan__table__cell,
} from "@/styles/RaporSiswaJan.module.css";

const RaporSiswaJan = () => {
  return (
    <div className={container__raporSiswaJan}>
      <NavbarUser />
      <div className={container__raporSiswaJan__main}>
        <MenuListUser />
        <div className={container__raporSiswaJan__content}>
          <div className={raporSiswaJan__header}>
            <div>
              <h1>Laporan Perkembangan Bulanan</h1>
              <p>Nama : Muhammad Al Fikri</p>
              <p>Semester : 1</p>
              <p>Grup : A</p>
            </div>
          </div>
          <table className={raporSiswaJan__table}>
            <tbody>
              <tr className={raporSiswaJan__table__row}>
                <th className={raporSiswaJan__table__cell}>
                  Perkembangan Nilai Moral dan Agama
                </th>
                <td className={raporSiswaJan__table__cell}>
                  Ananda Fikri sudah mulai bisa menghafal doa makan dan doa
                  sebelum tidur
                </td>
              </tr>
              <tr className={raporSiswaJan__table__row}>
                <th className={raporSiswaJan__table__cell}>
                  Perkembangan Motorik
                </th>
                <td className={raporSiswaJan__table__cell}>
                  Ananda Fikri menunjukkan kemampuan yang baik dalam menggenggam
                  pensil dan alat gambar. Ia dapat menggambar bentuk sederhana
                  dan mulai menulis huruf-huruf dasar.
                </td>
              </tr>
              <tr className={raporSiswaJan__table__row}>
                <th className={raporSiswaJan__table__cell}>
                  Perkembangan Kognitif
                </th>
                <td className={raporSiswaJan__table__cell}>
                  Ananda Fikri mampu menyusun puzzle dengan baik dan cepat
                  mengenali pola dalam permainan balok.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RaporSiswaJan;
