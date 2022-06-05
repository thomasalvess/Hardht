import logo from './img/logo.png';
import fan1 from './img/fan1.png';
import fan2 from './img/fan2.png';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
