import modalOverlayStyles from "./modal-overlay.module.css";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("root-modal");

const ModalOverlay = (props) => {
    if(!props.show){
        return null;
    }

    return createPortal(
    (
        <div className={modalOverlayStyles.modalOverlay} onClick={props.onCloseModal}>
            {props.children}
        </div>
    ), 
    modalRoot
);} 
  
ModalOverlay.propTypes = {
    show: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    children: PropTypes.any
};   


export default ModalOverlay;