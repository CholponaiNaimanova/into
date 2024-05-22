import './App.css';
import Address from './components/Address';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Incroduction from './components/Incroduction';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className="">
     <Header/>
     <Home/>
     <Address/>
     <Incroduction/>
     <Cards/>
     <LogIn/>
     <Footer/>
    </div>
  );
}

export default App;
