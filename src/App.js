import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Bang from './components/Bang';
import { AiOutlineTeam } from "react-icons/ai";


function App() {

  return (
    <div className="d-flex flex-column align-items-center">
      <AiOutlineTeam fontSize='2rem'/>
      <h2><b>Danh sách sinh viên</b></h2>
      <Bang/>
    </div> 
  )
}

export default App;
