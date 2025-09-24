// Fonction pour le défilement fluide
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Fonction pour démarrer un niveau
function startNiveau(niveau) {
  const niveaux = {
    1: "Les Bases Indispensables",
    2: "La Vie Quotidienne",
    3: "Conversations Approfondies",
  };

  // Animation de confirmation
  const button = event.target;
  const originalText = button.textContent;

  button.textContent = "Chargement...";
  button.disabled = true;

  setTimeout(() => {
    alert(
      `Bienvenue au ${niveaux[niveau]} !\n\nCette fonctionnalité sera bientôt disponible.`
    );
    button.textContent = originalText;
    button.disabled = false;

    // Ici on redirigerait vers la page du niveau
    // window.location.href = `niveau-${niveau}.html`;
  }, 1000);
}

// Fonction pour sélectionner un profil
function selectProfil(profil) {
  const profils = {
    commercant: "Commerçant/Marchand",
    etudiant: "Étudiant",
    professionnel: "Professionnel",
    parent: "Parent/Famille",
    chauffeur: "Chauffeur/Transport",
    sante: "Santé",
  };

  // Animation de confirmation
  const button = event.target;
  const originalText = button.textContent;

  button.textContent = "Chargement...";
  button.disabled = true;

  setTimeout(() => {
    alert(
      `Contenu pour ${profils[profil]} en préparation !\n\nVous aurez bientôt accès au vocabulaire spécifique pour votre profil.`
    );
    button.textContent = originalText;
    button.disabled = false;

    // Ici on redirigerait vers la page du profil
    // window.location.href = `profil-${profil}.html`;
  }, 1000);
}

// Animation au scroll
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".niveau-card, .profil-card");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Initialisation des animations
document.addEventListener("DOMContentLoaded", function () {
  // Préparation des éléments pour l'animation
  const animatedElements = document.querySelectorAll(
    ".niveau-card, .profil-card"
  );
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Délai pour que les styles s'appliquent
  setTimeout(() => {
    handleScrollAnimations();
  }, 100);
});

// Écouteur de scroll
window.addEventListener("scroll", handleScrollAnimations);

// Gestion du header au scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "#fff";
    header.style.backdropFilter = "none";
  }
});

// Message de bienvenue
console.log(`
🎯 Bienvenue sur AnglaisCongo !
   
📚 Objectif : Aider les Congolais à maîtriser l'anglais pratique
💡 Fonctionnalités à venir :
   - Audio pour la prononciation
   - Exercices interactifs  
   - Proverbes et culture
   - Vocabulaire thématique

🚀 Le site est en développement actif !
`);
