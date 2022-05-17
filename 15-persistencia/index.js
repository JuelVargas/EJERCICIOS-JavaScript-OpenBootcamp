const nombre = "Juel"

const apellido = "Vargas"

const objeto = {
    nombre,
    apellido
}

sessionStorage.setItem("objeto", JSON.stringify(objeto))

localStorage.setItem("objeto", JSON.stringify(objeto))

const fecha = new Date()

document.cookie = `datosObjeto=${JSON.stringify(objeto)};expires=` + new Date(fecha.getTime() + 2 * 60000).toUTCString()