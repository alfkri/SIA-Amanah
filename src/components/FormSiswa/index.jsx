import React, { useState } from "react";
import {
  formSiswa__input,
  formSiswa__container,
  formSiswa__btn__save,
} from "@/styles/FormSiswa.module.css";

const FormSiswa = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      address: "",
      birthdate: "",
      parentPhone: "",
      group: "",
      studentId: "",
      parentName: "",
      status: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={formSiswa__container} onSubmit={handleSubmit}>
      <h1>Input Data Siswa</h1>
      <div className={formSiswa__input}>
        <label>Nama:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formSiswa__input}>
        <label>Alamat:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formSiswa__input}>
        <label>Tanggal Lahir:</label>
        <input
          type="date"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formSiswa__input}>
        <label>Nomor Telp Ortu:</label>
        <input
          type="text"
          name="parentPhone"
          value={formData.parentPhone}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formSiswa__input}>
        <label>Grup:</label>
        <select
          name="group"
          value={formData.group}
          onChange={handleChange}
          required // Make select required
        >
          <option value="">Pilih Grup</option>
          <option value="A">Grup A</option>
          <option value="B">Grup B</option>
        </select>
      </div>
      <div className={formSiswa__input}>
        <label>Nomor Induk:</label>
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formSiswa__input}>
        <label>Nama Orang Tua:</label>
        <input
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formSiswa__input}>
        <label>Status Akun:</label>
        <select
          required
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Pilih Status</option>
          <option value="Aktif">Aktif</option>
          <option value="Non-aktif">Non-aktif</option>
        </select>
      </div>
      <button className={formSiswa__btn__save} type="submit">
        Save
      </button>
    </form>
  );
};

export default FormSiswa;
