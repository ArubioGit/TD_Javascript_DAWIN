var etudiant = {
    prenom: "",
    nom: "",
    numero_etudiant: "",
    dateNaissance: []
}

var d = new Date();

function Etudiant(nom, prenom, num_etudiant, date_naissance) {
    this.prenom = prenom;
    this.nom = nom;
    this.numero_etudiant = num_etudiant;
    this.dateNaissance = date_naissance;
    
    this.presenter = function () {
        console.log("Je suis " + this.prenom + " " + this.nom + " " +
        "de numéro " + this.numero_etudiant);
    }
    
    this.age = function () {
        var date = new Date(this.dateNaissance[2],
            this.dateNaissance[1]-1,this.dateNaissance[0])

        var actuelle = new Date().getTime();
        var Naissance = date.getTime();

        var age = Math.floor((actuelle - Naissance) /31536000000);

        console.log(this.prenom  + " " + this.nom + " a " +age+ " ans");

    }
}

var etu1 = new Etudiant("Rubio", "Anthony", "00001", [26,9,1997]);
etu1.presenter();
etu1.age();

var etu2 = new Etudiant("Cassar", "Adrien", "00002", [10,11,1998]);
etu2.presenter();
etu2.age();