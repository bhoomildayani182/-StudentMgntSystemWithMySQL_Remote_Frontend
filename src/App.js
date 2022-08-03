import './App.css';
import Navigationbar from './Component/Navigationbar';
import Addstudent from './Component/Addstudent';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
      <Navigationbar />
      <Addstudent />
      </Container>
    </div>
  );
}

export default App;
