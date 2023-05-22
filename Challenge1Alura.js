let textoCopiar;

/*Función para deshabilitar las etiquetas*/
function deshabilitarEtiquetas(image, label, botonCopiar) {
    image.style.display = "none";//Desaparecer imagen
    label.style.display = "none";//Desaparecer el label de no texto
    botonCopiar.style.display = "inline-block";//Activar el botón de copiar
}

/*Función para habilitar las etiquetas*/
function habilitarEtiquetas(image, label, botonCopiar) {
    image.style.display = "inline";
    label.style.display = "inline-block";//Reaparecer el label de no texto
    botonCopiar.style.display = "none";
}

/*Función para detectar cuando el texto es vacío o contiene caracteres*/
function textoEncriptadoVacio(variable, contieneCaracterEspecial) {
    let habilitar = 0;
    if ((variable.trim().length === 0) || (contieneCaracterEspecial)) {//Validar que el texto no sea solo espacios en blanco o contenga caracteres
        alert("No hay texto o tiene caracteres especiales.");
        document.getElementById("texto").value = "Ingrese el texto que desees encriptar o desencriptar";
        habilitar = 1;
    }
    else {
        habilitar = 0;
    }

    return habilitar;//0 si no está vacío, 1 si está vacío
}

/*FUNCIÓN PARA ENCRIPTAR EL TEXTO INGRESADO*/
function encriptarTexto() {
    /*Variables*/
    let caracterEspecial = /[^A-Za-z0-9\s]/;//Formato para caracteres especiales
    let letraOriginal = ["e", "i", "a", "o", "u"];
    let palabrasEncriptadoras = ["enter", "imes", "ai", "ober", "ufat"];
    let variable = document.getElementById("textoEncriptar").value;//Obtener el texto a encriptar

    let image = document.getElementById("imagenTextoInformativo");
    let label = document.getElementById("labelTexto");
    let botonCopiar = document.getElementById("copiar");

    let contieneCaracterEspecial = caracterEspecial.test(variable);//Retorna true o false

    if (textoEncriptadoVacio(variable, contieneCaracterEspecial) == 0) {
        deshabilitarEtiquetas(image, label, botonCopiar);
        variable = variable.toLowerCase();
        let letras = variable.split("");// Convertir en un array de caracteres
        let i = 0;
        while (i < 5) {
            let j = 0;
            while (j < letras.length) {
                if (letras[j] == letraOriginal[i]) {
                    letras[j] = palabrasEncriptadoras[i];//Modificar la letra de la posicion encontrada
                }
                j = j + 1;//Aumentador para j
            }
            i++;//Aumentador para i
        }
        variable = letras.join(""); // Unir las letras en un nuevo string
        document.getElementById("texto").value = variable;
        textoCopiar = variable;//Almacenar el texto encriptado
    }
    else {
        habilitarEtiquetas(image, label, botonCopiar);
    }
}

/*PARA DESENCRIPTAR EL TEXTO INGRESADO*/
function desencriptarTexto() {
    /*Variables*/
    let caracterEspecial = /[^A-Za-z0-9\s]/;//Formato para caracteres especiales
    let letraOriginal = ["e", "i", "a", "o", "u"];
    let palabrasEncriptadoras = ["enter", "imes", "ai", "ober", "ufat"];
    let variable = document.getElementById("textoEncriptar").value;//Obtener el texto a encriptar

    let image = document.getElementById("imagenTextoInformativo");
    let label = document.getElementById("labelTexto");
    let botonCopiar = document.getElementById("copiar");

    let contieneCaracterEspecial = caracterEspecial.test(variable);//Retorna true o false

    if (textoEncriptadoVacio(variable, contieneCaracterEspecial) == 0) {
        deshabilitarEtiquetas(image, label, botonCopiar);
        variable = variable.toLowerCase();
        let caracteres;
        for (let i = 0; i < 5; i++) {
            caracteres = [palabrasEncriptadoras[i]];//Almacenar solo una palabra encriptadora a buscar (De acuerdo al indice "i")
            let expresion = new RegExp(caracteres.join("|"), "g");//Expresion para buscar todas esas palabras encriptadoras
            variable = variable.replace(expresion, letraOriginal[i]);//Reemplazar todas palabra encriptadoras
        }
        document.getElementById("texto").value = variable;//Imprimir texto deseb
        textoCopiar = variable;//Almacenar el texto encriptado
    }
    else {
        habilitarEtiquetas(image, label, botonCopiar);
        document.getElementById("textoEncriptar").focus;
    }
}

/*PARA BOTÓN COPIAR*/
function copiarTexto() {
    document.getElementById("textoEncriptar").value = textoCopiar;//Modificar el input del texti a encriptar,
}