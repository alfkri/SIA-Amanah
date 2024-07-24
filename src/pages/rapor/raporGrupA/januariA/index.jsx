import React, { useState } from "react";
import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Modal from "@/components/Modal";
import FormRapor from "@/components/FormRapor";
import {
  container__raporABulanan,
  container__raporABulanan__main,
  container__raporABulanan__content,
  raporABulanan__header,
  raporABulanan__table,
  raporABulanan__btn__action,
} from "../../../../styles/RaporABulanan.module.css";

const RaporAJanuari = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRapor, setCurrentRapor] = useState(null);
  const [students, setStudents] = useState([
    {
      name: "Saiful",
      moral: "-.",
      motorik: "-",
      kognitif: "-",
    },
    {
      name: "Adi",
      moral: "-",
      motorik: "-",
      kognitif: "-",
    },
    {
      name: "Maria",
      moral: "-",
      motorik: "-",
      kognitif: "-",
    },
  ]);

  const handleEditClick = (student) => {
    setCurrentRapor(student);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentRapor(null);
  };

  const handleFormSubmit = (updatedData) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.name === updatedData.name ? updatedData : student
      )
    );
    setIsModalOpen(false);
  };

  return (
    <div className={container__raporABulanan}>
      <Navbar />
      <div className={container__raporABulanan__main}>
        <MenuList />
        <div className={container__raporABulanan__content}>
          <div className={raporABulanan__header}>
            <div>
              <h1>Pengisian Perkembangan Bulanan</h1>
              <p>
                Kelola Pengisian Perkembangan Bulanan Siswa RA AMANAH SCHOOL
              </p>
            </div>
          </div>
          <table className={raporABulanan__table}>
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
              {students.map((student) => (
                <tr key={student.name}>
                  <td style={{ color: "#323232", fontWeight: "600" }}>
                    {student.name}
                  </td>
                  <td>{student.moral}</td>
                  <td>{student.motorik}</td>
                  <td>{student.kognitif}</td>
                  <td>
                    <button
                      className={raporABulanan__btn__action}
                      onClick={() => handleEditClick(student)}
                    >
                      <Image
                        style={{ width: "20px", height: "20px" }}
                        src={require("../../../../../public/assets/edit.svg")}
                        alt="edit"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={handleModalClose}>
        <FormRapor
          initialData={currentRapor}
          onSubmit={handleFormSubmit}
          onCancel={handleModalClose}
        />
      </Modal>
    </div>
  );
};

export default RaporAJanuari;
