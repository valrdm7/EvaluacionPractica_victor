import logo from './assets/images/sball.svg';
import './assets/css/App.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';




//vic components
import InicioFormulario from './components/victorFormulario';
import VictorTabla from './components/vTabla';

function App() {
  return (
    <body className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className="componentes">
            <h1 className="display-4" >TallerFutbol.com</h1>
            <InicioFormulario/>
        </section>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <VictorTabla/>
    </body>

  );
}

export default App;
