import { useContext } from "react";
import Button from "../UI/Button";
import logo from "/logo.jpg";
import CartContext from "../../store/CartContext";
function Header(){
   const cartCtx = useContext(CartContext);

   const  totalCartItems = cartCtx.items.reduce((totalNumberOftem,item)=>{
    return totalNumberOftem + item.quantity
   },0)


return<header id="main-header">
    <div id="title">
        <img src={logo} alt="Food img"/>
        <h1>FoodCafe</h1>
    </div>
    <nav>
        <Button texOnly>Cart({totalCartItems})</Button>
    </nav>
</header>
}
export default Header;