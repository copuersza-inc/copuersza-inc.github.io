

function enviarInformacion() {
    var nombreCompleto = document.getElementById("nombre").value;
    var iglesia = document.getElementById("iglesia").value;
    var pastor = document.getElementById("pastor").value;
    var correoElectronico = document.getElementById("correo").value;
    var numerodeTelefono = document.getElementById("numero").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombreCompleto == "" || iglesia == "" || pastor == "" || correoElectronico == "" || numerodeTelefono == "" || mensaje == "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    var informacion = "Nombre completo: " + nombreCompleto + "\n" +
        "Iglesia: " + iglesia + "\n" +
        "Pastor: " + pastor + "\n" +
        "Correo electronico: " + correoElectronico + "\n" +
        "numero de telefono: " + numerodeTelefono + "\n" +
        "Mensaje: " + mensaje;

    var destinatario = "copuersza@gmail.com";
    var asunto = "Información de contacto";

    var mailtoLink = "mailto:" + destinatario + "?subject=" + asunto + "&body=" + encodeURIComponent(informacion);

    window.location.href = "mailto:copuersza@gmail.com?subject=Informaci%C3%B3n%20de%20contacto&body=Nombre%20completo%3A%20adcaa%0AIglesia%3A%20scs%0APastor%3A%20sdcss%0ACorreo%20electronico%3A%20adcaca%40gmail.com%0Anumero%20de%20telefono%3A%2021446615651%0AMensaje%3A%20avavavavavvvvvvvvav";
}
