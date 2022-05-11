const fechaHoy = new Date();

const fechaNacimiento = new Date("7/3/2000");

const comparacion = fechaHoy > fechaNacimiento;

const diaNacimiento = fechaNacimiento.getDate();

const mesNacimiento = fechaNacimiento.getMonth()  + 1;

const anioNacimiento = fechaNacimiento.getFullYear();