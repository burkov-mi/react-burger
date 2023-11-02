import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from "./burger-constructor.module.css"
import OrderDetails from "../order-details/order-details";
import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../services/app-context";
import { post_request } from "../../utils/post-request";

const orderEndpoint = "https://norma.nomoreparties.space/api/orders";



const BurgerConstructor = () => {
    const [show, setShow] = useState(false)
    const data = useContext(DataContext);
    const bun = data.find(el => el.type === "bun");
    const listIngredients = data.filter(el => el.type !== 'bun');
    const [totalPrice, setTotalPrice ] = useState(0);
    const [order, setOrder] = useState(null)
    const ingredientsIds = data.map( el => el._id);

    useEffect(() => {
        let totalprice = bun ? bun.price * 2 : 0;
        listIngredients.map(el => (totalprice += el.price))
        setTotalPrice(totalprice);
    }, [bun, listIngredients, setTotalPrice])

    const takeOrder = () => {
        post_request( orderEndpoint, ingredientsIds)
        .then( data => {
            setOrder(data);
            setShow(true);
        });
    }
    
    
    return (
      <>
        <OrderDetails show={show} identifierOrder={order ? order.order.number : ''} onCloseModal={() => setShow(false)}/>
          <div className={`${burgerConstructorStyles.basketList} mt-25`}>
            <div className={`${burgerConstructorStyles.external} ml-4 mr-4 mb-4`}>
                <ConstructorElement type="top" isLocked={true} text={`${bun.name} - верх`} price={bun.price} thumbnail={bun.image}/>
            </div>
            <div className={burgerConstructorStyles.internal}>
                {listIngredients.map((elem, index) => {
                if (elem.type !== "bun") {
                    return (
                    <div key={index} className={`${burgerConstructorStyles.ingredientElem} ml-4 mr-4 mb-4`}>
                        <DragIcon type="primary"/>
                        <ConstructorElement text={elem.name} price={elem.price} thumbnail={elem.image}/>
                    </div>
                    );
                }
                return null;
                })}
            </div>
            <div className="ml-4 mr-4 mb-4">
                <ConstructorElement type="bottom" isLocked={true} text={`${bun.name} - низ`} price={bun.price} thumbnail={bun.image}/>
            </div>
            <div className={`${burgerConstructorStyles.orderInfo} mt-10`}>
                <div className={`${burgerConstructorStyles.orderInfoPrice} mr-10`}>
                    <p className="mr-1 text text_type_digits-medium">{totalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <div className={burgerConstructorStyles.orderInfoButton}>
                    <Button htmlType="button" type="primary" size="large" onClick={() => takeOrder()}>Оформить заказ</Button>
                </div>
            </div>
      </div>
      </>
    );
  }


  
  const ingredient = PropTypes.shape({
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

  BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredient.isRequired)
  };


  export default BurgerConstructor;