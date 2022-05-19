const parrafos = document.querySelectorAll(".parrafo")

const sections = document.querySelectorAll(".section")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Inicio de arrastre")
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        
        const element =document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(element, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        //console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})


sections.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault()

        event.dataTransfer.dropEffect = "copy"
        //console.log("drag over")
    })

    section.addEventListener("drop", event => {
        console.log("drop")
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Parrafo id: ", id_parrafo)

        const parrafo = document.getElementById(id_parrafo)
        section.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".imagen")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
})

papelera.addEventListener("drop", event => {
    const parrafo = event.dataTransfer.getData("id")
    document.getElementById(parrafo).remove()
})