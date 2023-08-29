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

  export const SingUp = (Nombre,Email,Pass) => {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO usuario (Nombre, Email, pass)VALUES (?,?,?)";

      

      db.query(query,[Nombre,Email,Pass])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  

