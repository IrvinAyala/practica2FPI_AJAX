var formulario = document.getElementById("formulario1");

formulario.onsubmit = function () {
    var form1 = new FormData(formulario);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xhttp.open("POST", "archivo.php", true);
    xhttp.send(form1);
};



