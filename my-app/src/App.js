//import logo from './logo.svg';
import './App.scss';
import { Checkbox } from '@mui/material';
import ProfilePicUrl from "./dist/ProfilePic.JPG" 


function App() {
  let PersonalDescription = "Aca va mi descripcion"
  return (
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
