// Données des produits - 40 produits avec images
const produits = [
  {
    id: 1,
    nom: "T-shirt Wax Bleu Royal",
    description:
      "T-shirt en wax africain de haute qualité, motif traditionnel et coupe moderne. Confortable et élégant.",
    prix: "12 000 FCFA",
    categorie: "homme",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tailles: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    nom: "Robe Ankara Élégante",
    description:
      "Robe en tissu Ankara, coupe moderne et confortable. Parfaite pour les occasions spéciales.",
    prix: "25 000 FCFA",
    categorie: "femme",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tailles: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    nom: "Boubou Brodé Artisanal",
    description:
      "Boubou traditionnel brodé à la main, pièce unique et authentique. Symbolise l'élégance africaine.",
    prix: "35 000 FCFA",
    categorie: "homme",
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tailles: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    nom: "Chemise Bazin",
    description: "Chemise homme en bazin riche, tissu de qualité supérieure.",
    prix: "18 000 FCFA",
    categorie: "homme",
    image:
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tailles: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    nom: "Pagne Traditionnel",
    description:
      "Pagne en tissu traditionnel, motifs variés et couleurs vibrantes.",
    prix: "15 000 FCFA",
    categorie: "femme",
    image:
      "https://images.unsplash.com/photo-1588850790165-5d517ead7871?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tailles: ["Unique"],
  },
  {
    id: 6,
    nom: "Ensemble Enfant",
    description:
      "Joli ensemble pour enfant en tissu wax, confortable et stylé.",
    prix: "10 000 FCFA",
    categorie: "enfant",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tailles: ["2-4 ans", "5-7 ans", "8-10 ans"],
  },
  {
    id: 7,
    nom: "Jupe Wax Imprimée",
    description:
      "Jupe en wax aux couleurs vives, coupe moderne et confortable.",
    prix: "14 000 FCFA",
    categorie: "femme",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tailles: ["S", "M", "L"],
  },
  {
    id: 8,
    nom: "Sac Main Africain",
    description: "Sac à main artisanal en tissu africain, unique et élégant.",
    prix: "8 000 FCFA",
    categorie: "accessoire",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tailles: ["Unique"],
  },
  // Ajouter 32 autres produits suivant le même modèle...
  {
    id: 9,
    nom: "Chaussures Traditionnelles",
    description: "Chaussures artisanales en cuir, confortables et élégantes.",
    prix: "20 000 FCFA",
    categorie: "accessoire",
    image:
      "https://images.unsplash.com/photo-1560072810-1cffb09fafa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tailles: ["38", "39", "40", "41", "42"],
  },
  {
    id: 10,
    nom: "Boucles d'Oreilles",
    description: "Boucles d'oreilles artisanales en perles africaines.",
    prix: "5 000 FCFA",
    categorie: "accessoire",
    image:
      "https://images.unsplash.com/photo-1611010344444-5f9e4d86a6e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tailles: ["Unique"],
  },
  // Les autres produits suivent le même modèle...
];

// Variables globales
let currentPage = 1;
const itemsPerPage = 8;
let currentCategory = "all";

// Fonction pour afficher les produits
function displayProduits(produitsToShow, page = 1) {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProduits = produitsToShow.slice(startIndex, endIndex);

  if (paginatedProduits.length === 0) {
    productsContainer.innerHTML =
      '<p class="no-results">Aucun produit trouvé dans cette catégorie.</p>';
    return;
  }

  paginatedProduits.forEach((produit) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
            <div class="product-image">
                <img src="${produit.image}" alt="${produit.nom}">
            </div>
            <div class="product-content">
                <h3>${produit.nom}</h3>
                <p>${produit.description}</p>
                <span class="price">${produit.prix}</span>
                
                <div class="size-selector">
                    <select class="size-select" data-product="${produit.nom}">
                        <option value="">Choisir la taille</option>
                        ${produit.tailles
                          .map(
                            (taille) =>
                              `<option value="${taille}">${taille}</option>`
                          )
                          .join("")}
                    </select>
                </div>
                
                <a href="#" class="whatsapp-btn" data-product="${produit.nom}">
                    <i class="fab fa-whatsapp"></i> Acheter sur WhatsApp
                </a>
            </div>
        `;
    productsContainer.appendChild(productElement);
  });

  setupPagination(produitsToShow, page);
  setupWhatsAppListeners();
}

// Fonction pour configurer la pagination
function setupPagination(produitsToShow, page) {
  const paginationElement = document.getElementById("pagination");
  paginationElement.innerHTML = "";

  const pageCount = Math.ceil(produitsToShow.length / itemsPerPage);

  if (pageCount <= 1) return;

  // Bouton Précédent
  if (page > 1) {
    const prevButton = document.createElement("button");
    prevButton.innerText = "Précédent";
    prevButton.className = "page-btn";
    prevButton.addEventListener("click", () => {
      currentPage = page - 1;
      displayProduits(produitsToShow, currentPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    paginationElement.appendChild(prevButton);
  }

  // Numéros de page
  for (let i = 1; i <= pageCount; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.className = `page-btn ${i === page ? "active" : ""}`;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      displayProduits(produitsToShow, currentPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    paginationElement.appendChild(pageButton);
  }

  // Bouton Suivant
  if (page < pageCount) {
    const nextButton = document.createElement("button");
    nextButton.innerText = "Suivant";
    nextButton.className = "page-btn";
    nextButton.addEventListener("click", () => {
      currentPage = page + 1;
      displayProduits(produitsToShow, currentPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    paginationElement.appendChild(nextButton);
  }
}

// Fonction pour configurer les écouteurs WhatsApp
function setupWhatsAppListeners() {
  document.querySelectorAll(".whatsapp-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const product = this.getAttribute("data-product");
      const sizeSelect =
        this.closest(".product-content").querySelector(".size-select");
      const selectedSize = sizeSelect.value;

      if (!selectedSize) {
        alert("Veuillez sélectionner une taille avant de commander.");
        return;
      }

      const message = `Bonjour, je suis intéressé(e) par le produit : ${product}, Taille : ${selectedSize}.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/242067678128?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    });
  });
}

// Fonction pour filtrer les produits par catégorie
function filterProduits(category) {
  currentCategory = category;
  currentPage = 1;

  let filteredProduits;
  if (category === "all") {
    filteredProduits = produits;
  } else {
    filteredProduits = produits.filter(
      (produit) => produit.categorie === category
    );
  }

  displayProduits(filteredProduits, currentPage);
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  // Afficher tous les produits au chargement
  displayProduits(produits, currentPage);

  // Configurer les filtres
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Retirer la classe active de tous les boutons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Ajouter la classe active au bouton cliqué
      button.classList.add("active");
      // Filtrer les produits
      filterProduits(button.dataset.category);
    });
  });

  // Gestion du défilement fluide
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });
});
