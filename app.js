function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("contenido__salida").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("contenido__salida").value = textoDesencriptado;
}

function copiar() {
    let texto = document.getElementById("contenido__salida").value;
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Texto copiado al portapapeles!");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}
