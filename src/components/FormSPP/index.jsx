// components/FormSPP.js
import React, { useState } from "react";
import styles from "@/styles/FormSPP.module.css";

const FormSPP = ({ onSubmit, initialData, onDelete }) => {
  const [formData, setFormData] = useState(
    initialData || {
      bulan: "",
      tanggalBayar: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleDelete = () => {
    onDelete(formData.bulan);
  };

  return (
    <form className={styles.formSPP__container} onSubmit={handleSubmit}>
      <h1>Entri Pembayaran</h1>
      <div className={styles.formSPP__input}>
        <label>SPP Bulan</label>
        <select
          name="bulan"
          value={formData.bulan}
          onChange={handleChange}
          required
        >
          <option value="">Silahkan Pilih Bulan</option>
          <option value="JAN">Januari</option>
          <option value="FEB">Februari</option>
          <option value="MAR">Maret</option>
          <option value="APR">April</option>
          <option value="MEI">Mei</option>
          <option value="JUN">Juni</option>
          <option value="JUL">Juli</option>
          <option value="AGS">Agustus</option>
          <option value="SEP">September</option>
          <option value="OKT">Oktober</option>
          <option value="NOV">November</option>
          <option value="DES">Desember</option>
        </select>
      </div>
      <div className={styles.formSPP__input}>
        <label>Tanggal Bayar</label>
        <input
          type="date"
          name="tanggalBayar"
          value={formData.tanggalBayar}
          onChange={handleChange}
          required
        />
      </div>
      <button className={styles.formSPP__btn__save} type="submit">
        Save
      </button>
      <button
        className={styles.formSPP__btn__delete}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </form>
  );
};

export default FormSPP;
