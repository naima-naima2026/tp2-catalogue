const produits = [
    { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
    { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
    { id: 3, nom: "Ecran", categorie: "Informatique", prix: 900, stock: 0 },
    { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];
console.log("=== Catalogue des produits ===");

produits.forEach((produit) => {
    console.log(produit.nom, "-", produit.prix, "MAD");
});
console.log("=== Produits disponibles ===");

const disponibles = produits.filter((produit) => {
    return produit.stock > 0;
});

console.log(disponibles);

console.log("Nombre de produits disponibles :", disponibles.length);
console.log("=== Valeur totale du stock ===");

const valeurStock = produits.reduce((total, produit) => {
    return total + (produit.prix * produit.stock);
}, 0);

console.log("Valeur totale :", valeurStock, "MAD");console.log("=== Produit le moins cher ===");

if (disponibles.length === 0) {
    console.log("Aucun produit disponible");
} else {
    const moinsCher = disponibles.reduce((min, produit) => {
        return produit.prix < min.prix ? produit : min;
    });

    console.log("Produit :", moinsCher.nom);
    console.log("Prix :", moinsCher.prix, "MAD");
}
console.log("=== Resume du catalogue ===");

const resume = produits.map((produit) => {
    return `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unites`;
});

console.log(resume);
function estValide(produit) {
    return Number.isFinite(produit.prix) &&
           Number.isFinite(produit.stock) &&
           produit.prix >= 0 &&
           produit.stock >= 0;
}

console.log("=== Verification des produits ===");

produits.forEach((produit) => {
    console.log(produit.nom, estValide(produit));
});

 if (disponibles.length > 0) {
    const { nom, prix } = disponibles.reduce((min, produit) => {
        return produit.prix < min.prix ? produit : min;
    });

    console.log("Nom :", nom);
    console.log("Prix :", prix);
}