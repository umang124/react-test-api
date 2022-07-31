import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Counter from "./components/Counter";

import Create from "./components/Create";
import Item from "./components/Item";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/update" element={<Update />} />
      </Routes>
      <Counter />
      <Item name="Macbook" price={1000} />
      <Item name="Samsung" price={2000} />
      <Item name="OnePlus" price={3000} />
      <Cart />
    </BrowserRouter>
  );
}

export default App;
