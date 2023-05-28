import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe, editRecipe } from "../redux/features/recipesSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function postProcessForm(formData) {
  return {
    ...formData,
    tags: formData.tags.split(",").map((t) => t.trim().toLowerCase()),
    ingredients: formData.ingredients.split("\n"),
    directions: formData.directions.split("\n"),
  };
}
function preProcessForm(formData) {
  return {
    ...formData,
    tags: formData.tags.join(","),
    ingredients: formData.ingredients.join("\n"),
    directions: formData.directions.join("\n"),
  };
}

const AddRecipe = ({ edit, id, toggleEdit }) => {
  // const RecipesStatus = useSelector(getRecipesStatus);
  const [addStatus, setAddStatus] = useState("idle");

  const formInit = {
    name: "",
    photo: "",
    tags: "",
    time: "",
    servings: "",
    calories: "",
    ingredients: "",
    directions: "",
  };
  const [formData, setFormData] = useState(
    edit ? preProcessForm(edit) : formInit
  );

  function onChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validateForm() {
    const { name, photo, time, servings, calories, ingredients, directions } =
      formData;

    if (!(name && ingredients && directions && photo)) {
      throw new Error("Fill mandatory fields");
    }
    if (![time, servings, calories].every((n) => parseInt(n))) {
      throw new Error("Only numbers allowed for time, servings, calories");
    }
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();

    try {
      validateForm();
    } catch (error) {
      toast.error(error.message);
      return;
    }

    try {
      setAddStatus("pending");
      if (!edit) {
        await dispatch(
          addRecipe(postProcessForm({ ...formData, hidden: false }))
        ).unwrap();
        toast.success("Recipe added");
        navigate(`/`);
      } else {
        await dispatch(
          editRecipe({ formData: postProcessForm(formData), id })
        ).unwrap();
        toast.success("Recipe updated");
        toggleEdit();
      }

      setFormData(formInit);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAddStatus("idle");
    }
  }

  return (
    <div className="addrecipe">
      <h1 className="addrecipe__title">Add Recipe</h1>
      <form onSubmit={onSubmit} className="addrecipe__form" autoComplete="off">
        <label htmlFor="name" className="lbl">
          name *
        </label>
        <input
          className="ipt"
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={formData?.name}
          onChange={onChange}
        />
        <label htmlFor="photo" className="lbl">
          photo url *
        </label>
        <input
          value={formData?.photo}
          onChange={onChange}
          className="ipt"
          type="url"
          name="photo"
          id="photo"
        />{" "}
        <label htmlFor="tags" className="lbl">
          tags
        </label>
        <input
          value={formData?.tags}
          onChange={onChange}
          className="ipt"
          type="text"
          name="tags"
          id="tags"
        />{" "}
        <div className="addrecipe__form__three">
          <div>
            <label htmlFor="time" className="lbl">
              time (mins)
            </label>
            <input
              value={formData?.time}
              onChange={onChange}
              className="ipt"
              type="number"
              name="time"
              id="time"
            />
          </div>
          <div>
            <label htmlFor="servings" className="lbl">
              servings
            </label>
            <input
              value={formData?.servings}
              onChange={onChange}
              className="ipt"
              type="number"
              name="servings"
              id="servings"
            />
          </div>
          <div>
            <label htmlFor="calories" className="lbl">
              calories
            </label>
            <input
              value={formData?.calories}
              onChange={onChange}
              className="ipt"
              type="number"
              name="calories"
              id="calories"
            />
          </div>
        </div>
        <label htmlFor="ingredients" className="lbl">
          ingredients *
        </label>
        <textarea
          className="ipt"
          name="ingredients"
          id="ingredients"
          cols="30"
          rows="5"
          value={formData?.ingredients}
          onChange={onChange}
        ></textarea>
        <label htmlFor="directions" className="lbl">
          directions *
        </label>
        <textarea
          className="ipt"
          name="directions"
          id="directions"
          cols="30"
          rows="10"
          value={formData?.directions}
          onChange={onChange}
        ></textarea>
        <p>* fields are mandatory</p>
        <button
          type="submit"
          className={`btn  btn--primary${
            addStatus !== "idle" ? " btn--loading" : ""
          }`}
          disabled={addStatus !== "idle"}
        >
          <span className="btn__text">Save</span>
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
