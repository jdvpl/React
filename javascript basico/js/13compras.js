class ComprasPendiente extends Tarea {
    constructor(nombre, prioridad, cantidad, precio, total) {
        super(nombre, prioridad); //con el super hereda las dos variables que estan en la clase principal
        this.cantidad = cantidad;
        this.precio = precio;
        this.total = precio * cantidad;

    }
    mostrar() {
        super.mostrar();
        console.log(`voy a comprar ${this.cantidad}, el precio unitario es: ${this.precio}
        valor a pagar: ${this.total}`)
    }
    hola() {
        return 'insecto'
    }
}