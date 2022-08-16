import './App.css';
import Navigationbar from './Component/Navigationbar';
import Addstudent from './Component/Addstudent';
//import getdata from './Component/getdata';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import Footer from "./Component/Footer";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
      <BrowserRouter>
      <Navigationbar />
        <Routes>
          <Route path='/adddata' element={<Addstudent />} />
        </Routes>


      </BrowserRouter>
      <Footer />
      </Container>
    </div>
  );
}

export default App;
