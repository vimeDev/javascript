function addTag(){
    let crearButton = document.createElement("button");
    let buttonName = document.createTextNode("Enviar");

    crearButton.appendChild(buttonName);
    document.body.appendChild(crearButton);
    crearButton.onclick = function(){
        alert("Esta seguoro al enviar el documento?");
    }


}
addTag();