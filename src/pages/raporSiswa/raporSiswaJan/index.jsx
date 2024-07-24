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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  sunt alias atque fugiat fuga vel. Sapiente quis labore ratione
                  voluptate numquam repellat deserunt illo officia expedita,
                  repudiandae autem et aliquam dolorum quaerat similique tempore
                  iste? Exercitationem labore optio soluta autem, illum sint
                  fuga ipsum eveniet ducimus enim et, culpa consequuntur!
                </td>
              </tr>
              <tr className={raporSiswaJan__table__row}>
                <th className={raporSiswaJan__table__cell}>
                  Perkembangan Motorik
                </th>
                <td className={raporSiswaJan__table__cell}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore facilis ad fuga placeat voluptate ducimus ipsum
                  accusamus consequuntur sapiente ratione eius rem, nihil sint,
                  cumque deleniti? Magni iure, vero ducimus quod nesciunt aut ea
                  reprehenderit consequatur voluptas dicta labore fugiat
                  nostrum. Autem hic, quis perspiciatis accusantium ab
                  distinctio sit incidunt?
                </td>
              </tr>
              <tr className={raporSiswaJan__table__row}>
                <th className={raporSiswaJan__table__cell}>
                  Perkembangan Kognitif
                </th>
                <td className={raporSiswaJan__table__cell}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque, maiores modi? Magni doloribus dolore labore illo dolor
                  veritatis excepturi repudiandae inventore aperiam, numquam
                  itaque dicta nobis iusto voluptates id deleniti omnis quia
                  praesentium temporibus corrupti neque aspernatur velit ipsum
                  voluptatibus? Nam inventore labore vitae provident est
                  obcaecati atque accusamus perferendis.
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
