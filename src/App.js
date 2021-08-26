import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Cake from './Components/Cake';
import CakeList from './Components/CakeList';
import Signup from './Components/Signup';
import Login from './Components/Login';

var cakedetails = {
  name:"Truffle",
  price:"500",
  image:"truffle.webp"
}
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Signup></Signup>
      <Login></Login>
      {/* <Cake cake = {cakedetails} />
      <Cake cake = {cakedetails} /> */}
      <CakeList />

    </div>
  );
}

export default App;
