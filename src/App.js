import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import DynamicHome from './DynamicHome';

function App() {
  const title = "APP Component Title";
  var site_google = "http://www.google.com"
  return (
    <div className="App">
      <Navbar></Navbar>
      <DynamicHome/>

    </div>
  );
}

export default App;
