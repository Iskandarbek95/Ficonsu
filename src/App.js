import './App.css';
import FooterAbout from './components/Footer/Footer';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <FooterAbout />
    </div>
  );
}

export default App;
