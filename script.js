// 1 — Corriger les déclarations de variables

var animal = 'monkey'; 
var monkey = 'animal'; 
var x= 15; 
var y =10; 
var str = 'y3ni?'; 
var bln = false; 
var isTenEven = 10 % 2 ;

// 2 — Créer et combiner des variables

var firstName = "youssef"

var lastName = "wargui"

var fullName = firstName + " " + lastName

//3 — Fonction compteur

var count = 0 
function counter() {
  count += 1;        // avec l'aide de chatGPT
  return count;
}
counter()  

//4 — Déclaration et utilisation des variables

var monAge = 26
// Que se passe-t-il si on utilise une variable non déclarée ?
// undefined

// 5 — Types de variables

var nom = "youssef"
(typeof nom)
var bln = true
(typeof bln)
var nombre = 10
(typeof nombre)

// 6 — Calcul simple

function sumTwoNumbers(n1 , n2) {
    var result = n1 + n2
    return result
}
sumTwoNumbers()

// 7 — Calcul du prix avec taxe

function priceWithTax(price , tax) {
  var taxAmount = price * (tax / 100)
  var total =  price + taxAmount
   return total
}
priceWithTax()
