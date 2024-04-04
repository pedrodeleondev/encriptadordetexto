btnCopiar = document.getElementById('btnCopiar');
btnEncriptar = document.getElementById('btnEncriptar');
btnDesencriptar = document.getElementById('btnDesencriptar');
txtEncriptar = document.getElementById('txtEncriptar');
txtDesencriptar = document.getElementById('txtDesencriptar');
var copiarActive = false;

function ponerColor() {
    if (copiarActive == true) {
        btnCopiar.style.backgroundColor = "lightgreen";
        btnCopiar.style.borderColor = "green";
    } else {
        btnCopiar.style.backgroundColor = "lightcoral";
        btnCopiar.style.borderColor = "red";
    }
}

btnCopiar.addEventListener('click', () => {
    if (copiarActive == false) {
        ponerColor();
        copiarActive = true;
    } else {
        ponerColor();
        copiarActive = false;
    }
})

btnCopiar.addEventListener('mouseover', () => {
    if (copiarActive == false) {
        btnCopiar.style.backgroundColor = "red";
    } else {
        btnCopiar.style.backgroundColor = "green";
    }
})
btnCopiar.addEventListener('mouseout', () => {
    ponerColor();
})

function encriptar() {
    let fraseFinal = "";
    let texto = txtEncriptar.value.toLowerCase();
    let arregloLetras = texto.split('');
    for (i = 0; i < arregloLetras.length; i++) {
        if (arregloLetras[i] == "e" || arregloLetras[i] == "i" || arregloLetras[i] == "a" || arregloLetras[i] == "o" || arregloLetras[i] == "u") {
            switch (arregloLetras[i]) {
                case "e":
                    fraseFinal += "enter";
                    break;
                case "i":
                    fraseFinal += "imes";
                    break;
                case "a":
                    fraseFinal += "ai";
                    break;
                case "o":
                    fraseFinal += "ober";
                    break;
                case "u":
                    fraseFinal += "ufat";
                    break;
            }
        } else {
            fraseFinal += arregloLetras[i];
        }

    }
    txtDesencriptar.value = fraseFinal;
}
btnEncriptar.addEventListener('click', () => {
    encriptar();
})

function desencriptar() {
    let textoEncriptado = txtDesencriptar.value;
    let textoDesencriptado = "";
    textoDesencriptado = textoEncriptado.replace(/enter/g, "e")
                                       .replace(/imes/g, "i")
                                       .replace(/ai/g, "a")
                                       .replace(/ober/g, "o")
                                       .replace(/ufat/g, "u");
    txtEncriptar.value = textoDesencriptado;
}
btnDesencriptar.addEventListener('click', () => {
    desencriptar();
})