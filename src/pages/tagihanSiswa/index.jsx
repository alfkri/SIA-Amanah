import MenuListUser from "@/components/MenuListUser";
import NavbarUser from "@/components/NavbarUser";

import {
  container__tagihanSiswa,
  container__tagihanSiswa__main,
  container__tagihanSiswa__content,
  tagihanSiswa__header,
  tagihanSiswa__table,
  statusLunas,
  statusBelumLunas,
} from "@/styles/TagihanSiswa.module.css";

const TagihanSiswa = () => {
  const dataTagihan = [
    {
      bulan: "JAN",
      tagihan: 0,
      tanggalBayar: "12 Januari 2023",
      status: "LUNAS",
    },
    {
      bulan: "FEB",
      tagihan: 0,
      tanggalBayar: "12 Februari 2023",
      status: "LUNAS",
    },
    {
      bulan: "MAR",
      tagihan: 0,
      tanggalBayar: "12 Maret 2023",
      status: "LUNAS",
    },
    { bulan: "APR", tagihan: 500000, tanggalBayar: "-", status: "Belum Lunas" },
    { bulan: "MEI", tagihan: 500000, tanggalBayar: "-", status: "Belum Lunas" },
    { bulan: "JUN", tagihan: 500000, tanggalBayar: "-", status: "Belum Lunas" },
    { bulan: "JUL", tagihan: 500000, tanggalBayar: "-", status: "Belum Lunas" },
  ];
  return (
    <div className={container__tagihanSiswa}>
      <NavbarUser />
      <div className={container__tagihanSiswa__main}>
        <MenuListUser />
        <div className={container__tagihanSiswa__content}>
          <div className={tagihanSiswa__header}>
            <div>
              <h1>Tagihan SPP Siswa</h1>
              <p>Nama : Muhammad Al Fikri</p>
              <p>Grup : A</p>
            </div>
          </div>
          <table className={tagihanSiswa__table}>
            <thead>
              <tr>
                <th>Bulan</th>
                <th>Tagihan</th>
                <th>Tanggal Bayar</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dataTagihan.map((item, index) => (
                <tr key={index}>
                  <td>{item.bulan}</td>
                  <td>{item.tagihan}</td>
                  <td>{item.tanggalBayar}</td>
                  <td>
                    <span
                      className={
                        item.status === "LUNAS" ? statusLunas : statusBelumLunas
                      }
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TagihanSiswa;
