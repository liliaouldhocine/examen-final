let getNomComplet = () => {
  let monNom = "Djerroud";
  let monPrenom = "Nabil";
  return {
    nom: monNom,
    prenom: monPrenom,
  };
};

let getDeclaration = (data) => {
  return data.nom + " " + data.prenom;
};

let afficherDeclaration = () => {
  const data = getNomComplet();
  const declaration = getDeclaration(data);
  document.getElementById("resultat").innerHTML = declaration;
};
