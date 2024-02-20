import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
     <Header/>
     <Meals/>
     <Cart/>
     <Checkout/>
     </CartContextProvider>
     </UserProgressContextProvider>
  );
}

export default App;
