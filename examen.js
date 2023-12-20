let getNomComplet = () => {
  let monNom = "Flores Milian";
  let monPrenom = "Kevin";
  return {
    nom: monNom,
    prenom: monPrenom,
  };
};

let getDeclaration = (data) => {
  return data.nom + " - " + data.prenom;
};

let afficherDeclaration = () => {
  const data = getNomComplet();
  const declaration = getDeclaration(data);
  document.getElementById("resultat").innerHTML = declaration;
};
