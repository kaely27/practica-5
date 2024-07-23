function saludar(nombre){
    return `hola, ${nombre} `;
     
}

//alert(saludar("juanito"));
const sumar = function(a,b){
    return a + b;
}
//alert(sumar(15,70));
let resultado;
const mult = (a,b,c)=> resultado = a * b *c;
mult(4,689,1234);
//alert (resultado);

//Funcion de flecha multilinea
const saludo2 = (nombre,edad,color)=> {
    if(nombre != undefined){
        let mensaje;

        mensaje = `hola soy ${nombre} tengo ${edad} años y mi color favorito es ${color}`;
    }
    return(mensaje);
}
alert(saludo2("Juanito",4,"azul"));
