import logo from './logo.svg';
import './App.css';
import Navigation from './Customers/Components/Navigation';
import Homepage from './Customers/Pages/Homepage/Homepage';
import Footer from './Customers/Components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Product from './Customers/Components/Product/Product';
// import Signin from './Customers/Components/signin/Signin';
function App() {
  return (
    <div className="">
      <Router>
        {/* <Signin/> */}
        <Navigation/>
        </Router>
       <div>
     {/* <Homepage/> */}
     <Product/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
