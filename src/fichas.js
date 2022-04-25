
import {Alumno} from "./alumno.js";

const fichas = (arrayAlumnos)=>{
    const nombre = document.querySelector('#nombre')
    const apellidos = document.querySelector('#apellidos')
    const dni = document.querySelector('#dni')
    const modulo1 = document.querySelector('#modulo1')
    const modulo2 = document.querySelector('#modulo2')
    const modulo3 = document.querySelector('#modulo3')
    const imagen = document.querySelector('#imagen');
    //click en añadir alumno
    document.querySelector('#addAlumno').addEventListener('click',()=>{
        
        //Añadimos objeto alumno al array
        var notas = {
            modulo1: modulo1.value,
            modulo2: modulo2.value,
            modulo3: modulo3.value,
        }
        arrayAlumnos.push(new Alumno(nombre.value, apellidos.value, dni.value, notas, imagen.files[0].name))
        //Mostramos las fichas
        pintaFichas(arrayAlumnos)
        //limpiamos los campos
        nombre.value = ''
        apellidos.value = ''
        nombre.focus()

    });
    //click en mostrar fichas
    document.querySelector('#borrarFichas').addEventListener('click',()=>{
        arrayAlumnos = []
        pintaFichas(arrayAlumnos)
        nombre.focus()
    });
}

const pintaFichas = (arrayAlumnos)=>{
    var html = ''
    arrayAlumnos.forEach(alumno => {
        html+=alumno.getFicha()
    });
    document.querySelector('.divFichas').innerHTML = html;
}


//exportamos las dos funciones

export {fichas, pintaFichas}