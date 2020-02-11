function storage_value()  {
    var nom = document.getElementById("firstname").value;
    var prenom = document.getElementById("lastname").value;
    var rpps = document.getElementById("id_medecin").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var ordo = document.getElementById("ordo").value;

    sessionStorage.setItem("nom",nom);
    sessionStorage.setItem("prenom",prenom);
    sessionStorage.setItem("rpps",rpps);
    sessionStorage.setItem("email",email);
    sessionStorage.setItem("tel",tel);
    sessionStorage.setItem("ordo",ordo);

    document.location.href="ordonnance.html"
}

function reccup_value(){
	var nom = sessionStorage.getItem("nom");
    var prenom = sessionStorage.getItem("prenom");
    var rpps = sessionStorage.getItem("rpps");
    var email = sessionStorage.getItem("email");
    var tel = sessionStorage.getItem("tel");
    var ordo = sessionStorage.getItem("ordo");

    document.getElementById("nom").innerHTML = sessionStorage.getItem("nom");
    document.getElementById("prenom").innerHTML = sessionStorage.getItem("prenom");
    document.getElementById("rpps").innerHTML = sessionStorage.getItem("rpps");
    document.getElementById("email").innerHTML = sessionStorage.getItem("email");
    document.getElementById("tel").innerHTML = sessionStorage.getItem("tel");
    document.getElementById("ordo").innerHTML = sessionStorage.getItem("ordo");
}