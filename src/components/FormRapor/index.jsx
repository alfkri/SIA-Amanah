import React, { useState } from "react";
import {
  formRapor__input,
  formRapor__container,
  formRapor__btn__save,
} from "../../styles/FormRapor.module.css";

const FormRapor = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      moral: "",
      motorik: "",
      kognitif: "",
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

  return (
    <form className={formRapor__container} onSubmit={handleSubmit}>
      <h1>Edit Deskripsi Rapor</h1>
      <div className={formRapor__input}>
        <label>Perkembangan Nilai Moral dan Agama:</label>
        <textarea
          name="moral"
          value={formData.moral}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formRapor__input}>
        <label>Perkembangan Motorik:</label>
        <textarea
          name="motorik"
          value={formData.motorik}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formRapor__input}>
        <label>Perkembangan Kognitif:</label>
        <textarea
          name="kognitif"
          value={formData.kognitif}
          onChange={handleChange}
          required
        />
      </div>
      <button className={formRapor__btn__save} type="submit">
        Save
      </button>
    </form>
  );
};

export default FormRapor;
