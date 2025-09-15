// Données des plats - 50 plats avec images
const plats = [
  {
    id: 1,
    nom: "Poulet Braisé",
    description:
      "Poulet mariné aux épices et grillé au feu de bois, servi avec alloco et sauce piquante.",
    prix: "5 000 FCFA",
    categorie: "plat",
    image: "./images/poulet_braiser.jpg",
    icon: "fas fa-drumstick-bite",
  },
  {
    id: 2,
    nom: "Poulet à la Moambé",
    description:
      "Plat traditionnel à base de poulet cuit dans une sauce riche à la noix de palme.",
    prix: "6 500 FCFA",
    categorie: "plat",
    image: "./images/poulet_moambe.jpg",
    icon: "fas fa-fish",
  },
  {
    id: 3,
    nom: "Foufou et Sauce Feuilles",
    description:
      "Foufou de manioc accompagné d'une délicieuse sauce aux feuilles de manioc.",
    prix: "4 000 FCFA",
    categorie: "plat",
    image: "./images/foufou_sauce.jpg",
    icon: "fas fa-utensil-spoon",
  },
  {
    id: 4,
    nom: "Poulet aux Arachides",
    description:
      "Poulet cuit dans une sauce onctueuse à base d'arachides, accompagné de riz.",
    prix: "5 500 FCFA",
    categorie: "plat",
    image: "./images/poulet_arachide.jpg",
    icon: "fas fa-mortar-pestle",
  },
  {
    id: 5,
    nom: "Saka-Saka",
    description:
      "Purée de feuilles de manioc accompagnée de poisson fumé et de riz.",
    prix: "4 500 FCFA",
    categorie: "plat",
    image: "./images/saka-saka.jpg",
    icon: "fas fa-bread-slice",
  },
  {
    id: 6,
    nom: "Brochettes de Boeuf",
    description:
      "Brochettes de bœuf marinées et grillées, servies avec du riz et de la sauce.",
    prix: "4 000 FCFA",
    categorie: "plat",
    image: "./images/brochette_boeufs.jpg",
    icon: "fas fa-cheese",
  },
  {
    id: 7,
    nom: "Poisson Braisé",
    description:
      "Poisson frais grillé au feu de bois, servi avec du riz et de la sauce tomate.",
    prix: "6 000 FCFA",
    categorie: "plat",
    image: "./images/poisson_braiser.jpg",
    icon: "fas fa-fish",
  },
  {
    id: 8,
    nom: "Riz Gras",
    description:
      "Riz cuit avec de la viande, des légumes et des épices, plat complet et savoureux.",
    prix: "3 500 FCFA",
    categorie: "plat",
    image: "./images/riz_gras.jpg",
    icon: "fas fa-utensils",
  },
  {
    id: 9,
    nom: "Poulet DG",
    description:
      "Poulet sauté avec des légumes et des plantains, plat de fête raffiné.",
    prix: "7 000 FCFA",
    categorie: "plat",
    image: "./images/poulet_dg.jpg",
    icon: "fas fa-drumstick-bite",
  },
  {
    id: 10,
    nom: "Poulet Koki",
    description:
      "Poulet cuit dans une sauce à base de purée de haricots, spécialité camerounaise.",
    prix: "5 500 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-drumstick-bite",
  },
  {
    id: 11,
    nom: "Beignets de Banane",
    description:
      "Beignets sucrés à la banane plantain, parfaits pour le petit-déjeuner.",
    prix: "1 500 FCFA",
    categorie: "entree",
    image:
      "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-cookie",
  },
  {
    id: 12,
    nom: "Accras de Morue",
    description: "Beignets salés à la morue, parfaits en entrée ou en encas.",
    prix: "2 000 FCFA",
    categorie: "entree",
    image:
      "https://images.unsplash.com/photo-1558961364-3a7400387c96?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-cookie",
  },
  {
    id: 13,
    nom: "Soupe de Poisson",
    description: "Soupe traditionnelle à base de poisson frais et de légumes.",
    prix: "3 500 FCFA",
    categorie: "entree",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensil-spoon",
  },
  {
    id: 14,
    nom: "Salade Africaine",
    description:
      "Salade fraîche avec avocat, tomates, oignons et vinaigrette maison.",
    prix: "2 500 FCFA",
    categorie: "entree",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-leaf",
  },
  {
    id: 15,
    nom: "Bouillon de Poisson",
    description: "Bouillon parfumé au poisson frais et aux épices locales.",
    prix: "3 000 FCFA",
    categorie: "entree",
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensil-spoon",
  },
  {
    id: 16,
    nom: "Mango Juice",
    description: "Jus de mangue frais naturel, sans conservateurs.",
    prix: "1 500 FCFA",
    categorie: "boisson",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-glass-whiskey",
  },
  {
    id: 17,
    nom: "Jus de Bissap",
    description: "Jus d'hibiscus frais, rafraîchissant et naturel.",
    prix: "1 500 FCFA",
    categorie: "boisson",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-glass-whiskey",
  },
  {
    id: 18,
    nom: "Jus de Gingembre",
    description: "Jus de gingembre frais, tonifiant et revigorant.",
    prix: "1 500 FCFA",
    categorie: "boisson",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-glass-whiskey",
  },
  {
    id: 19,
    nom: "Banane Plantain Frite",
    description:
      "Bananes plantain mûres frites à l'huile, croustillantes à l'extérieur et fondantes à l'intérieur.",
    prix: "1 500 FCFA",
    categorie: "accompagnement",
    image:
      "https://images.unsplash.com/photo-1570194065657-4d2e5c05a849?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensils",
  },
  {
    id: 20,
    nom: "Riz Blanc",
    description: "Riz grain long cuit à la vapeur, léger et parfumé.",
    prix: "1 000 FCFA",
    categorie: "accompagnement",
    image:
      "https://images.unsplash.com/photo-1598866592122-6e4efb6bad2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensils",
  },
  {
    id: 21,
    nom: "Pâtisseries Africaines",
    description: "Assortiment de pâtisseries locales, douces et savoureuses.",
    prix: "2 500 FCFA",
    categorie: "dessert",
    image:
      "https://images.unsplash.com/photo-1555507036-ab794f24d6c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-birthday-cake",
  },
  {
    id: 22,
    nom: "Fruits Frais de Saison",
    description:
      "Assortiment de fruits frais de saison, coupés et présentés avec élégance.",
    prix: "2 000 FCFA",
    categorie: "dessert",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-apple-alt",
  },
  {
    id: 23,
    nom: "Thé à la Menthe",
    description:
      "Thé vert à la menthe fraîche, traditionnel et rafraîchissant.",
    prix: "1 000 FCFA",
    categorie: "boisson",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-mug-hot",
  },
  {
    id: 24,
    nom: "Café Touba",
    description: "Café sénégalais parfumé aux épices, fort et aromatique.",
    prix: "1 000 FCFA",
    categorie: "boisson",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-coffee",
  },
  {
    id: 25,
    nom: "Eau Minérale",
    description: "Eau minérale naturelle, 50cl.",
    prix: "500 FCFA",
    categorie: "boisson",
    image:
      "https://images.unsplash.com/photo-1548839144-651a9d3ac341?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-tint",
  },
  {
    id: 26,
    nom: "Sauce Gombo",
    description:
      "Sauce à base de gombo, visqueuse et parfumée, servie avec du riz.",
    prix: "3 000 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1565299585323-38174c739b6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensil-spoon",
  },
  {
    id: 27,
    nom: "Poulet Yassa",
    description:
      "Poulet mariné au citron et aux oignons, spécialité sénégalaise.",
    prix: "6 000 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d9d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-drumstick-bite",
  },
  {
    id: 28,
    nom: "Poisson Capitaine",
    description: "Poisson capitaine grillé, servi avec de la sauce et du riz.",
    prix: "7 000 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1599153281416-2cee65ca52a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-fish",
  },
  {
    id: 29,
    nom: "Ragout de Viande",
    description: "Ragoût de viande mijoté avec des légumes et des épices.",
    prix: "5 500 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-drumstick-bite",
  },
  {
    id: 30,
    nom: "Plat Végétarien",
    description: "Assortiment de légumes locaux cuisinés avec des épices.",
    prix: "4 000 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-carrot",
  },
  {
    id: 31,
    nom: "Alloco",
    description: "Bananes plantain frites, servies avec une sauce piquante.",
    prix: "1 500 FCFA",
    categorie: "accompagnement",
    image:
      "https://images.unsplash.com/photo-1570194065657-4d2e5c05a849?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensils",
  },
  {
    id: 32,
    nom: "Igname Frit",
    description: "Igname coupée en dés et frite, croustillant à l'extérieur.",
    prix: "2 000 FCFA",
    categorie: "accompagnement",
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensils",
  },
  {
    id: 33,
    nom: "Mafé",
    description:
      "Plat à base de viande et de sauce arachide, servi avec du riz.",
    prix: "5 500 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1555939597-eecc0c6cbd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensil-spoon",
  },
  {
    id: 34,
    nom: "Sauce Feuille de Patate",
    description:
      "Sauce à base de feuilles de patate douce, servie avec du foufou.",
    prix: "3 500 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensil-spoon",
  },
  {
    id: 35,
    nom: "Poulet Kedjenou",
    description: "Poulet cuit à l'étouffée avec des légumes et des épices.",
    prix: "6 000 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-drumstick-bite",
  },
  {
    id: 36,
    nom: "Bissap Frappé",
    description: "Jus d'hibiscus frais servi frappé avec des glaçons.",
    prix: "2 000 FCFA",
    categorie: "boisson",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-glass-whiskey",
  },
  {
    id: 37,
    nom: "Gnamakoudji",
    description: "Boisson rafraîchissante à base de gingembre et d'ananas.",
    prix: "1 500 FCFA",
    categorie: "boisson",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-glass-whiskey",
  },
  {
    id: 38,
    nom: "Bouillie de Mil",
    description:
      "Bouillie traditionnelle à base de mil, sucrée et nourrissante.",
    prix: "1 500 FCFA",
    categorie: "petit-dejeuner",
    image:
      "https://images.unsplash.com/photo-1472025834801-2e83ec411c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-bowl",
  },
  {
    id: 39,
    nom: "Beignets de Haricot",
    description:
      "Beignets salés à base de haricots, parfaits pour le petit-déjeuner.",
    prix: "1 000 FCFA",
    categorie: "petit-dejeuner",
    image:
      "https://images.unsplash.com/photo-1558961364-3a7400387c96?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-cookie",
  },
  {
    id: 40,
    nom: "Pain Africain",
    description: "Pain traditionnel fait maison, moelleux et parfumé.",
    prix: "1 000 FCFA",
    categorie: "accompagnement",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-bread-slice",
  },
  {
    id: 41,
    nom: "Sauce Arachide",
    description: "Sauce onctueuse à base d'arachide, servie avec du riz.",
    prix: "3 000 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1555939597-eecc0c6cbd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensil-spoon",
  },
  {
    id: 42,
    nom: "Poulet Nyembwe",
    description:
      "Poulet cuit dans une sauce à la noix de palme, spécialité gabonaise.",
    prix: "6 500 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-drumstick-bite",
  },
  {
    id: 43,
    nom: "Poisson Fumé",
    description:
      "Poisson fumé traditionnel, servi avec de la sauce et du manioc.",
    prix: "5 000 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-fish",
  },
  {
    id: 44,
    nom: "Sauce Tomate",
    description:
      "Sauce tomate maison avec viande ou poisson, servie avec du riz.",
    prix: "3 500 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1555259979-ee1924df21da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensil-spoon",
  },
  {
    id: 45,
    nom: "Poulet Piri Piri",
    description: "Poulet mariné au piri piri, épicé et savoureux.",
    prix: "6 000 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1604503468506-8e6a6d0c5c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-drumstick-bite",
  },
  {
    id: 46,
    nom: "Attiéké",
    description: "Semoule de manioc fermentée, accompagnement traditionnel.",
    prix: "2 000 FCFA",
    categorie: "accompagnement",
    image:
      "https://images.unsplash.com/photo-1598866592122-6e4efb6bad2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensils",
  },
  {
    id: 47,
    nom: "Sauce Gombo avec Viande",
    description: "Sauce gombo épaisse avec des morceaux de viande tendre.",
    prix: "4 500 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1565299585323-38174c739b6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-utensil-spoon",
  },
  {
    id: 48,
    nom: "Poisson à l'Etouffée",
    description: "Poisson cuit à l'étouffée avec des légumes et des épices.",
    prix: "6 500 FCFA",
    categorie: "plat",
    image:
      "https://images.unsplash.com/photo-1599153281416-2cee65ca52a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-fish",
  },
  {
    id: 49,
    nom: "Bissap Gingembre",
    description: "Jus d'hibiscus infusé au gingembre, revigorant.",
    prix: "1 800 FCFA",
    categorie: "boisson",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-glass-whiskey",
  },
  {
    id: 50,
    nom: "Cocktail de Fruits Tropicaux",
    description: "Mélange de fruits tropicaux frais, sucré et rafraîchissant.",
    prix: "2 500 FCFA",
    categorie: "dessert",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: "fas fa-apple-alt",
  },
];

