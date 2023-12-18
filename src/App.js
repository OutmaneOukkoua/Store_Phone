import './App.css';
import Navbar from './composants/navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Products from './pages/products';
import Cart from './pages/cart';
import Home from './pages/home';
import Detailproduct from './composants/detailproduct'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>

<Routes>
  <Route path='/' element={<Home/>}/> 
  <Route path='/products' element={<Products/>}/> 
  <Route path='/cart' element={<Cart/>}/> 
   <Route path='/details/:id' element={<Detailproduct/>}/>  
  
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
