function cepillarDientes() {
    console.log("¡Hora de cepillarse los dientes!");
    console.log("1. Aplica pasta dental en el cepillo.");
    console.log("2. Cepilla tus dientes durante al menos 2 minutos.");
    console.log("3. Enjuaga tu boca con agua.");
    console.log("4. Limpia tu cepillo de dientes y guárdalo.");
    console.log("¡Listo! Ahora tienes una sonrisa brillante.");
}

function Banarse() {
    cepillarDientes(); //se apila encima de la función cepillarDientes, es decir, se ejecutará después de que se ejecute cepillarDientes
    console.log("¡Hora de bañarse!");
    console.log("1. Entra a la ducha y moja tu cuerpo.");
    console.log("2. Aplica jabón o gel de baño y frota tu cuerpo.");
    console.log("3. Enjuaga el jabón con agua.");
    console.log("4. Lava tu cabello con champú y enjuágalo.");
    console.log("5. Sal de la ducha y seca tu cuerpo con una toalla.");
    console.log("¡Listo! Ahora estás limpio y fresco.");
}

function EmpezarDia() {
    Banarse(); //se apila encima de la función Banarse, es decir, se ejecutará después de que se ejecute Banarse
    console.log("¡Hora de empezar el día!");
    console.log("1. Vístete con ropa cómoda y adecuada para el clima.");
    console.log("2. Desayuna algo nutritivo para tener energía.");
    console.log("3. Revisa tu agenda o lista de tareas para el día.");
    console.log("4. Sal de casa y enfrenta el día con una actitud positiva.");
    console.log("¡Listo! Ahora estás preparado para un gran día.");
}

EmpezarDia(); //se ejecuta la función EmpezarDia, que a su vez ejecutará Banarse y cepillarDientes en el orden correcto.



const botonproyectos = document.getElementById("botonproyectos");
function mostrarProyectos() {
    const proyectos = document.getElementById("proyectos");
    proyectos.scrollIntoView({ behavior: "smooth" });
}
botonproyectos.addEventListener("click", mostrarProyectos);



//cambiar tema
const btnTema = document.getElementById("btn-tema");  
const cuerpoPagina = document.body;
function cambiarTema() {
    if (cuerpoPagina.style.backgroundColor === "black") {
        cuerpoPagina.style.backgroundColor = "white";
        cuerpoPagina.style.color = "black"; //cambia el texto a negro para que sea legible en fondo blanco
    } else {
        //Si no es negro,lo cambiamo a tema negro
        cuerpoPagina.style.backgroundColor = "black";
        cuerpoPagina.style.color = "white"; //cambia el texto a blanco para que sea legible en fondo negro
    }
}

btnTema.addEventListener("click", cambiarTema);

//ejemplo alerta al hacer click de un proyecyto

const todaslastarjetas = document.querySelectorAll(".proyecto-card");
todaslastarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", function() {
        const nombreproyecto = this.querySelector("h3").innerText;
        alert("Haz hecho clic en el proyecto: " + nombreproyecto);
    });
});
//EJEMPLO CAMBIAR COLOR DE FONDO DE LA TARJETA AL HACER HOVER
const tarjetas = document.querySelectorAll(".proyecto-card");

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("mouseenter", () => {
        tarjeta.style.backgroundColor = "#560a81"; // color claro al pasar mouse
    });
    tarjeta.addEventListener("mouseleave", () => {
        tarjeta.style.backgroundColor = ""; // vuelve al color original
    });
});

///variables: let (que puede cambiar)  - const (es fijo que no cambia)
const nombreDev= "Pedro Roda"; // fijo  no cambia
//let proyectosCompletados = 4; // puede aumentar o disminuir  o variar en el tiempo  dependiendo del scope
 
// tipos primitivos
let esInstructor = true; // boolean
let edad = 34;  //number
let saludo = "Hola soy Pedro Roda" //string
 
// tipos de datos complejos
let habilidades = ["JavaScript", "HTML", "CSS"];
let experiencia = {
    años: 10,
    empresas: ["Google", "Facebook", "Amazon"]
};
 
const proyectoNuevo = {
    nombre: "Portafolio Personal",
    descripcion: "Un sitio web para mostrar mis proyectos y habilidades.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    completado: false
};

// Entender la visibilidad de las variables  y las memoria de las funciones

function crearcontadordeproyectos() {
    let contador = inicial; // variable privada  gracias al closure  no es accesible desde fuera de la función crearcontadordeproyectos
    
    return {
        incrementar: function() {
        contador++; // incrementa el contador cada vez que se llama a la función interna
        return `ahora tienes ${contador} proyectos completados`; // devuelve el mensaje con el contador actualizado 
    },
    obtenertotal: () => contador // función para obtener el valor actual del contador sin modificarlo
};
}  
const miContador = crearcontadordeproyectos(4); // se crea una instancia del contador de proyectos