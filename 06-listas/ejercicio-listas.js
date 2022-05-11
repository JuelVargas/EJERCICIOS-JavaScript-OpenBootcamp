const list1 = ["arroz", "leche", "jugo", "galletas", 'pan'];

list1.push("Aceite de Girasol");

list1.pop();

const listaPeliculas = [
    {
        titulo: "interestellar",
        director: "Cristopher Nolan",
        fecha: new Date("11/6/2014")
    },
    {
        titulo: "Inception",
        director: "Cristopher Nolan",
        fecha: new Date("7/8/2010")
    },
    {
        titulo: "Avatar",
        director: "James Cameron",
        fecha: new Date('december 18, 2009')
    }
]

const peliculasFiltradas = listaPeliculas.filter(x => x.fecha >= new Date("1/1/2010"));

const listaDirectores = listaPeliculas.map(x => x.director);

const listaTitulos = listaPeliculas.map(x => x.titulo);

const listaPelisDirectores = listaDirectores.concat(listaTitulos);

const listaConcat = [...listaDirectores, ...listaTitulos];
