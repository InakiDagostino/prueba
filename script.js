let btn = document.getElementById('boton');
let div = document.getElementById('datospoke');

btn.onclick = function() {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let datos = data.results;
        console.log(datos);
        for (let i = 0; i < datos.length; i++) {
            console.log(datos[i].name);
            let text = document.createElement("p");
            let dato = document.createTextNode(datos[i].name);
            text.appendChild(dato);
            div.appendChild(text);
        }
    });
}