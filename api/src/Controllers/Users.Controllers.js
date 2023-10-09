import * as UsersServices from "../Services/Users.Services.js"
import bodyParser from "body-parser";

export const getUsers = (req, res) => {
    UsersServices.getUsers().then((result) => {
        res.status(200).json({
         
          data: result[0],
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
  export const Tarea1 = (req, res) => {
    UsersServices.Tarea().then((result) => {
        res.status(200).json({
         
          data: result[0],
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };

  export const ELogin = (req, res) => {
  
    let  Nombre  = req.body.Nombre; 
    let Pass = req.body.Pass;// Desestructurar req.body para obtener Nombre y Pass
    
    // Verificar si Nombre y Pass están presentes y no son cadenas vacías
    console.log (Nombre,Pass);
    UsersServices.ELogin(Nombre, Pass)
      .then((result) => {
        res.status(200).json({
          data: result[0],
        });
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  };

  export const comprueba = (req, res) => {
  
    let  Email  = req.body.Email; 

    // Verificar si Nombre y Pass están presentes y no son cadenas vacías
    console.log (Email);
    UsersServices.comprueba(Email)
      .then((result) => {
        res.status(200).json({
          data: result[0],
        });
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  };


  export const SingUp = (req, res) => {
  
    let  Nombre  = req.body.Nombre; 
    let Pass = req.body.Pass;// 
    let Email= req.body.Email;// 
    
    // Verificar si Nombre y Pass están presentes y no son cadenas vacías
    console.log (Nombre,Email,Pass);
    UsersServices.SingUp(Nombre,Email,Pass)
      .then(() => {
        res.status(200).json({
          data: Nombre,Email,Pass
        });
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  };
  
  

  export const Wilson = (req, res) => {
   
let Nombre = req.body.Nombre;
let Correo = req.body.Correo;
let Pais = req.body.Pais;
let Contraseña = req.body.Contraseña;
let Genero = req.body.Genero;
let Suscribirse = req.body.Suscribirse;
let Comentarios = req.body.Comentarios;


    // Verificar si los campos obligatorios están presentes y no son cadenas vacías
    if (!Nombre || !Correo || !Pais || !Contraseña|| !Genero || !Suscribirse|| !Comentarios) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
  
    UsersServices.WILSON(Nombre, Correo, Pais, Contraseña, Genero, Suscribirse,Comentarios)
      .then(() => {
        res.status(200).json({
          data: {
            Nombre, Correo, Pais, Contraseña, Genero, Suscribirse,Comentarios
          }
        
        });
        console.log("klk")
      })
      .catch((err) => {
        res.status(500).json({ error: 'Error en el servidor' });
        console.error(err);
      });
  };
  