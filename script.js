import {products} from './data/products.js';

const containerFruta = document.getElementById('containerFruta');
const containerVerdura = document.getElementById('containerVerdura');
const containerTuberculo = document.getElementById('containerTuberculo');
const containerAromatica = document.getElementById('containerAromatica');

let carrito = [];
const btnCarrito = document.getElementById('btnCarrito');
const modalContainer = document.getElementById('modal-container');
const modal__content = document.getElementById('modal__content');
const modal__total = document.getElementById('modal__total');
const modal__btnClose = document.getElementById('modal__btnClose');
const contadorCarrito = document.getElementById('contadorCarrito');

//* Formatear precios peso colombiano (con constructor Intl.NumberFormat, se crea una instancia que contiene un objeto para ajustar caracteristicas)
const formatearCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0, // evita los decimales ',00' en #s enteros
});


//* Presentar productos del array 'products'
products.forEach((product , index ) =>{
    let newProduct = document.createElement('article');
    newProduct.className = 'product';
    newProduct.innerHTML = `
        <div class="product__subsection">${product.subsection}</div>
        <div class="product__img"><img src="${product.img}" alt="${product.name}"></div>
        <h3 class="product__name">${product.name}</h3>
        <p class="product__description">${product.description}</p>
        <div class="product__measureAndPrice">
            <input type="number" class="product__quantity" id="product__quantity-${index}" value="1" min="1" max="10" step="0.5">
            <p class="measure">Kg</p>
            <p class="price" id="price-${index}">${formatearCOP.format(product.price)}</p>
        </div>       
    `;

    //* Creación de botón '+ agregar' y asignar
    let btnAgregar = document.createElement('button');
    btnAgregar.className = 'btnComprar';
    btnAgregar.innerText = ' + Agregar ';
    newProduct.appendChild(btnAgregar);

    //* Asignar producto a su sección correspondiente, según subsección que pertenece
    if(product.subsection==='Fruta' || product.subsection==='Pulpa'){
        containerFruta.appendChild(newProduct);
    }
    else if(product.subsection==='Hojas' || product.subsection==='Fruto hortaliza') {
        containerVerdura.appendChild(newProduct);
    }
    else if(product.subsection==='Raíz' || product.subsection==='Tallo') {
        containerTuberculo.appendChild(newProduct);
    }
    else if(product.subsection==='Hierba' || product.subsection==='Condimento') {
        containerAromatica.appendChild(newProduct);
    }

    //* listener botón agregar
    btnAgregar.addEventListener('click' , ()=>{
        //* captura input number
        const cantidad = parseFloat(document.getElementById(`product__quantity-${index}`).value);
        
        //* se verifica si existe en carrito para agregar cantidad, sino, se agrega nuevo objeto a carrito
        const existente = carrito.find(item => item.id === product.id);
        if (existente) {
            existente.quantity += cantidad;
            existente.price += product.price * cantidad;

        } else {
            carrito.push({
                id: product.id,
                name: product.name,
                price: product.price * cantidad,
                quantity: cantidad,
                img: product.img,
            });
        }
        
        contandoProducts();

        // *Toastify - notificaciones flotantes
        Toastify({
            text: `✅ ${cantidad} kg de <b>${product.name} agregado</b> al carrito`,
            duration: 2900,
            escapeMarkup: false, // Permite usar HTML
            backgroundColor: "hsl(72, 72%, 47%)",
            gravity: "bottom", // "top" o "bottom"
            position: "right", // "left", "center" o "right"
            onClick: function(){
                abrirCerrarCarrito();
            },
        }).showToast();

    });

});

//* Carrito
function renderCarrito () {
        
    modal__content.innerHTML = '';
    
    //* Muestra que carrito esta vacio 
    if (carrito.length === 0) {
        modal__content.innerHTML = `
        <div class="modal__content-vacio">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"/><path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <p>Vacío</p>
        <div/>`;
    }

    //* Si no, renderiza contenido de productos en carrito
    carrito.forEach( productCarrito => {
        const modal__product = document.createElement('div');
        modal__product.className = 'modal__product';
        modal__product.innerHTML = `
            <img src="${productCarrito.img}">
            <p>${productCarrito.name}</p>
            <p>${productCarrito.quantity}Kg ${formatearCOP.format(productCarrito.price)}</p>
        `;
        
        //* btn Eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'btnEliminar';
        btnEliminar.textContent = 'Eliminar';
        
        btnEliminar.addEventListener( 'click' , ()=> {
            console.log("eliministe: " + productCarrito.name);
            carrito = carrito.filter(pro => pro.id !== productCarrito.id);
            renderCarrito();
            contandoProducts();

        });
        
        modal__product.appendChild(btnEliminar);
        modal__content.appendChild(modal__product);
    }); 
    
    //* Calcular Total
    const total = carrito.reduce((acc, prod) => acc + prod.price, 0);
    modal__total.textContent = `Total a pagar: ${formatearCOP.format(total)}`;

}

function contandoProducts() {
    if (carrito.length===0) {
        contadorCarrito.classList.remove('active');
        contadorCarrito.textContent = '';
    }
    else if (carrito.length > 0){
        contadorCarrito.textContent = carrito.length;
        contadorCarrito.classList.add('active');
    }
};

//* Abrir y cerrar carrito
function abrirCerrarCarrito() {
    modalContainer.classList.toggle('active');   
    renderCarrito();   
}

btnCarrito.addEventListener('click' , abrirCerrarCarrito);
  
modal__btnClose.addEventListener('click' , () => {
    modalContainer.classList.remove('active');
});

// * Menú hamburguesa
const btnMenu = document.getElementById('btnMenu');
const nav = document.getElementById('nav');

btnMenu.addEventListener('click' , ()=> {
    nav.classList.toggle('active');
});

//* Cierre menú despues de seleccionar un link del menú
document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active'); // Cierra el menú
    });
});






