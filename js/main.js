// array
const arrayImagenesHeader = [
    {
        "imgUrl": "../assets/images/banner/1.jpg",
        "alt": "imagenHeader01"
    },
    {
        "imgUrl": "../assets/images/banner/2.jpg",
        "alt": "imagenHeader02"
    },
    {
        "imgUrl": "../assets/images/banner/3.jpg",
        "alt": "imagenHeader03"
    },
    {
        "imgUrl": "../assets/images/banner/4.jpg",
        "alt": "imagenHeader04"
    },
    {
        "imgUrl": "../assets/images/banner/5.jpg",
        "alt": "imagenHeader05"
    },
    {
        "imgUrl": "../assets/images/banner/6.jpg",
        "alt": "imagenHeader06"
    },
    {
        "imgUrl": "../assets/images/banner/7.jpg",
        "alt": "imagenHeader07"
    },
    {
        "imgUrl": "../assets/images/banner/8.jpg",
        "alt": "imagenHeader08"
    }
];
//     array fotos cabecera

//     array cards

const arrayCards = [
    {
        "imgUrl": "../assets/images/viajes/viajes-1.jpg",
        "alt": "imagenViaje01",
        "titulo": "viaje01",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a corporis eaque doloremque quam, omnis qui? Delectus alias, eligendi odit qui debitis aliquid culpa quasi ratione velit, expedita distinctio laborum."
    },
    {
        "imgUrl": "../assets/images/viajes/viajes-2.jpg",
        "alt": "imagenViaje02",
        "titulo": "viaje02",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a corporis eaque doloremque quam, omnis qui? Delectus alias, eligendi odit qui debitis aliquid culpa quasi ratione velit, expedita distinctio laborum."
    },
    {
        "imgUrl": "../assets/images/viajes/viajes-3.jpg",
        "alt": "imagenViaje03",
        "titulo": "viaje03",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a corporis eaque doloremque quam, omnis qui? Delectus alias, eligendi odit qui debitis aliquid culpa quasi ratione velit, expedita distinctio laborum."
    },
    {
        "imgUrl": "../assets/images/viajes/viajes-4.jpg",
        "alt": "imagenViaje04",
        "titulo": "viaje04",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a corporis eaque doloremque quam, omnis qui? Delectus alias, eligendi odit qui debitis aliquid culpa quasi ratione velit, expedita distinctio laborum."
    },
    {
        "imgUrl": "../assets/images/viajes/viajes-5.jpg",
        "alt": "imagenViaje05",
        "titulo": "viaje05",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a corporis eaque doloremque quam, omnis qui? Delectus alias, eligendi odit qui debitis aliquid culpa quasi ratione velit, expedita distinctio laborum."
    },
    {
        "imgUrl": "../assets/images/viajes/viajes-6.jpg",
        "alt": "imagenViaje06",
        "titulo": "viaje06",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a corporis eaque doloremque quam, omnis qui? Delectus alias, eligendi odit qui debitis aliquid culpa quasi ratione velit, expedita distinctio laborum."
    },
    {
        "imgUrl": "../assets/images/viajes/viajes-7.jpg",
        "alt": "imagenViaje07",
        "titulo": "viaje07",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a corporis eaque doloremque quam, omnis qui? Delectus alias, eligendi odit qui debitis aliquid culpa quasi ratione velit, expedita distinctio laborum."
    }
]



// llamar a los elementos del DOM

const imagenHeader = document.querySelector(".imagen-header");
const cajaImagenes = document.querySelector(".caja-imagenes");

// funcion pintar banner
//     pintar la primera imagen del array
//     arrayfotoscabecera[0]
function randint(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
const numeroRandom = randint(0, arrayImagenesHeader.length - 1);

const pintarBanner = () => {
    const cambioImagenHeader = imagenHeader.setAttribute("src", arrayImagenesHeader[numeroRandom].imgUrl);
    const cambioAltHeader = imagenHeader.setAttribute("alt", arrayImagenesHeader[numeroRandom].alt);
    return (cambioImagenHeader, cambioAltHeader);
}

pintarBanner();
// funcion pintar cards
// const article = document.createElement("article");
// const imagenCards01 = document.createElement("img");
// const tituloImagen = document.createElement("h2");
// const descripcionImagen = document.createElement("p");



const pintarCards = () => {
    arrayCards.forEach((elemento) => {
        const article = document.createElement("article");
        const imagenCards01 = document.createElement("img");
        const tituloImagen = document.createElement("h2");
        const descripcionImagen = document.createElement("p");
        
        // imagen
        const cambioImagenCard = imagenCards01.setAttribute("src", elemento.imgUrl);
        const cambioAltCard = imagenCards01.setAttribute("alt", elemento.alt);
        const imgAnidado = article.append(imagenCards01);

        //titulo
        const cambioH2Card = tituloImagen.append(elemento.titulo);
        const h2Anidado = article.append(tituloImagen);

        // parrafo
        const cambioPcard = descripcionImagen.append(elemento.descripcion);
        const pAnidado = article.append(descripcionImagen);


        const articleAniadido = cajaImagenes.append(article);
    });
    
}

pintarCards();
// console.log(cajaImagenes);


// invoco pintar banner
// invocopintar cards

