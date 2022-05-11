const datos = {
    nombre: "Juel",
    apellido: "Vargas",
    edad: 21,
    altura: 170,
    eresDesarrollador: true
}

const edad = datos.edad;

const listaDatos = [
    {...datos},
    {
        nombre: "Roberts",
        apellido: "Amachuy",
        edad: 22,
        altura: 165,
        eresDesarrollador: true
    },
    {
        nombre: "Jose",
        apellido: "Quispe",
        edad: 21,
        altura: 167,
        eresDesarrollador: true
    }
];

const ordenarListaDatos = listaDatos.sort( (a,b) => a.edad - b.edad)