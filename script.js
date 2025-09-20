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
const btnCarrito = document.getElementById('btnCarrito');
const modal = document.getElementById('modal');

//* Presentar productos en array
products.forEach((product) =>{
    let newProduct = document.createElement('article');
    newProduct.className = 'product';
    newProduct.innerHTML = `
    <div class="product__subsection">${product.subsection}</div>
        <div class="product__img"><img src="${product.img}" alt="${product.name}"></div>
        <h3 class="product__name">${product.name}</h3>
        <p class="product__description">${product.description}</p>
        <div class="product__measureAndPrice">
        <input type="number" class="product__quantity" value="0.5" min="0.5" max="20" step="0.5">
        <p class="measure">Kg</p>
        <p class="price" id="price">$${product.price}</p>         
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

        carrito.push({
            quantity: '',
            name:product.name,
            price:product.price,
            img:product.img,
        });
        console.log(carrito);
    });
});


btnCarrito.addEventListener('click' , () =>{
    // * Encabezado modal
    const modal__header = document.createElement('div');
    modal__header.className = 'modal__header';
    modal__header.innerHTML = `
        <h1>Carrito</h1>
    `;
    modal.append(modal__header);
    
    //* btn cierre modal
    const modal__btnClose = document.createElement('div');
    modal__btnClose.className = 'modal__btnClose';
    modal__btnClose.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
        </svg>
    `;
    modal__header.appendChild(modal__btnClose);

    //* contenido de productos en carrito
    carrito.forEach( (productCarrito) => {
        const modal__contentProduct = document.createElement('div');
        modal__contentProduct.className = 'modal__contentProduct';
        modal__contentProduct.innerHTML = `
            <img src="${productCarrito.img}">
            <p>${productCarrito.name}</p>
            <p>${productCarrito.price}</p>
        `;
        modal.appendChild(modal__contentProduct);

        //* btn Eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'btnEliminar';
        btnEliminar.textContent = 'Eliminar';
        modal__contentProduct.appendChild(btnEliminar);

        btnEliminar.addEventListener( 'click' , ()=> {
             modal__contentProduct.remove();
        })
    }); 
    
    
});

















//     {
//     id:,
//     name:'',
//     subsection:'',
//     description:'',
//     img:'',
// },