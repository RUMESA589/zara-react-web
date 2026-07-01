import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './components/navbar';
import Carousal from './components/carousal';
import Card from './components/card';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="carousal-container">
        <Carousal />
      </div>
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
