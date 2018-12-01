var Personne = {
    nom : "",
    prenom : "",
    dateNaissance : [1,1,1997],
    taille : "",

    init : function (nom, prenom, dateNaissance, taille) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.taille = taille;
    },

    decrire: function () { console.log(this.nom + " " + this.prenom + " "
                        + this.dateNaissance + " " + this.taille+"cm");},

    direAge: function () {
        var date = new Date(this.dateNaissance[2],
            this.dateNaissance[1]-1,this.dateNaissance[0])

        var actuelle = new Date().getTime();
        var Naissance = date.getTime();

        console.log(Math.floor((actuelle - Naissance) /31536000000)+" ans");
    }

};


var Professeur = Object.create(Personne);
Professeur.email = "";

Professeur.initProfesseur = function (nom, prenom, dateNaissance, taille, mail) {
    this.init(nom, prenom, dateNaissance, taille);
    this.email = mail;
}

Professeur.decrireProfesseur = function () {
    this.decrire();
    console.log(" " + this.email);
}

var prof1 = Object.create(Professeur);
prof1.initProfesseur("Guibert", "Olivier", [12,10,1962], 165, "guibert@mail.com");
prof1.decrireProfesseur();
prof1.direAge();

var prof2 = Object.create(Professeur);
prof2.initProfesseur("Marty", "Sidonie", [20,9,1970], 173, "marty@mail.com");
prof2.decrireProfesseur();
prof2.direAge();