import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddToMenu = () => {
  const recipes = useSelector((state) => state.recipes);

  const formInit = { meals: "6460c7dca0b02eef97df702e" };
  const [formData, setFormData] = useState(formInit);

  function onChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="addtomenu">
      <h2 className="addtomenu__title">Add to your menu</h2>
      <form onSubmit={onSubmit} className="addtomenu__form">
        <label htmlFor="meals" className="lbl">
          Meal
        </label>
        <div className="select">
          <select
            name="meals"
            id="meals"
            value={formData.meals}
            onChange={onChange}
          >
            {recipes.data.map((m) => (
              <option value={m._id} key={m._id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn--primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddToMenu;