let currentPage = 1;
const itemsPerPage = 9;
let currentCategory = "all";

function displayPlats(platsToShow, page = 1) {
  const menuContainer = document.getElementById("menu-container");
  menuContainer.innerHTML = "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPlats = platsToShow.slice(startIndex, endIndex);

  if (paginatedPlats.length === 0) {
    menuContainer.innerHTML =
      '<p class="no-results">Aucun plat trouvé dans cette catégorie.</p>';
    return;
  }

  paginatedPlats.forEach((plat) => {
    const platElement = document.createElement("div");
    platElement.className = "menu-item";
    platElement.innerHTML = `
      
            <div class="menu-image">
                <img src="${plat.image}" alt="${plat.nom}"> 
            </div>
            <div class="menu-content">
                <h3>${plat.nom}</h3>
                <p>${plat.description}</p>
                <span class="price">${plat.prix}</span>
                <a href="https://wa.me/242067678128?text=Bonjour, je souhaite commander : ${encodeURIComponent(
                  plat.nom
                )}" class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Commander sur WhatsApp
                </a>
            </div>
        `;
    menuContainer.appendChild(platElement);
  });

  setupPagination(platsToShow, page);
}

// Fonction pour configurer la pagination
function setupPagination(platsToShow, page) {
  const paginationElement = document.getElementById("pagination");
  paginationElement.innerHTML = "";

  const pageCount = Math.ceil(platsToShow.length / itemsPerPage);

  if (pageCount <= 1) return;

  // Bouton Précédent
  if (page > 1) {
    const prevButton = document.createElement("button");
    prevButton.innerText = "Précédent";
    prevButton.className = "page-btn";
    prevButton.addEventListener("click", () => {
      currentPage = page - 1;
      displayPlats(platsToShow, currentPage);
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
      displayPlats(platsToShow, currentPage);
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
      displayPlats(platsToShow, currentPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    paginationElement.appendChild(nextButton);
  }
}

// Fonction pour filtrer les plats par catégorie
function filterPlats(category) {
  currentCategory = category;
  currentPage = 1;

  let filteredPlats;
  if (category === "all") {
    filteredPlats = plats;
  } else {
    filteredPlats = plats.filter((plat) => plat.categorie === category);
  }

  displayPlats(filteredPlats, currentPage);
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  // Afficher tous les plats au chargement
  displayPlats(plats, currentPage);

  // Configurer les filtres
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Retirer la classe active de tous les boutons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Ajouter la classe active au bouton cliqué
      button.classList.add("active");
      // Filtrer les plats
      filterPlats(button.dataset.category);
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
