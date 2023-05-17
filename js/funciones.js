

document.addEventListener("DOMContentLoaded", function(event) { 
  // Código que accede a los elementos del DOM


// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("btnApartar");

// Obtener el botón de cerrar
var span = document.getElementsByClassName("close")[0];

// Obtener el botón que abre el modal
var btnenviar = document.getElementById("Enviar");

function obtenerIdsBotonesSeleccionados() {
  const botonesSeleccionados = document.querySelectorAll('.seleccionado');
  const idsBotonesSeleccionados = [];
  botonesSeleccionados.forEach(boton => {
    idsBotonesSeleccionados.push(boton.id);
  });
  return idsBotonesSeleccionados;
}

btnenviar.onclick = function() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const celular = document.getElementById('celular').value;
  const correo = document.getElementById('correo').value;
  const estado = document.getElementById('estado').value;
  const idsBotones = obtenerIdsBotonesSeleccionados();
  
  $.ajax({
    
    url: 'registroboletos.php',
    type: 'POST',
    data: { idsBotones: idsBotones, nombre: nombre, apellido: apellido, celular: celular, correo: correo, estado: estado },
    success: function(response) {
      console.log(response);
    },
    error: function(xhr, status, error) {
      console.log(error);
    }
  });
  alert(idsBotones);

}

// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = function() {
    let contenedorSel = document.getElementById("miDivSeleccionados");
    let botones = contenedorSel.querySelectorAll("button");
    let numeroBotones = botones.length;
    if(numeroBotones === 0){
        modalAlert('No ha seleccionado boletos');
        return;
    }
  modal.style.display = "block";
}

// Cuando el usuario hace clic en el botón de cerrar, cierra el modal
span.onclick = function() {
    
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, lo cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});

/*let arrayBoletos = [];

let contenedor = document.getElementById("miDiv");
contenedor.style.width= '100%';
contenedor.style.height = '300px';
contenedor.style.textAlign = 'center';
contenedor.style.overflow = 'auto';


let contenedorSel = document.getElementById("miDivSeleccionados");

// arrayBoletos = ['00001','00002','00003','00004'];
boletosBD();
for (let i = 0; i < arrayBoletos.length; i++) {
    // Crea un botón en cada iteración del bucle
    let boton = document.createElement("button");
    boton.innerText = arrayBoletos[i];
    boton.id = arrayBoletos[i];
    boton.style.width="7%"
    boton.style.borderRadius= "3px"
    boton.style.margin="1px"
    boton.style.padding="4px"
    boton.style.backgroundColor= "#E05C5C"
    boton.style.color="white"
    contenedor.appendChild(boton);
    

    boton.addEventListener('click', function(event) {
        const idBoton = event.target.id;
        seleccionarBtn(idBoton);
      });
  }*/

let arrayBoletos = [];

let contenedor = document.getElementById("miDiv");
contenedor.style.width= '100%';
contenedor.style.height = '300px';
contenedor.style.textAlign = 'center';
contenedor.style.overflow = 'auto';


let contenedorSel = document.getElementById("miDivSeleccionados");
contenedorSel.style.width= '100%';
contenedorSel.style.height = '200px';
contenedorSel.style.textAlign = 'center';
contenedorSel.style.overflow = 'auto';

// arrayBoletos = ['00001','00002','00003','00004'];
boletosBD();

