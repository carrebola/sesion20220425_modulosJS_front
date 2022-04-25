
//funcion que analiza el dni y devuele true si es correcto, si no lo es devuelve un texto con el error

export const nif = (dni)=>{
    var numero
    var letr
    var letra
    var expresion_regular_dni
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
        return ('Dni erroneo, la letra del NIF no se corresponde') 
       }else{
         return true
       }
    }else{
       return ('Dni erroneo, formato no válido');
     }
  }