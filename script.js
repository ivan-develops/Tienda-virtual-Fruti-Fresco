const products = [
{
    id: 1,
    name: 'Banano',
    subsection: 'Fruta',
    description: 'fuente natural de energía, dulce y práctico.',
    price: 1500,
    img: 'imgProducts/Frutas-banano.jpg',
},
{
    id:2,
    name:'Manzana',
    subsection:'Fruta',
    description:'crujiente y deliciosa, ideal para cualquier momento.',
    price: 1500,
    img:'imgProducts/Frutas-manzana.jpg',
},
{
    id:3,
    name:'Naranja',
    subsection:'Fruta',
    description:'jugosa y refrescante, llena de vitamina C.',
    price: 1500,
    img:'imgProducts/Frutas-naranja.jpg',
},
{
    id:4,
    name:'Guanábana',
    subsection:'Pulpa',
    description:'pulpa suave y refrescante con un toque ácido.',
    price: 1500,
    img:'imgProducts/Frutas-guanabana.jpg',
},
{
    id:5,
    name:'Feijoa',
    subsection:'Pulpa',
    description:'exótica, fragante y naturalmente dulce.',
    price: 1500,
    img:'imgProducts/Frutas-feijoa.jpg',
},
{
    id:6,
    name:'Maracuyá',
    subsection:'Pulpa',
    description:'aroma intenso y sabor tropical único.',
    price: 1500,
    img:'imgProducts/Frutas-maracuya.jpg',
},
{
    id:7,
    name:'Espinaca',
    subsection:'Hojas',
    description:'fresca y nutritiva, rica en hierro.',
    price: 1500,
    img:'imgProducts/Verduras-espinaca.jpg',
},
{
    id:8,
    name:'Lechuga',
    subsection:'Hojas',
    description:'ligera, crujiente y perfecta para ensaladas.',
    price: 1500,
    img:'imgProducts/Verduras-lechuga.jpg',
},
{
    id:9,
    name:'Acelga',
    subsection:'Hojas',
    description:'hojas verdes versátiles y llenas de fibra.',
    price: 1500,
    img:'imgProducts/Verduras-acelga.jpg',
},
{
    id:10,
    name:'Tomate',
    subsection:'Fruto hortaliza',
    description:'jugoso, fresco y base de muchas recetas.',
    price: 1500,
    img:'imgProducts/Verduras-tomate.jpg',
},
{
    id:11,
    name:'Aguacate',
    subsection:'Fruto hortaliza',
    description:'cremoso, saludable y lleno de sabor.',
    price: 1500,
    img:'imgProducts/Verduras-aguacate.jpg',
},
{
    id:12,
    name:'Ahuyama',
    subsection:'Fruto hortaliza',
    description:'dulce y suave, ideal para sopas y purés.',
    price: 1500,
    img:'imgProducts/Verduras-ahuyama.jpg',
},
{
    id:13,
    name:'Papa criolla',
    subsection:'Raíz',
    description:'pequeña y tierna, perfecta para sopas.',
    price: 1500,
    img:'imgProducts/Tuberculos-criolla.jpg',
},
{
    id:14,
    name:'Jengibre',
    subsection:'Raíz',
    description:'aromático y picante, ideal para infusiones.',
    price: 1500,
    img:'imgProducts/Tuberculos-jengibre.jpg',
},
{
    id:15,
    name:'Papa sabanera',
    subsection:'Raíz',
    description:'versátil y sabrosa, la clásica de la cocina.',
    price: 1500,
    img:'imgProducts/Tuberculos-sabanera.jpg',
},
{
    id:16,
    name:'Yuca',
    subsection:'Tallo',
    description:'suave y deliciosa, gran acompañante de comidas.',
    price: 1500,
    img:'imgProducts/Tuberculos-yuca.jpg',
},
{
    id:17,
    name:'Zanahoria',
    subsection:'Tallo',
    description:'dulce, crujiente y llena de vitaminas.',
    price: 1500,
    img:'imgProducts/Tuberculos-zanahoria.jpg',
},
{
    id:18,
    name:'Remolacha',
    subsection:'Tallo',
    description:'colorida y nutritiva, con un sabor terroso.',
    price: 1500,
    img:'imgProducts/Tuberculos-remolacha.jpg',
},
{
    id:19,
    name:'Orégano',
    subsection:'Condimento',
    description:'aromático y esencial en muchas recetas.',
    price: 1500,
    img:'imgProducts/Aromaticas-oregano.jpg',
},
{
    id:20,
    name:'Pimienta',
    subsection:'Condimento',
    description:'toque picante que realza los sabores.',
    price: 1500,
    img:'imgProducts/Aromaticas-pimienta.jpg',
},
{
    id:21,
    name:'Cúrcuma',
    subsection:'Condimento',
    description:'raíz dorada con notas cálidas y medicinales.',
    price: 1500,
    img:'imgProducts/Aromaticas-curcuma.jpg',
},
{
    id:22,
    name:'Manzanilla',
    subsection:'Hierba',
    description:'suave y calmante, ideal para infusiones.',
    price: 1500,
    img:'imgProducts/Aromaticas-manzanilla.jpg',
},
{
    id:23,
    name:'Romero',
    subsection:'Hierba',
    description:'fragante y perfecto para carnes y guisos.',
    price: 1500,
    img:'imgProducts/Aromaticas-romero.jpg',
},
{
    id:24,
    name:'Yerbabuena',
    subsection:'Hierba',
    description:'fresca y revitalizante, ideal para bebidas.',
    price: 1500,
    img:'imgProducts/Aromaticas-yerbabuena.jpg',
},
];

