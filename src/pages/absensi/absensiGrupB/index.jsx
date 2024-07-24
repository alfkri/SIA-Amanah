import React, { useState } from "react";
import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  container__absensiGrupA,
  container__absensiGrupA__main,
  container__absensiGrupA__content,
  absensiGrupA__header,
  absensiGrupA__tanggal,
  absensiGrupA__table,
  absensiGrupA__table__radio,
  absensiGrupA__btn__save,
  absensiGrupA__btn__container,
  absensiGrupA__keterangan,
} from "../../../styles/AbsensiGrupA.module.css";

const initialData = [
  { name: "Saiful", status: "" },
  { name: "Zuhdi", status: "" },
  { name: "Anam", status: "" },
];

const AbsensiGrupB = () => {
  const [absensiData, setAbsensiData] = useState(initialData);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  const handleRadioChange = (index, status) => {
    const newAbsensiData = [...absensiData];
    newAbsensiData[index].status = status;
    setAbsensiData(newAbsensiData);
  };

  const handleSave = () => {
    const dataToSave = {
      [selectedDate]: absensiData,
    };
    console.log("Data disimpan:", dataToSave);
  };

  return (
    <div className={container__absensiGrupA}>
      <Navbar />
      <div className={container__absensiGrupA__main}>
        <MenuList />
        <div className={container__absensiGrupA__content}>
          <div className={absensiGrupA__header}>
            <div>
              <h1>Absensi Siswa</h1>
              <p>Kelola Data Absensi Siswa RA AMANAH SCHOOL</p>
            </div>
            <div className={absensiGrupA__tanggal}>
              <p>Pilih Tanggal</p>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>
          <table className={absensiGrupA__table}>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {absensiData.map((siswa, index) => (
                <tr key={index}>
                  <td style={{ color: "#323232", fontWeight: "600" }}>
                    {siswa.name}
                  </td>
                  <td className={absensiGrupA__table__radio}>
                    <div>
                      <input
                        type="radio"
                        id={`hadir-${index}`}
                        name={`keterangan-${index}`}
                        checked={siswa.status === "H"}
                        onChange={() => handleRadioChange(index, "H")}
                      />
                      <label htmlFor={`hadir-${index}`}>H</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id={`izin-${index}`}
                        name={`keterangan-${index}`}
                        checked={siswa.status === "I"}
                        onChange={() => handleRadioChange(index, "I")}
                      />
                      <label htmlFor={`izin-${index}`}>I</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id={`sakit-${index}`}
                        name={`keterangan-${index}`}
                        checked={siswa.status === "S"}
                        onChange={() => handleRadioChange(index, "S")}
                      />
                      <label htmlFor={`sakit-${index}`}>S</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id={`alfa-${index}`}
                        name={`keterangan-${index}`}
                        checked={siswa.status === "A"}
                        onChange={() => handleRadioChange(index, "A")}
                      />
                      <label htmlFor={`alfa-${index}`}>A</label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={absensiGrupA__btn__container}>
            <button className={absensiGrupA__btn__save} onClick={handleSave}>
              <Image
                src={require("../../../../public/assets/save.svg")}
                alt="save"
              />
              Simpan
            </button>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <p style={{ fontWeight: "600", marginBottom: "1rem" }}>
              Keterangan Absensi
            </p>
            <table className={absensiGrupA__keterangan}>
              <tbody>
                <tr>
                  <td>H</td>
                  <td>=</td>
                  <td>Hadir</td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>=</td>
                  <td>Tidak Masuk Tanpa Keterangan</td>
                </tr>
                <tr>
                  <td>I</td>
                  <td>=</td>
                  <td>Tidak Masuk Ada Surat Izin Atau pemberitahuan</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>=</td>
                  <td>Tidak Hadir Karena sakit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsensiGrupB;
