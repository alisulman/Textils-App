import { useState } from "react";
import Alert from "./layout/Alert";
import Footer from "./layout/Footer";
import NavBar from "./layout/Navbar";
import TextForm from "./layout/TextForm";

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState('colorOne')

  // logic here 
  const showAlert  = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleMode = () => {
    if(mode === 'colorOne'){
      setMode('colorThree');
      document.body.style.backgroundColor = '#222'
    } else {
      setMode('colorOne')
      document.body.style.backgroundColor = '#fff'
    }
  }

  return (
    <div>
    <NavBar mode ={mode} handleMode = {handleMode} />
    <Alert alert = {alert} />
    <TextForm  showAlert = {showAlert} mode ={mode} />
    <Footer mode = {mode} />
    </div>
  );
}

export default App;
