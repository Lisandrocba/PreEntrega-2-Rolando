import {
  BrowserRouter, Routes, Route, Link,
} from "react-router-dom";
import NavBar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';


function App() {
  return (
    <div>

      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

