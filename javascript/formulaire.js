function VerificationFormulaire() {
alertes.innerHTML="";
var mesalertes="<ul>";
var acceptation=true;
var nom=document.forms["formulaire"].nom.value;
var prenom=document.forms["formulaire"].prenom.value;
var email=document.forms["formulaire"].email.value;
var adresse=document.forms["formulaire"].adresse.value;
var telephone=document.forms["formulaire"].telephone.value;
var ville=document.forms["formulaire"].ville.value;
var motdepasse=document.forms["formulaire"].motdepasse.value;
var motdepasse1=document.forms["formulaire"].motdepasse1.value;
var basique=document.getElementsByName('abonnement')['0'].checked;
var premium=document.getElementsByName('abonnement')['1'].checked;
var prestige=document.getElementsByName('abonnement')['2'].checked;
var homme=document.getElementsByName('sexe')['0'].checked;
var femme=document.getElementsByName('sexe')['1'].checked;
var reg = /^[A-Z][A-Za-z-_ ]{1,}$/;
var regmail= /^[A-Za-z0-9]{2,}@[a-z]{3,6}\.[a-z]{2,6}$/;
var regadresse=/^[0-9]{2,3}[ ][a-zA-Z _-]{3,}$/;
var regtelephone=/^0[1-9]([ \.-]([0-9]{2})){4}$/;
var regville= /^[A-Z][a-z _-]{2,}$/;
if (reg.test(nom)) {
}
else {
  acceptation=false;
   mesalertes+="<li> &#8658; Le nom que vous avez entré n'est pas correct (Un nom doit commencer par une lettre majuscule et comporter au moins  2 lettres )</li>";
}

if (reg.test(prenom)) {

}
else {
   acceptation=false;
   mesalertes+="<li> &#8658; Le prénom que vous avez entré n'est pas correct (Un nom doit commencer par une lettre majuscule et comporter au moins  2 lettres )</li>";
}

if(regmail.test(email)){

}
else {
   acceptation=false;
   mesalertes+="<li>&#8658; L'email que vous avez entré n'est pas valide </li>";
}

if (regadresse.test(adresse)) {

  }
  else {
   acceptation=false;
   mesalertes+="<li>&#8658; L'adresse que vous avez entrée n'est pas correctes (Un adresse est du format (N° nom de la rue))</li>"; 
  }
  
if (regtelephone.test(telephone)) {
    
    }
else {
   acceptation=false;
    mesalertes+="<li>&#8658; Le numéro de téléphone entré n'est pas valide (Un N° doit être de la forme 0X-XX-XX-XX-XX)</li>";
  }
  
  if (regville.test(ville)) {
  
}
else {
     acceptation=false;
   mesalertes+="<li>&#8658; Le nom de la ville est incorrecte </li>";
}

if (motdepasse != motdepasse1) {
  acceptation=false;
   mesalertes+="<li>&#8658; Les deux mots de passe que vous avez entrés ne sont pas identiques</li>";
}
else {

}

if(basique!=true && premium!=true && prestige!=true)
  {
   acceptation=false;
    mesalertes+="<li>&#8658; Vous devez choisir une des formules d'abonnement </li>";
  }
  
  if (homme!=true && femme!=true) {
   acceptation=false;
   mesalertes+="<li>&#8658; Vous devez indiquer votre sexe </li>";
  } 
  alertes.innerHTML+=mesalertes;
if (acceptation==true) {
    alertes.innerHTML+="<ul><li>&#10003; Formulaire bien rempli et envoyé </li></ul> ";
  }
  
}



function init() {
    document.forms["formulaire"].boiteRegion.selectedIndex=0;
    document.forms["formulaire"].boiteDep.selectedIndex=0;
}



function choix()
{
    var j;
    var i = document.forms["formulaire"].boiteRegion.selectedIndex;
    if (i == 0)
        for(j = 1; j <document.forms["formulaire"].boiteDep.length; j++)
            document.forms["formulaire"].boiteDep.options[j].text="";
        
    
    else{
    switch (i){
        case 1 : var text = new Array("Ratoma", "Dixin", "Matam", "Matoto");
            break;
        case 2 : var text = new Array("Telemele", "Garafiri", "Boke", "tamagali");
            break;
        case 3 : var text = new Array("Mitty", "Parawy", "Golody", "Lebewel");
            break;
    }

    for(j = 0; j<text.length; j++)
        {   
            document.forms["formulaire"].boiteDep.options[j+1].text=text[j];    
            
        }
    }
    document.forms["formulaire"].boiteDep.selectedIndex=0;
}



function choisir(){
    if (document.forms["formulaire"].boiteRegion.selectedIndex>0 && document.forms["formulaire"].boiteDep.selectedIndex>0)
    {
        var mes="Vous avez choisi la région : "+document.forms["formulaire"].boiteRegion.options[document.forms["formulaire"].boiteRegion.selectedIndex].text;
        mes+="\t et le département "+document.forms["formulaire"].boiteDep.options[document.forms["formulaire"].boiteDep.selectedIndex].text;
        document.getElementById("result").innerHTML=mes;
    }
}



function valider ( )
{
    if ( document.formulaire.Prenom.value == "" )
    {
        alert ( "Veuillez entrer votre prénom !" );
        valid = false;
return valid;
    }
    if ( document.formulaire.Nom.value == "" )
    {
        alert ( "Veuillez entrer votre nom !" );
        valid = false;
return valid;
    }

    if ( document.formulaire.Courriel.value == "" )
    {
        alert ( "Veuillez entrer votre courriel !" );
        valid = false;
return valid;
    }

    if ( document.formulaire.Telephone.value == "" )
    {
        alert ( "Veuillez entrer votre numéro de téléphone !" );
        valid = false;
return valid;
    }
    if ( document.formulaire.Adresse.value == "" )
    {
        alert ( "Veuillez entrer votre adresse !" );
        valid = false;
return valid;
    }
}




function envoi() {
 // par défaut, pas d'envoi
 document.formu.action="";
 // recherche de @ dans l'adresse
 var address=window.document.formu.adr.value;
 var pos=address.indexOf("@");
 if (address=="") {
  alert("Vous devez donner une adresse e-mail.");
 }
 else {
  if (pos==-1 || pos==0 || pos==address.length-1) {
   alert("Une adresse e-mail a le format nom@domaine");
  }
  else // tout va bien, on envoie le formulaire
   document.formu.action='mailto:mamdia94@yahoo.fr?subject="Cours JavaScript"';
 }
}
