/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
Aquí deberás desarrollar la lógica para resolver el problema. */

let amigos =[]


function agregarAmigo() {
   let inputAmigo = document.getElementById("amigo");
   let amigo = inputAmigo.value.trim();

   if (!amigo){
       alert("debes ingresar un nombre");
       return;
   }

   if (amigos.includes(amigo)) {
       alert("Este nombre ya ha sido agregado");
       return;
   }

   amigos.push(amigo);
   console.log(amigos);
  
   renderizarAmigos(); // Actualiza la lista en la pantalla
   inputAmigo.value = ""; // Limpia el input después de agregar
   inputAmigo.focus();
}

function renderizarAmigos(){
   let listaAmigos = document.getElementById("listaAmigos");
   listaAmigos.innerHTML = "" ;

   for (let i = 0; i < amigos.length; i++) {
       let item = document.createElement("li");
       item.textContent = amigos[i];
       listaAmigos.appendChild(item);
   }
}

function sortearAmigo() {
   if(amigos.length === 0) {
       alert("No hay amigos para sortear");
       return;
   }
   let indiceAleatorio = Math.floor(Math.random() * amigos.length);
   let amigoSorteado = amigos[indiceAleatorio];
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}