
import {Persona} from './persona.js'
import {nif} from './nif.js'

//Clase Alumno
export class Alumno extends Persona{
    constructor(nombre, apellidos, dni='', notas='', imagen=''){
        super(nombre, apellidos)
        this.dni = dni
        this.notas = notas
        this.imagen = imagen
        console.log(this.imagen);
    }
    //Métodos getter
    getDni(){
        return this.dni
    }
    getNotas(){
        return this.notas
    }
    getFicha(){
        const card = `
            <div class="card" style="width: 18rem">
                <img src="/src/imagenes/${this.imagen}" class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">${this.nombre} ${this.apellidos}</h5>
                    <p class="card-text">${this.dni}</p>
                    <p class="card-text">Módulo 1: ${this.notas.modulo1} , Módulo 2: ${this.notas.modulo2} , Módulo 3: ${this.notas.modulo3}</p>
                </div>
            </div>
        `
        return card
    }
    //Métodos setter
    setDni(dni){
        if(nif(dni) === true){
            this.dni = dni
        }else{
            console.log(nif(dni))
        }
    }
    setNotas(notas){
        this.notas = notas
    }
   
}