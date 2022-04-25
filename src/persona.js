

//Clase persona
export class Persona{
    constructor(nombre='nombreDefault', apellidos='apellidosDefault'){
        //Propiedades
        this.nombre = nombre
        this.apellidos = apellidos
    }
    //MÉTODOS 
    saludar(){
        alert(`Hola soy ${this.nombre} ${this.apellidos}`)
    }
    // Métodos getter
    getNombre(){
        return this.nombre
    }
    getApellidos(){
        return this.apellidos
    }
    // Métodos setters
    setNombre(nombre){
        if(nombre.length>=3){
            this.nombre = nombre
        }else{
            const ERROR = 'Mínimo 3 letras'
            console.log(ERROR);
            return ERROR
        }
    }
    setApellidos(apellidos){
        if(apellidos.lenght>=3){
            this.apellidos
        }else{
            const ERROR = 'Mínimo 3 letras'
            console.log(ERROR);
            return ERROR
        }
    }
}