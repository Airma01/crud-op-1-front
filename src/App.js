
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './product/ProductList';
import ProductDetail from './product/ProductDetail';
import EditPro from './product/ProductEdit';
import DeleteProduct from './product/ProductDelete';
import AddProduct from './product/AddProduct';
import Spinner from './product/spinner';

function App() {
  return (
    <div>

      <Router>


        <div className="container-sm">
          <div className="row justify-content-center align-items-center">
            <div className="col-8 col-xl-8 my-4">
              <Link to='/' className="btn btn-primary mx-3">Home</Link>
              <Link to='/add_product' className="btn btn-success">AddProduct</Link>

            </div>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<ProductList />} />
        </Routes>
        <Routes>
          <Route path="/product_detail/:id" element={<ProductDetail />} />
        </Routes>
        <Routes>
          <Route path="/product_Edit/:id" element={<EditPro />} />
        </Routes>
        <Routes>
          <Route path="product_delete/:id" element={<DeleteProduct />} />
        </Routes>
        <Routes>
          <Route path="/add_product" element={<AddProduct />} />
        </Routes>

      </Router>
      {/* <Spinner /> */}
    </div>

  );
}

export default App;