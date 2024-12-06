//import logo from './logo.svg';
import './App.scss';
import { Checkbox } from '@mui/material';
import React from 'react'
import axios from 'axios';

import ProfilePicUrl from "./dist/ProfilePic.JPG"


function App() {
  let PersonalDescription = "Aca va mi descripcion"

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:8080/items')
      .then(response => {
        console.log("Datos recibidos: ", response.data); // Axios ya tiene los datos en 'response.data'
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los items:', error);
      });
  }, []);

  //Funcion que permite la actualizacion del status de un solo item de la lista. 
  const toggleStatus = (item) => {
    setItems((prevItems) =>
      prevItems.map((newItem) =>
        newItem.id_Items === item.id_Items ? { ...newItem, status_Items: !newItem.status_Items } : newItem
      )
    );
    // ToDo: Seguramente haya una mejor manera de resolver esto en un unico paso.
    item = {...item, status_Items: !item.status_Items}
    updateItem(item);
  };

  const updateItem = (item) => {
    axios.put('http://localhost:8080/item/' + item.id_Items, item)
      .then(response => {
        console.log("item modificado: ", response.data);
      })
      .catch(error => {
        console.log('Error al actualizar el item ' + item.id_Items, error);
      });
  }

  React.useEffect(() => { console.log('items changed', items) }, [items]);

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
                  checked={item.status_Items}
                  onClick={(e) => { toggleStatus(item) }}
                  sx={{
                    color: "#79740e",
                    '&.Mui-checked': {
                      color: "#79740e",
                    },
                  }}
                />
                <p>{item.name_Items}</p>
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
