const cartBtn = document.querySelectorAll('.agregarBtn');
const vaciarCart = document.getElementById('vaciarCart');

vaciarCart.addEventListener('click', vaciarCarrito, true);

cartBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        let img = element.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.src;
        let contenido = element.previousElementSibling.textContent;
        let precioPos = contenido.indexOf('$');
        let nombre = contenido.slice(0, precioPos);
        let precio = contenido.slice(precioPos);

        let pos = img.indexOf('img') + 3;
        let partPath = img.slice(pos);

        const obj = {};
        obj.img = `img-cart${partPath}`;
        obj.nombre = nombre;
        obj.precio = precio;

        imprimirObj(obj);
    })
});

function imprimirObj(obj) {

    let tabla = document.querySelector('table tbody');
    let fila = document.createElement('tr');

    fila.innerHTML = `
    <td>
        <figure class="image is-48x48">
            <img src="${obj.img}" alt="${obj.nombre}">
        </figure>
    </td>
    <td>
        ${obj.nombre}
    </td>
    <td class="espaciadoPrecios">
        ${obj.precio}
    </td>
    <td>
        <span class="icon is-medium">
            <a class="trash"><i class="far fa-trash-alt"></i></a>
        </span>
    </td>`;

    tabla.appendChild(fila);

    registrarProducto();
}

function registrarProducto() {
    let trash = document.querySelectorAll('.trash');
    console.log(trash)
    trash.forEach(element => {
        element.addEventListener('click', (e) => {
            let fila = e.currentTarget.parentElement.parentElement.parentElement;
            fila.remove();
        })
    })
}

function vaciarCarrito() {
    let tbody = document.getElementById('tablebody');
    while(tbody.hasChildNodes()){
        tbody.removeChild(tbody.firstChild);
    }
}