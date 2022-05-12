
//funcion devuelve true
function fun1(){
    return true;
}

// funcion promesa
const funcPromesa = new Promise((resolve, reject) => {
    if (true){
        resolve();
    }else{
        reject();
    }
})
funcPromesa
    .then(setTimeout(()=>{
        console.log("Hola soy una promesa.")
    },5000)) 


// funcion generadora
    let indice = 0; 
function* generador(){
    
    while(true){
        yield indice += 2;
    }

} 


