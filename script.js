//promesas

const usuarioAutenticado = new Promise(
    (resolve, reject) => {
        console.log("Esperando respuesta");
        const auth = true;
setTimeout(() => {
    if(auth){
        resolve("Usuario Autenticado");
    }else{
        reject("No se pudo iniciar");
    }
},5000);
    }
);
//console.log(usuarioAutenticado);

usuarioAutenticado
.then((result) => console.log(result))
.catch((error) => console.log(error))