const containerFruta = document.getElementById('containerFruta');
const containerVerdura = document.getElementById('containerVerdura');
const containerTuberculo = document.getElementById('containerTuberculo');
const containerAromatica = document.getElementById('containerAromatica');

let carrito = [];

//* Presentar productos en array
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
            <p class="price" id="price-${index}">$${product.price}</p>
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
        
        carrito.push({
            id: product.id,
            name:product.name,
            price:product.price * cantidad,
            quantity: cantidad,
            img:product.img,
        });
        console.log(carrito);

        // *Toastify - notificaciones flotantes
        Toastify({
            text: `✅ ${cantidad} kg de <b>${product.name} agregado</b> al carrito`,
            duration: 2900,
            escapeMarkup: false, // Permite usar HTML
            backgroundColor: "hsl(72, 72%, 47%)",
            gravity: "bottom", // "top" o "bottom"
            position: "right", // "left", "center" o "right"
        }).showToast();

    });
    //* PRUEBA CHECKBOX Kg y Lb
    // const btnWeight = document.getElementById('btnWeight');

    // btnWeight.addEventListener( 'click' , ()=>{
    //     product.price = product.price / 2.2;

    // });
    
});

const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const modal__content = document.getElementById('modal__content');
const modal__total = document.getElementById('modal__total');
const modal__btnClose = document.getElementById('modal__btnClose');
const btnCarrito = document.getElementById('btnCarrito');

btnCarrito.addEventListener('click' , () =>{

    modalContainer.classList.toggle('active');
    
    //* btn cierre modal
    modal__btnClose.addEventListener('click' , () => {
        modalContainer.classList.remove('active');
    });

    //* contenido de productos en carrito
    function renderCarrito () {

        modal__content.innerHTML = '';

        carrito.forEach( productCarrito => {
            const modal__product = document.createElement('div');
            modal__product.className = 'modal__product';
            modal__product.innerHTML = `
                <img src="${productCarrito.img}">
                <p>${productCarrito.name}</p>
                <p>${productCarrito.quantity}Kg $${productCarrito.price}</p>
            `;
            modal__content.appendChild(modal__product);
    
            //* btn Eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.className = 'btnEliminar';
            btnEliminar.textContent = 'Eliminar';
            modal__product.appendChild(btnEliminar);
            
            btnEliminar.addEventListener( 'click' , ()=> {
                console.log("eliministe: " + productCarrito.name);
                carrito = carrito.filter(pro => pro.id !== productCarrito.id);
                renderCarrito();
            });

            
        }); 
        //* Suma valor productos
        let total = carrito.reduce( (acumulador, producto) => {
            return acumulador + producto.price }, 0);
            console.log('Total carrito: $' + total);
        modal__total.innerHTML = `
            Total a pagar : $ ${total} `;
        
        //* Muestra que esta vacio 
        if (carrito.length === 0) {
            modal__content.innerHTML = `
            <div class="modal__content-vacio">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"/><path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                <p>Vacío</p>
            <div/>`;
            
        }

    }
    renderCarrito();    
    
});

const btnMenu = document.getElementById('btnMenu');
const nav = document.getElementById('nav');

btnMenu.addEventListener('click' , ()=> {
    nav.classList.toggle('active');
    // nav.children;
});