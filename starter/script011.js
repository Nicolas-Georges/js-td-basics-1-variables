/*****************************
 * 11 - Priorité des opérateurs
 */

// Opérateurs multiples
// 1. Utilisez les opérateurs +, *, et / pour effectuer une opération mathématique complexe. Affichez le résultat.
const operation = 2 + 222 * 1209 / 3;
console.log(operation)
// Groupement
// 2. Créez une expression mathématique qui nécessite le groupement des opérations. Utilisez des parenthèses pour clarifier l'ordre des opérations. Affichez le résultat.
const operation2 = (2 + 222) * (1209 / 3);
console.log(operation2)
// Affectations multiples
// 3. Déclarez deux variables x et y. Utilisez des affectations multiples pour leur donner des valeurs. Par exemple, x = 5 et y = 10. Affichez les valeurs de x et y.
const x = 5
const y = 10

console.log(x,y)
// Autres opérateurs
// 4. Utilisez un opérateur de comparaison (comme >, <, ==, etc.) pour comparer les valeurs de deux variables et affichez le résultat.

if (y < x ) {
    console.log("x est plus grand que y")
}

else if (y > x ) {
    console.log("y est plus grand que x")
}


else  {
    console.log("y et x sont de meme valeur" )
}