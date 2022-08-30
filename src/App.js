import './App.css';
import Navigationbar from './Component/Navigationbar';
import Addstudent from './Component/Student';
import Getdata from './Component/Getdata';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import Footer from "./Component/Footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Container>
      <BrowserRouter>
      <Navigationbar />
        <Routes>
          <Route path='/adddata' element={<Addstudent />} />
        </Routes>
        <Routes>
          <Route path='/getdata' element={<Getdata />} />
        </Routes>

      </BrowserRouter>
      <Footer />
      </Container>
    </div>
  );
}

export default App;
