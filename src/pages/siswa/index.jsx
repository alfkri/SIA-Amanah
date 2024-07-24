import React, { useState } from "react";
import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import FormSiswa from "@/components/FormSiswa";
import Image from "next/image";
import {
  container__siswa,
  container__siswa__main,
  container__siswa__content,
  siswa__header,
  siswa__btn__tambah,
  siswa__search,
  siswa__subheader,
  siswa__btn__action,
  siswa__table,
} from "@/styles/Siswa.module.css";
import EditLogo from "../../../public/assets/edit.svg";

const DataSiswa = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSiswa, setCurrentSiswa] = useState(null);
  const [siswaData, setSiswaData] = useState([
    {
      id: 1,
      name: "Saiful",
      address: "Komplek BBD No.10, Depok",
      birthdate: "2018-01-29",
      parentPhone: "081234567890",
      group: "B",
      studentId: "123456789",
      parentName: "Saifullah",
      status: "Aktif",
    },
    {
      id: 2,
      name: "Zuhdi",
      address: "Jl. Jonggol No.1, Depok",
      birthdate: "2018-05-01",
      parentPhone: "081234567890",
      group: "B",
      studentId: "123456789",
      parentName: "Jamal",
      status: "Aktif",
    },
    {
      id: 3,
      name: "Keyla",
      address: "Jl. Mangga No.1, Jakarta Timur",
      birthdate: "2018-01-05",
      parentPhone: "081234567890",
      group: "A",
      studentId: "123456789",
      parentName: "Ammar",
      status: "Aktif",
    },
    {
      id: 4,
      name: "Michael",
      address: "Jl. Teratai No.11, Depok",
      birthdate: "2018-05-05",
      parentPhone: "081234567890",
      group: "A",
      studentId: "123456789",
      parentName: "Abdul",
      status: "Aktif",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsEditing(false);
    setCurrentSiswa(null);
  };

  const handleFormSubmit = (formData) => {
    if (isEditing) {
      setSiswaData(
        siswaData.map((siswa) => (siswa.id === formData.id ? formData : siswa))
      );
    } else {
      const newSiswa = {
        ...formData,
        id: siswaData.length + 1,
      };
      setSiswaData([...siswaData, newSiswa]);
    }
    handleCloseModal();
  };

  const handleDeleteData = (id) => {
    const updatedData = siswaData.filter((siswa) => siswa.id !== id);
    setSiswaData(updatedData);
  };

  const handleEditData = (siswa) => {
    setCurrentSiswa(siswa);
    setIsEditing(true);
    handleOpenModal();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = siswaData.filter((siswa) =>
    siswa.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={container__siswa}>
      <Navbar />
      <div className={container__siswa__main}>
        <MenuList />
        <div className={container__siswa__content}>
          <div className={siswa__header}>
            <button
              className={siswa__btn__tambah}
              type="button"
              onClick={handleOpenModal}
            >
              + Tambahkan
            </button>
            <div className={siswa__search}>
              <p>Cari:</p>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className={siswa__subheader}>
            <div>
              <h1>Data Siswa</h1>
              <p>Kelola Data Siswa RA AMANAH SCHOOL</p>
            </div>
          </div>
          <table className={siswa__table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Tanggal Lahir</th>
                <th>Nomor Telp Ortu</th>
                <th>Grup</th>
                <th>Nomor Induk</th>
                <th>Nama Orang Tua</th>
                <th>Status Akun</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((siswa, index) => (
                <tr key={siswa.id}>
                  <td>{index + 1}</td>
                  <td style={{ color: "#323232", fontWeight: "600" }}>
                    {siswa.name}
                  </td>
                  <td>{siswa.address}</td>
                  <td>{siswa.birthdate}</td>
                  <td>{siswa.parentPhone}</td>
                  <td>{siswa.group}</td>
                  <td>{siswa.studentId}</td>
                  <td>{siswa.parentName}</td>
                  <td>{siswa.status}</td>
                  <td>
                    <button
                      onClick={() => handleEditData(siswa)}
                      className={siswa__btn__action}
                    >
                      <Image
                        style={{ width: "20px", height: "20px" }}
                        src={EditLogo}
                        alt="edit-button"
                      />
                    </button>
                    <button
                      onClick={() => handleDeleteData(siswa.id)}
                      className={siswa__btn__action}
                    >
                      <Image
                        style={{ width: "20px", height: "20px" }}
                        src={require("../../../public/assets/trash-01.svg")}
                        alt="delete-button"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <FormSiswa onSubmit={handleFormSubmit} initialData={currentSiswa} />
      </Modal>
    </div>
  );
};

export default DataSiswa;
