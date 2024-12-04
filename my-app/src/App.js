//import logo from './logo.svg';
import './App.scss';
import { Checkbox } from '@mui/material';
import ProfilePicUrl from "./dist/ProfilePic.JPG"


function App() {
  let PersonalDescription = "Aca va mi descripcion"
  const items = [
    { name: 'Topbar', status: false },
    { name: 'Texto que se actualice segun variables de React', status: true },
    { name: 'Listas con checkbox', status: true },
    { name: 'Una Database conectada.', status: false },
    { name: 'Una foto mia (Opcional: salir presentable)', status: true },
    { name: 'Links a mi github, linkedin, etc.', status: false },
    { name: 'useStates', status: false }
  ];
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
              {items.map((item) => (
                <div className='CheckBox'>
                  <Checkbox
                    checked={item.status}
                  />
                  <p>{item.name}</p>
                </div>
              ))}
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
