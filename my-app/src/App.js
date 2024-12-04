//import logo from './logo.svg';
import './App.scss';

let PersonalDescription = "Aca va mi descripcion"
let ProfilePicSize = 200
let ProfilePicUrl = "https://picsum.photos/"+ProfilePicSize

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="Body">
      <div className="Main">
        <div className="Bio">
          <img src={ProfilePicUrl} alt='foto perfil' className="ProfilePic" />
          <h1>Giuliano Pascarelli</h1>
          <p>{PersonalDescription}</p>
        </div>
        <div className="BioSection">
          <h3> Subtitulo xd</h3>
          <p>Cosas que me gustaria que este sitio tenga:</p>
          <div className="UList">
            <ul>
              <li>Topbar</li>
              <li>Texto que se actualice segun variables de React</li>
              <li>Listas con checkbox</li>
              <li>Una Database conectada.</li>
              <li>Una foto mia (Opcional: salir presentable)</li>
              <li>Links a mi github, linkedin, etc.</li>
            </ul>
          </div>
        </div>
        <div className="BioSection">
          <h3>Listado de variables: </h3>
          <p>En progreso xdxd</p>
        </div>
      </div>
    </div>
  );
}

export default App;
