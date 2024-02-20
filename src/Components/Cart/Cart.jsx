import { useContext } from "react";
import Modal from "../Modal/Modal"
import CartContext from "../../store/CartContext";
import {currencyFormatter} from "../../util/Formating/Formatting";
import UserProgressContext from "../../store/UserProgressContext";
import Button from "../UI/Button";
import CartItem from "../CartItem/CartItem";

function Cart(){
const cartCtx = useContext(CartContext);
const userProgressCtx=useContext(UserProgressContext);
const cartTotal =  cartCtx.items.reduce((totalPrice,item)=>totalPrice +item.quantity*item.price ,0)

function hnadleCloseCart(){
    userProgressCtx.hideCart()
}

function handleGoToCheckout(){
    userProgressCtx.showCheckout();
}



return(
    <Modal className="cart" open={userProgressCtx.progress==="cart"} onClose={userProgressCtx.progress==="cart"? hnadleCloseCart:null}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map(item => (
            <CartItem key={item.id} {...item} onDecrease={()=> cartCtx.removeItem(item.id)} onIncrease={()=>cartCtx.addItem(item) }/>
            ))}
        </ul>
        <p className="cart-total"> {currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button onClick={hnadleCloseCart}textOnly>Close</Button>
            {cartCtx.items.length>0 ? <Button onClick={handleGoToCheckout}>Go to Checkout </Button>:null}
        </p>
    </Modal>
)
}
export default Cart;