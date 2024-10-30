let inp = document.getElementById("Jaime"); // bouton "J'aime"
let likeCount = document.getElementById("like_count"); // compteur "J'aime"
let cpt = 0; // compteur initialisé à 0
let liked = false; // indique si le bouton est déjà "aimé" ou non

inp.addEventListener("click", function() {
    if (liked) {
        // Si déjà "aimé", on décrémente
        cpt -= 1;
        liked = false;
    } else {
        // Si pas encore "aimé", on incrémente
        cpt += 1;
        liked = true;
    }
    
    // Met à jour l'affichage du compteur
    likeCount.textContent = cpt;
});


if ("Notification" in window) {
    // Demander la permission à l'utilisateur
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        // Créer et afficher la notification
        const notification = new Notification("Hello!", {
          body: "Ceci est une notification test en JavaScript.",
          icon: "https://example.com/icon.png" // Vous pouvez spécifier une URL d'icône
        });
  
        // Ajouter un événement si vous souhaitez effectuer une action au clic
        notification.onclick = () => {
          window.open("https://example.com"); // Ouvrir une page au clic
        };
      } else {
        console.log("Permission de notification refusée.");
      }
    });
  } else {
    console.log("Les notifications ne sont pas supportées dans ce navigateur.");
  }
  