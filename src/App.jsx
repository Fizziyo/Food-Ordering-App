import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
     <Header/>
     <Meals/>
     </CartContextProvider>
  );
}

export default App;
