import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Modal from "@/components/Modal";
import FormSPP from "@/components/FormSPP";
import {
  container__tagihanGrupA,
  container__tagihanGrupA__main,
  container__tagihanGrupA__content,
  tagihanGrupA__header,
  tagihanGrupA__table,
  tagihanGrupA__btn__action,
} from "../../../styles/TagihanGrupA.module.css";
import { useState } from "react";

const initialData = [
  {
    name: "Keyla",
    bulan: {
      JAN: { lunas: true, tanggalBayar: "2024-01-05" },
      FEB: { lunas: true, tanggalBayar: "2024-02-10" },
      MAR: { lunas: true, tanggalBayar: "2024-03-15" },
      APR: { lunas: true, tanggalBayar: "2024-04-20" },
      MEI: { lunas: true, tanggalBayar: "2024-05-25" },
      JUN: { lunas: true, tanggalBayar: "2024-06-30" },
      JUL: { lunas: false, tanggalBayar: "" },
      AGS: { lunas: false, tanggalBayar: "" },
      SEP: { lunas: false, tanggalBayar: "" },
      OKT: { lunas: false, tanggalBayar: "" },
      NOV: { lunas: false, tanggalBayar: "" },
      DES: { lunas: false, tanggalBayar: "" },
    },
  },
  {
    name: "Michael",
    bulan: {
      JAN: { lunas: true, tanggalBayar: "2024-01-05" },
      FEB: { lunas: true, tanggalBayar: "2024-02-10" },
      MAR: { lunas: true, tanggalBayar: "2024-03-15" },
      APR: { lunas: true, tanggalBayar: "2024-04-20" },
      MEI: { lunas: true, tanggalBayar: "2024-05-25" },
      JUN: { lunas: false, tanggalBayar: "" },
      JUL: { lunas: false, tanggalBayar: "" },
      AGS: { lunas: false, tanggalBayar: "" },
      SEP: { lunas: false, tanggalBayar: "" },
      OKT: { lunas: false, tanggalBayar: "" },
      NOV: { lunas: false, tanggalBayar: "" },
      DES: { lunas: false, tanggalBayar: "" },
    },
  },
  {
    name: "Fikri",
    bulan: {
      JAN: { lunas: true, tanggalBayar: "2024-01-05" },
      FEB: { lunas: true, tanggalBayar: "2024-02-10" },
      MAR: { lunas: true, tanggalBayar: "2024-03-15" },
      APR: { lunas: true, tanggalBayar: "2024-04-20" },
      MEI: { lunas: true, tanggalBayar: "2024-05-25" },
      JUN: { lunas: false, tanggalBayar: "" },
      JUL: { lunas: false, tanggalBayar: "" },
      AGS: { lunas: false, tanggalBayar: "" },
      SEP: { lunas: false, tanggalBayar: "" },
      OKT: { lunas: false, tanggalBayar: "" },
      NOV: { lunas: false, tanggalBayar: "" },
      DES: { lunas: false, tanggalBayar: "" },
    },
  },
];

const TagihanGrupA = () => {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [currentSiswa, setCurrentSiswa] = useState(null);
  const [currentBulan, setCurrentBulan] = useState("");

  const handleEditClick = (siswaIndex, bulan) => {
    setCurrentSiswa(siswaIndex);
    setCurrentBulan(bulan);
    setShowModal(true);
  };

  const handleFormSubmit = (formData) => {
    const newData = [...data];
    newData[currentSiswa].bulan[formData.bulan] = {
      lunas: true,
      tanggalBayar: formData.tanggalBayar,
    };
    setData(newData);
    setShowModal(false);
  };

  const handleDelete = (bulan) => {
    const newData = [...data];
    newData[currentSiswa].bulan[bulan] = {
      lunas: false,
      tanggalBayar: "",
    };
    setData(newData);
    setShowModal(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <div className={container__tagihanGrupA}>
      <Navbar />
      <div className={container__tagihanGrupA__main}>
        <MenuList />
        <div className={container__tagihanGrupA__content}>
          <div className={tagihanGrupA__header}>
            <div>
              <h1>Pengisian Perkembangan Bulanan</h1>
              <p>
                Kelola Pengisian Perkembangan Bulanan Siswa RA AMANAH SCHOOL
              </p>
              <p>Nominal: Rp. 500.000</p>
              <p>Tipe: Bulanan</p>
              <p>Grup: A</p>
            </div>
          </div>
          <table className={tagihanGrupA__table}>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((siswa, siswaIndex) => (
                <tr key={siswa.name}>
                  <td style={{ color: "#323232", fontWeight: "600" }}>
                    {siswa.name}
                  </td>
                  {Object.keys(siswa.bulan).map((bulan) => (
                    <td
                      key={bulan}
                      style={{
                        color: siswa.bulan[bulan].lunas ? "#1A9E3D" : "#FF0000",
                      }}
                    >
                      {siswa.bulan[bulan].lunas ? "Lunas" : "-"}
                    </td>
                  ))}
                  <td>
                    <button
                      className={tagihanGrupA__btn__action}
                      onClick={() => handleEditClick(siswaIndex, currentBulan)}
                    >
                      <Image
                        style={{ width: "20px", height: "20px" }}
                        src={require("../../../../public/assets/edit.svg")}
                        alt="edit"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal show={showModal} onClose={handleModalClose}>
            <FormSPP
              onSubmit={handleFormSubmit}
              initialData={data[currentSiswa]?.bulan[currentBulan]}
              onCancel={handleModalClose}
              onDelete={handleDelete}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TagihanGrupA;
