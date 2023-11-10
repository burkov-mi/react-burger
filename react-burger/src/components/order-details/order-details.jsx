import orderDetailsStyles from "./order-details.module.css";
import PropTypes from "prop-types";

const OrderDetails = (props) => {
    return(
            <div>
                <div className={`${orderDetailsStyles.orderId} text text_type_digits-large mt-30`}> 
                    {props.orderIdentifier}
                </div>
                <div className={`${orderDetailsStyles.textOrder} mt-8`}>
                    идентификатор заказа
                </div>
                <div className={`${orderDetailsStyles.iconBox} mb-15 mt-15`}/>
                    <p className={`${orderDetailsStyles.textBottom} mb-2`}>
                        Ваш заказ начали готовить
                    </p>
                    <p className={`${orderDetailsStyles.textBottom} ${orderDetailsStyles.bottomColor} mb-30`}>
                        Дождитесь готовности на орбитальной станции
                    </p>
            </div>
    )
}

OrderDetails.propTypes = {
    orderIdentifier: PropTypes.number.isRequired
  }

export default OrderDetails;