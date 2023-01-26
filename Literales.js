function agregar2(x,y){
    if(y === undefined){
        y=0;
    }else if(x === undefined){
        x=0;
    }else if(x === undefined && y == undefined){
        y == undefined
    }
}
console.log(agregar2())

//Objetos literales
const usuario = {
    nombre : "Jose Manuel",
    apellido : "Orozco",
    edad: 30,
    direccion:{
        pais: 'Mexico',
        ciudad: 'Macua',
        calle: 'principal 45'
    },
    amigos: ['Pepe','Toño','Sergio'],
    active: true,
    enviarMail: function(){
        return "Enviando email"
    },
    enviarMail2: function(){
        return "Enviando email2"
    }
}
console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.direccion.calle);
console.log(usuario.direccion.ciudad);
console.log(usuario.amigos[1]);
console.log(usuario.enviarMail);
console.log(usuario.enviarMail());
console.log(usuario.enviarMail2);
console.log(usuario.enviarMail2());

const salida =  `Nombre del Usuario ${usuario.nombre}`;
console.log(salida);

const salida2 = 'Nombre de usuario: ' + usuario.nombre 
+ '\n' + "Apellido: " + usuario.apellido
+ '\n' + "Edad: " + usuario.edad
+ '\n' + "Direccion - Pais: " + usuario.direccion.pais
+ '\n' + "Direccion - Ciudad: " + usuario.direccion.ciudad
+ '\n' + "Direccion - Calle: " + usuario.direccion.calle
+ '\n' + "Amigo 1: " + usuario.amigos[0]
+ '\n' + "Amigo 2: " + usuario.amigos[1]
+ '\n' + "Amigo 3: " + usuario.amigos[2]
+ '\n' + "Activo: " + usuario.active
+ '\n' + "Funcion 1: " + usuario.enviarMail()
+ '\n' + "Funcion 2: " + usuario.enviarMail2();

const salida3 = `
                Nombre de usuario: ${usuario.nombre}
                Apellido: ${usuario.apellido}
                Edad: ${usuario.edad}
                Direccion - Pais: ${usuario.direccion.pais}
                Direccion - Ciudad: ${usuario.direccion.ciudad}
                Direccion - Calle: ${usuario.direccion.calle}
                Activo: ${usuario.active}
                Amigo 1: ${usuario.amigos[0]}
                Amigo 2: ${usuario.amigos[1]}
                Amigo 3: ${usuario.amigos[2]}
                Funcion 1: ${usuario.enviarMail()}
                Funcion 2: ${usuario.enviarMail2()};
                `
console.log(salida2);
console.log(salida3);