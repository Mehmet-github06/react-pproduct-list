
import Productcard from "./components/Productcard/Productcard";
import { products } from "../src/helper/data";
import "./App.scss";
import Header from "./components/Header/Header";


function App() {
  return (
    <div>
      <Header />
      <Productcard veri={products} />
    </div>
  );
}

export default App;
