import React, { useState } from "react";
import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import FormGuru from "@/components/FormGuru";
import Modal from "@/components/Modal";
import Image from "next/image";
import {
  container__guru,
  container__guru__main,
  container__guru__content,
  guru__header,
  guru__btn__tambah,
  guru__search,
  guru__subheader,
  guru__btn__action,
  guru__table,
} from "@/styles/Guru.module.css";

const DataGuru = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentGuru, setCurrentGuru] = useState(null);
  const [guruData, setGuruData] = useState([
    {
      id: 1,
      name: "Reny Zondari",
      address: "Jl. Teratai No. 1",
      phone: "081234567891",
      nip: "123456780",
      group: "A",
      status: "Aktif",
    },
    {
      id: 2,
      name: "Marlina Rosti",
      address: "Jl. Jonggol No. 2",
      phone: "081234567892",
      nip: "123456781",
      group: "B",
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
    setCurrentGuru(null);
  };

  const handleFormSubmit = (formData) => {
    if (isEditing) {
      setGuruData(
        guruData.map((guru) => (guru.id === formData.id ? formData : guru))
      );
    } else {
      const newGuru = {
        ...formData,
        id: guruData.length + 1,
      };
      setGuruData([...guruData, newGuru]);
    }
    handleCloseModal();
  };

  const handleDeleteData = (id) => {
    const updatedData = guruData.filter((guru) => guru.id !== id);
    setGuruData(updatedData);
  };

  const handleEditData = (guru) => {
    setCurrentGuru(guru);
    setIsEditing(true);
    handleOpenModal();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = guruData.filter((guru) =>
    guru.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={container__guru}>
      <Navbar />
      <div className={container__guru__main}>
        <MenuList />
        <div className={container__guru__content}>
          <div className={guru__header}>
            <button
              className={guru__btn__tambah}
              type="button"
              onClick={handleOpenModal}
            >
              + Tambahkan
            </button>
            <div className={guru__search}>
              <p>Cari:</p>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className={guru__subheader}>
            <div>
              <h1>Data Guru</h1>
              <p>Kelola Data Guru RA AMANAH SCHOOL</p>
            </div>
          </div>
          <table className={guru__table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Nomor Telp</th>
                <th>NIP</th>
                <th>Grup</th>
                <th>Status Akun</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((guru, index) => (
                <tr key={guru.id}>
                  <td>{index + 1}</td>
                  <td style={{ color: "#323232", fontWeight: "600" }}>
                    {guru.name}
                  </td>
                  <td>{guru.address}</td>
                  <td>{guru.phone}</td>
                  <td>{guru.nip}</td>
                  <td>{guru.group}</td>
                  <td>{guru.status}</td>
                  <td>
                    <button
                      onClick={() => handleEditData(guru)}
                      className={guru__btn__action}
                    >
                      <Image
                        style={{ width: "20px", height: "20px" }}
                        src={require("../../../public/assets/edit.svg")}
                        alt="edit"
                      />
                    </button>
                    <button
                      onClick={() => handleDeleteData(guru.id)}
                      className={guru__btn__action}
                    >
                      <Image
                        style={{ width: "20px", height: "20px" }}
                        src={require("../../../public/assets/trash-01.svg")}
                        alt="delete"
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
        <FormGuru onSubmit={handleFormSubmit} initialData={currentGuru} />
      </Modal>
    </div>
  );
};

export default DataGuru;
