function upDate(previewPic) {
  // Récupérer l'élément avec l'ID "image"
  const imageDiv = document.getElementById("image");

  // Mettre à jour l'arrière-plan avec l'URL de l'image
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;

  // Mettre à jour le texte avec l'attribut "alt" de l'image
  imageDiv.innerText = previewPic.alt;
}

function unDo() {
  // Récupérer l'élément avec l'ID "image"
  const imageDiv = document.getElementById("image");

  // Réinitialiser l'arrière-plan
  imageDiv.style.backgroundImage = "none";

  // Réinitialiser le texte
  imageDiv.innerText = "Hover over an image below to display here";
}
