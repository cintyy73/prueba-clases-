alert('Bienvenido!')

const nombre = prompt('Ingresa tu nombre');
const apellido = prompt('Ingresa tu apellido');
const nacido = Number(prompt('Ingresa tu año de nacimiento'));

const saludar = (nombre, apellido, nacido) => {
const anios = 2022 - nacido;
const mensaje = `Hola ${nombre} ${apellido}, tienes ${anios} años`  
return mensaje
}
console.log(saludar(nombre, apellido, anios));
