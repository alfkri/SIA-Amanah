import React, { useState } from "react";
import {
  formGuru__input,
  formGuru__container,
  formGuru__btn__save,
} from "../../styles/FormGuru.module.css";
const FormGuru = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      address: "",
      phone: "",
      nip: "",
      group: "",
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
    <form className={formGuru__container} onSubmit={handleSubmit}>
      <h1>Input Data Guru</h1>
      <div className={formGuru__input}>
        <label>Nama:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formGuru__input}>
        <label>Alamat:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formGuru__input}>
        <label>Nomor Telp:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formGuru__input}>
        <label>NIP:</label>
        <input
          type="text"
          name="nip"
          value={formData.nip}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formGuru__input}>
        <label>Grup:</label>
        <select
          required
          name="group"
          value={formData.group}
          onChange={handleChange}
        >
          <option value="">Pilih Grup</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </div>
      <div className={formGuru__input}>
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
      <button className={formGuru__btn__save} type="submit">
        Save
      </button>
    </form>
  );
};

export default FormGuru;
