import ingredientsStyles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsElem from "../burger-ingredients-elem/burger-intgredients-elem";
import PropTypes from "prop-types";
import { useState } from "react";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = (props) => {
  const [state, setState] = useState({
    show: false,
    ingredientName: "",
    ingredientProtein: 0,
    ingredientFat: 0,
    ingredeintCarbohydrates: 0,
    ingredientCalories: 0,
    ingredientImg: "",
    currentTab: "bun"
  });


  return (
    <>
      <IngredientDetails
        onCloseModal={() => setState((prevState) => ({...prevState, show: false, }))}
        show={state.show}
        ingredientName={state.ingredientName}
        ingredientProtein={state.ingredientProtein}
        ingredientFat={state.ingredientFat}
        ingredeintCarbohydrates={state.ingredeintCarbohydrates}
        ingredientCalories={state.ingredientCalories}
        ingredientImg={state.ingredientImg}
      />
      <p className="text text_type_main-large mb-5 mt-10">Соберите бургер</p>
      <div className={`${ingredientsStyles.tabs} mb-10`}>
        {props.tabs.map((tab) => (
          <Tab key={tab._id} value={tab.value} active={state.currentTab === tab.value}
            onClick={() =>
              setState((prevState) => ({
                ...prevState,
                currentTab: tab.value,
              }))
            }
          >
            {tab.name}
          </Tab>
        ))}
      </div>
      {props.data && (
        <div className={ingredientsStyles.components}>
          {props.tabs.map((tab) => (
            <section key={tab._id}>
              <p className="text text_type_main-medium">{tab.name}</p>
              <div className={`${ingredientsStyles.elem_container} ml-4`}>
                { props.data &&
                  props.data
                  .filter((elem) => elem.type === tab.type)
                  .map((el) => (
                    <BurgerIngredientsElem key={el._id} imageSrc={el.image} price={el.price} name={el.name}
                    onClick={() =>
                      setState((prevState) => ({
                        ...prevState,
                        show: !state.show,
                        ingredientName: el.name,
                        ingredientProtein: el.proteins,
                        ingredientFat: el.fat,
                        ingredeintCarbohydrates: el.carbohydrates,
                        ingredientCalories: el.calories,
                        ingredientImg: el.image_large,
                      }))
                    }
                    />
                  ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}

const tab = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

const data = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(data.isRequired),
  tabs: PropTypes.arrayOf(tab.isRequired),
};



export default BurgerIngredients;