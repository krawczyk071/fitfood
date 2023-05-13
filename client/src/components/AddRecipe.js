import React from "react";

const AddRecipe = () => {
  return (
    <div className="addrecipe">
      <h1 className="addrecipe__title">Add Recipe</h1>
      <form action="" className="addrecipe__form">
        <label htmlFor="name" className="lbl">
          name
        </label>
        <input
          className="ipt"
          type="text"
          name="name"
          id="name"
          autocomplete="off"
        />
        <label htmlFor="photo" className="lbl">
          photo url
        </label>
        <input className="ipt" type="text" name="photo" id="photo" />{" "}
        <label htmlFor="tags" className="lbl">
          tags
        </label>
        <input className="ipt" type="text" name="tags" id="tags" />{" "}
        <div className="addrecipe__form__three">
          <div>
            <label htmlFor="time" className="lbl">
              time (mins)
            </label>
            <input className="ipt" type="text" name="time" id="time" />
          </div>
          <div>
            <label htmlFor="servings" className="lbl">
              servings
            </label>
            <input className="ipt" type="text" name="servings" id="servings" />
          </div>
          <div>
            <label htmlFor="calories" className="lbl">
              calories
            </label>
            <input className="ipt" type="text" name="calories" id="calories" />
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
          placeholder="line1&#10;line2"
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
        ></textarea>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
//
//
//
//
// directions
//
//
//