for (let i = 0; i < arrayBoletos.length; i++) {
    // Crea un botón en cada iteración del bucle
    let boton = document.createElement("button");
    boton.innerText = arrayBoletos[i];
    boton.id = arrayBoletos[i];
    boton.style.width= "calc(14.28% - 6px)"; // Width set to 25% of the container's width minus margin and padding
    boton.style.borderRadius= "3px";
    boton.style.margin="1px";
    boton.style.padding="4px";
    boton.style.backgroundColor= "#E05C5C";
    boton.style.color="white";
    contenedor.appendChild(boton);

    boton.addEventListener('click', function(event) {
        const idBoton = event.target.id;
        seleccionarBtn(idBoton);
      });

     
}


  

  function seleccionarBtn(idBoton){
    const miBotonSel = document.getElementById(idBoton);
    
    if(!miBotonSel.classList.contains('seleccionado'))
    {
        let botones = contenedorSel.querySelectorAll("button");
        let numeroBotones = botones.length;
        if(numeroBotones === 30){
            modalAlert('Ya selecciono el maximo');
            return;
        }
    }


    

    if(miBotonSel.classList.contains('seleccionado')){
        miBotonSel.classList.remove('seleccionado');
        // contenedor.appendChild(miBotonSel);
        // contenedor.insertBefore(miBotonSel, contenedor.children[parseInt(miBotonSel)-1]);
        regresarBoton(idBoton, "miDiv");
         
        
        miBotonSel.style.width= "calc(14.28% - 6px)"; // Width set to 25% of the container's width minus margin and padding
        miBotonSel.style.borderRadius= "3px";
        miBotonSel.style.margin="1px";
        miBotonSel.style.padding="4px";
        miBotonSel.style.backgroundColor= "#E05C5C";
        miBotonSel.style.color="white";

    }
    else{
        miBotonSel.classList.add('seleccionado');
        contenedorSel.appendChild(miBotonSel);
        /*miBotonSel.style.backgroundColor="limegreen"
        miBotonSel.style.color="black"
        miBotonSel.style.width="10%"
        miBotonSel.style.padding="10px"
        miBotonSel.style.borderRadius="10px"*/

        
       
        miBotonSel.style.borderRadius= "10px";
        miBotonSel.style.backgroundColor= "limegreen";
        miBotonSel.style.color="black";

    }
    
  }

  function regresarBoton(idBoton, idDivOriginal) {
    const boton = document.getElementById(idBoton);
    const divOriginal = document.getElementById(idDivOriginal);
    const index = parseInt(idBoton)-1;
    divOriginal.insertBefore(boton, divOriginal.children[index]); // añadir el botón como primer hijo del div original
    ordenarBtn();
  }


  function ordenarBtn(){
    const divBotones = document.getElementById('miDiv');
    const botones = Array.from(divBotones.querySelectorAll('button'));

    // Ordenar los botones en base a su id
    botones.sort(function(a, b) {
    return a.id.localeCompare(b.id);
    });

    // Agregar los botones ordenados al div
    botones.forEach(function(boton) {
    divBotones.appendChild(boton);
    });
  }


  function boletosBD(){
    const total = 60000;
    for (let i = 0; i < total; i++) {
        arrayBoletos.push( (i+1).toString().padStart(5, "0"));
      }
  }

/************************************************************************/

  function obtenerBoletosAleatorios(listaBoletos, cantidad) {
  const boletosAleatorios = [];
  
  // Si la cantidad solicitada es mayor que el número de boletos disponibles, devuelve todos los boletos
  if (cantidad >= listaBoletos.length) {
    return listaBoletos;
  }

  // Genera números aleatorios únicos hasta llegar a la cantidad deseada
  while (boletosAleatorios.length < cantidad) {
    const numAleatorio = Math.floor(Math.random() * listaBoletos.length);
    
    if (!boletosAleatorios.includes(listaBoletos[numAleatorio])) {
      boletosAleatorios.push(listaBoletos[numAleatorio]);
    }
  }

  return boletosAleatorios;
}




function aleatorio(cantidad){
    const boletosAleatorios = obtenerBoletosAleatorios(arrayBoletos, cantidad);
    let botones = contenedorSel.querySelectorAll("button");
    let numeroBotones = botones.length;
    if( cantidad + numeroBotones > 30 ){
        let cantidadR = 30 - numeroBotones;
        rehacerAleatorio(cantidadR);
        return;
    }
    if(numeroBotones === 30){
        modalAlert('Ya selecciono el maximo');
        return;
    }
    for( let i = 0; i < boletosAleatorios.length; i++){
        seleccionarBtn(boletosAleatorios[i])
    }
}

function rehacerAleatorio(cantidadR){
    aleatorio(cantidadR);
}




function modalAlert(mensajeAlerta){

// Crea un elemento div para el modal
var modal = document.createElement("div");
modal.classList.add("modal");


// Crea un elemento div para el contenido del modal
var modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modalContent.style.width="48%";
modalContent.style.backgroundColor = "lightyellow";



// Crea un elemento span para el botón de cerrar
var closeBtn = document.createElement("span");
closeBtn.classList.add("close");
closeBtn.innerHTML = "&times;";


// Crea un elemento h2 para el título del modal
var modalTitle = document.createElement("h2");
modalTitle.innerHTML = "Alerta";
modalTitle.style.textAlign="center";

// Crea un elemento p para el contenido del modal
var modalBody = document.createElement("p");
modalBody.innerHTML = mensajeAlerta;
modalBody.style.textAlign="center";
modalBody.style.color = "red";

// Agrega el botón de cerrar al contenido del modal
modalContent.appendChild(closeBtn);

// Agrega el título y el contenido al contenido del modal
modalContent.appendChild(modalTitle);
modalContent.appendChild(modalBody);

// Agrega el contenido del modal al modal
modal.appendChild(modalContent);

// Agrega el modal al cuerpo del documento
document.body.appendChild(modal);


modal.style.display = "block";


// Función para cerrar el modal
/*function closeModal() {
  // Oculta el modal
  modal.style.display = "none";
}*/

// Agrega un manejador de eventos al botón que abre el modal
//btn.addEventListener("click", showModal);

// Agrega un manejador de eventos al elemento span que cierra el modal
closeBtn.addEventListener("click",  function() {
    modal.style.display = "none"
});

// Agrega un manejador de eventos al modal para cerrarlo al hacer clic fuera del contenido
/*window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});*/
}




