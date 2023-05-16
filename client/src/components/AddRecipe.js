import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/features/recipesSlice";
import { toast } from "react-toastify";

function postProcessForm(formData) {
  return {
    ...formData,
    tags: formData.tags.split(","),
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

const AddRecipe = ({ edit }) => {
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
  const dispatch = useDispatch();

  async function onSubmit(e) {
    e.preventDefault();

    try {
      setAddStatus("pending");
      await dispatch(addRecipe(postProcessForm(formData))).unwrap();

      setFormData(formInit);
      toast.success("Recipe added");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAddStatus("idle");
    }
  }

  return (
    <div className="addrecipe">
      <h1 className="addrecipe__title">Add Recipe</h1>
      <form onSubmit={onSubmit} className="addrecipe__form" autocomplete="off">
        <label htmlFor="name" className="lbl">
          name
        </label>
        <input
          className="ipt"
          type="text"
          name="name"
          id="name"
          autocomplete="off"
          value={formData?.name}
          onChange={onChange}
        />
        <label htmlFor="photo" className="lbl">
          photo url
        </label>
        <input
          value={formData?.photo}
          onChange={onChange}
          className="ipt"
          type="text"
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
              type="text"
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
              type="text"
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
              type="text"
              name="calories"
              id="calories"
            />
          </div>
        </div>
        <label htmlFor="ingredients" className="lbl">
          ingredients
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
          directions
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
        <button type="submit" className="btn" disabled={addStatus !== "idle"}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
