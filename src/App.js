import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Header/>
     <Body/>
     <Footer/>
    </div>
  );
}

export default App;
