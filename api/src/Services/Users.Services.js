import db from "../Database/db.js"


export const getUsers = () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM usuario";
  
      db.execute(query)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  export const ELogin = (Nombre,Pass) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT count(*)  AS Login FROM usuario WHERE Email = ? AND pass = ?";

      

      db.query(query,[Nombre,Pass])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

   export const comprueba = (Email) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT count(*)  AS Login FROM usuario WHERE Email = ? ";

      

      db.query(query,[Email])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  export const SingUp = (Nombre,Email,Pass) => {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO usuario (Nombre, Email, pass)VALUES (?,?,?)";

      

      db.query(query,[Nombre,Email,Pass])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };
  export const WILSON = (Nombre, Correo, Pais, Contraseña, Genero, Suscribirse,Comentarios) => {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO Tarea (Nombre, Correo, Pais, Contraseña, Genero, Suscribirse,Comentarios) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
      db.query(query, [Nombre, Correo, Pais, Contraseña, Genero, Suscribirse,Comentarios])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };
  export const Tarea = () => {
    return new Promise((resolve, reject) => {
      const query = "select * from Tarea ";
  
      db.query(query)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };
  
  
  

