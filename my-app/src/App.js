//import logo from './logo.svg';
import './App.scss';
import { Checkbox } from '@mui/material';
import React from 'react'
import ProfilePicUrl from "./dist/ProfilePic.JPG"


function App() {
  let PersonalDescription = "Aca va mi descripcion"

  //Creamos un useState que contendra los valores de la lista de objetivos. usamos useState para que los valores mostrados se actualicen cuando estos cambien 
  const [items, setitems] = React.useState([{ name: 'Topbar', status: false },
  { name: 'Texto que se actualice segun variables de React', status: true },
  { name: 'Listas con checkbox', status: true },
  { name: 'Una Database conectada.', status: false },
  { name: 'Una foto mia (Opcional: salir presentable)', status: true },
  { name: 'Links a mi github, linkedin, etc.', status: false },
  { name: 'useStates', status: true },
  { name: 'Seccion About Me', status: false },
  { name: 'Seccion Works', status: false }
  ])

  //Funcion que permite la actualizacion del status de un solo item de la lista. 
  const toggleStatus = (name) => {
    setitems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <div className="Body">
      <div className='topbar'>
        <div className='left'>
          <p>Giuliano Pascarelli</p>
        </div>
        <div className='right'>
          <p>Works</p>
          <p>About</p>
        </div>
      </div>
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
                  onClick={(e) => { toggleStatus(item.name) }}
                  sx={{
                    color: "#79740e",
                    '&.Mui-checked': {
                      color: "#79740e",
                    },
                  }}
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="BioSection">
          <h3>Listado de cosas: </h3>
          <p>En progreso xdxd</p>
          <p>En progreso xdxd</p>
          <p>En progreso xdxd</p>
          <p>En progreso xdxd</p>
          <p>En progreso xdxd</p>
        </div>
      </div>
    </div>
  );
}

export default App;
