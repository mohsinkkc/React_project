import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './component/Header';
import Footer from './component/Footer';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Table from './pages/Table';
import Forms from './pages/Forms';

import Product from './pages/Product';
import Addproduct from './pages/Addproduct';

import Edittable from './pages/Edittable';
import Contact from './pages/Contact';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path='/'  element={<> <Login/> </>}></Route>
        <Route path='/dashboard' index element={<> <Header/> <Dashboard/> <Footer/> </>}></Route>
        <Route path='/forms' element={<> <Header/><Forms/> <Footer/> </>}></Route>
        <Route path='/table' element={<> <Header/><Table/> <Footer/> </>}></Route>
        <Route path='/product' element={<> <Header/><Product/> <Footer/> </>}></Route>
        <Route path='/addproduct' element={<> <Header/><Addproduct/> <Footer/> </>}></Route>
        <Route path='/edittable' element={<> <Header/><Edittable/> <Footer/> </>}></Route>
        <Route path='/contact' element={<> <Header/><Contact/> <Footer/> </>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
