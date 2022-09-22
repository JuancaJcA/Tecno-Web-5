function EnviaContacto(){
    var datos=["Nombre", "email", "numero", "mensaje"];

    var a=1;
    for(var i=0; i<datos.length;i++){
        if(!validardatos(datos[i])){
         a=a-1;
         break;
        }
    }
    
    if(a>0){
        display_image('images/mensajes.jpg', 50,50,'JavaScriptImage');
        var nombre=document.getElementById("Nombre").value;
        var correo=document.getElementById("email").value;
        alert("Gracias por su mensaje "+nombre+", con email "+correo);
    }
}
function validardatos(nombre){
    var txt=document.getElementById(nombre).value;
    if(txt===""){
        alert("Campo "+nombre+" Vacio" );
        return false;
    }
    else{
        return true;
    }
}

function display_image(src, width, height, alt) {
    var a = document.createElement("img");
    a.id="imag";
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.querySelector('.container').appendChild(a);

}