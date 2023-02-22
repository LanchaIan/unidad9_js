class Articulo{
    codigo;
    descripcion;
    precio;
    cantidad;
    imagen;
    constructor(codigo, descripcion, precio, cantidad, imagen){
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}

const Ordenador1 = new Articulo("A001", "Ordenador1", 650.1, "imagenes/ORDENADOR1.GIF");
const Ordenador2 = new Articulo("A002", "Ordenador2", 650.1, "imagenes/ORDENADOR2.GIF");
const raton = new Articulo("B001", "raton", 650.1, "imagenes/RATON.GIF");
const microfono = new Articulo("C001", "microfono", 650.1, "imagenes/MICRO.GIF");



function crear(){
    alert("crear");
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
}

function mostrar(cname){
    alert("mostrando");
    let x = getCookie(cname);
    alert(x);
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
        alert("setinncookie");
         setCookie("username", user, 30);
       }
    }
  }