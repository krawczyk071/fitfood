import React, { useState } from "react";
import { days } from "../utils/data";
import { useDispatch } from "react-redux";
import { addToAte } from "../redux/features/ateSlice";
import { toast } from "react-toastify";

const TrackMeal = ({ data }) => {
  const [formStatus, setFormStatus] = useState("idle");
  const dispatch = useDispatch();
  const formInit = { date: "Monday", recipeId: data._id };
  const [formData, setFormData] = useState(formInit);

  function onChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      setFormStatus("pending");
      await dispatch(addToAte(formData)).unwrap();

      setFormData(formInit);
      toast.success("Tracked");
    } catch (err) {
      console.error("Failed to track", err.message);
      toast.error(err.message);
    } finally {
      setFormStatus("idle");
    }
  }
  return (
    <div className="trackmeal">
      <h2 className="tracker__title">Track your meals</h2>
      <form onSubmit={onSubmit} className="trackmeal__form">
        <label htmlFor="login" className="lbl">
          Day
        </label>
        <div className="select">
          <select
            name="date"
            id="date"
            value={formData.date}
            onChange={onChange}
          >
            {days.map((d) => (
              <option value={d} key={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="meals" className="lbl">
          Meal
        </label>
        <div className="select">
          <select
            name="recipeId"
            id="recipeId"
            value={formData.recipeId}
            onChange={onChange}
          >
            {data.map((m) => (
              <option value={m._id} key={m._id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn--primary">
          Track
        </button>
      </form>
    </div>
  );
};

export default TrackMeal;
