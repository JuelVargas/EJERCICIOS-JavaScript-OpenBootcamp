const nombre = "Juel";
const apellido = "Vargas";

//concatenacion
const estudiante = `${nombre} ${apellido}`;

/*todo a mayuscula*/
const estudianteMayus = estudiante.toUpperCase();

/* todo a minuscula */
const estudianteMinus = estudiante.toLocaleLowerCase();

// longitud de la cadena
const estLongitud = estudiante.length;

// primera letra del nombre
const estPrimera = nombre.slice(0,1);

// ultima letra del apellido
const estUltima = apellido.slice(-1);

//elimina espacios
const estSinEspacios = estudiante.replace(/ /g, "");

//nombre esta contenido en variable?
const estNombre = estudiante.includes(nombre);