import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom'
import MyHeader from "./components/Header";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";


const END_POINT = process.env.REACT_APP_END_POINT;
const MY_KEY = process.env.REACT_APP_MY_KEY;

function App() {
  console.log(END_POINT);
  console.log(MY_KEY);
  return (
    <BrowserRouter>
      <div className="App bg-dark">
        <MyHeader />
        <MyMain endPoint={END_POINT} myKey={MY_KEY} />
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
