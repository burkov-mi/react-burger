import Modal from "../modal/modal";
import ingredientDetailsStyle from "./ingredient-details.module.css"
import PropTypes from "prop-types";

const IngredientDetails = (props) =>{
    return (
        <Modal show={props.show} header={"Детали ингредиента"} onCloseModal={props.onCloseModal}>
            <div className={ingredientDetailsStyle.mainContainer}>
                <img alt="previewImage" src={props.ingredientImg}/>
                <p className={`${ingredientDetailsStyle.ingredientNameText}text text_type_main-medium mt-4`}>
                    {props.ingredientName}
                </p>
                <div className={`${ingredientDetailsStyle.macronutrientContainer} mt-8 mb-15`}>
                    <div className={ingredientDetailsStyle.macronutrientElem}>
                        <p className="text text_type_main-small text_color_inactive">Калории,ккал</p>
                        <p className="text text_type_digits-default text_color_inactive">{props.ingredientCalories}</p>
                    </div>
                    <div className={ingredientDetailsStyle.macronutrientElem}>
                        <p className="text text_type_main-small text_color_inactive">Белки, г</p>
                        <p className="text text_type_digits-default text_color_inactive">{props.ingredientProtein}</p>
                    </div>
                    <div className={ingredientDetailsStyle.macronutrientElem}>
                        <p className="text text_type_main-small text_color_inactive">Жиры, г</p>
                        <p className="text text_type_digits-default text_color_inactive">{props.ingredientFat}</p>
                    </div>
                    <div className={ingredientDetailsStyle.macronutrientElem}>
                        <p className="text text_type_main-small text_color_inactive">Углеводы, г</p>
                        <p className="text text_type_digits-default text_color_inactive">{props.ingredeintCarbohydrates}</p>
                    </div>
                </div>
                
            </div>
        </Modal>
    )
}

IngredientDetails.propTypes = {
    show: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    ingredientImg: PropTypes.string.isRequired,
    ingredientNameText: PropTypes.string.isRequired,
    ingredientCalories: PropTypes.number.isRequired,
    ingredientProtein: PropTypes.number.isRequired,
    ingredientFat: PropTypes.number.isRequired,
    ingredeintCarbohydrates: PropTypes.number.isRequired,

}

export default IngredientDetails;