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

const Ordenador1 = new Articulo("A001", "Ordenador", 650.1, "imagenes/ORDENADOR1.GIF")