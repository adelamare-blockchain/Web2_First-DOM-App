// Supprimer id 'a-supprimer
document.querySelector('#a-supprimer').remove();

// Créer élément
let header = document.createElement('header');
let menu = document.createElement('div');
let p = document.createElement('p');

// Personnaliser
header.textContent = 'Bienvenue'
header.style.backgroundColor = '#e3b04b';
header.style.color = 'white';
header.style.padding = '30px';
header.style.fontSize = '3em';
header.style.textAlign = 'center';

menu.innerHTML = "<a href='#'>Accueil</a> / <a href='#'>Une autre page</a>";
menu.style.backgroundColor = '#f1d6ab';
menu.style.padding = '15px';

p.textContent = 'Ceci est un paragraphe créé avec Javascript !';
p.style.padding = "15px";

// Ajouter
document.body.append(header, menu, p);



console.log(header);
console.log(menu);
console.log(p);
console.log(document.body);

// document.querySelector('#a-supprimer').remove();

// let header = document.createElement('header');
// document.body.prepend(header);
// header.innerHTML = '<header style="font-weight: normal", "font-color: white">Bienvenue</header>'
// header.style.backgroundColor = '#e3b04b';
// header.style.textAlign = 'center';


// let sousHeader = document.createElement('div');
// document.body.append(sousHeader);
// sousHeader.innerHTML = '<div style="font-weight: normal">Accueil / Une autre page !</div>'
// sousHeader.style.backgroundColor = '#f1d6ab';

// let p = document.createElement('p');
// document.body.append(p);
// p.textContent = 'Ceci est un paragraphe créé avec Javascript !';

// console.log(header);
// console.log(sousHeader);
// console.log(p);
// console.log(document.body);