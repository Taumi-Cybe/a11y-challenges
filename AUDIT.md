# AUDIT.md : à compléter

Pour chaque ligne, retrouve le problème correspondant dans `src/App.tsx` / `src/App.css`
et remplis les 3 colonnes. Il y a **6 problèmes volontaires** dans ce starter.

| # | Problème trouvé (où, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui |
|---|------------------------------|-------------------------------|----------------------------------------|
| 1 | `<img src="/hero.jpg" />` : l'image principale n'a pas d'attribut `alt` | P (1.1.1 Contenu non textuel) | Un lecteur d'écran ne peut pas transmettre ce que montre l'image, au mieux il lit le nom du fichier. **Pour qui :** personnes aveugles ou malvoyantes. |
| 2 | Titres : le `<h1>` est suivi directement d'un `<h3>`, il manque le `<h2>` | R (structure, lié au 1.3.1 Information et relations) | La hiérarchie des titres sert de plan de la page ; un niveau manquant fausse la navigation de titre en titre. **Pour qui :** utilisateurs de lecteur d'écran. |
| 3 | `<div className="see-more" onClick>` : le « Voir plus » est un `<div>` cliquable au lieu d'un `<button>` | O (2.1.1 Clavier, 4.1.2 Nom, rôle et valeur) | Impossible à atteindre avec Tab ou à activer avec Entrée/Espace, et annoncé comme du texte, pas comme un bouton. **Pour qui :** personnes qui naviguent au clavier (handicap moteur) et utilisateurs de lecteur d'écran. |
| 4 | Bloc `.carousel` : le bandeau newsletter défile sans bouton pour le mettre en pause ni le fermer | O (2.2.2 Mettre en pause, arrêter, masquer) | Le mouvement permanent distrait et empêche de lire le reste de la page, sans moyen de l'arrêter. **Pour qui :** personnes avec troubles de l'attention, dyslexie, basse vision, troubles vestibulaires. |
| 5 | Les 3 liens en bas de page ont tous le texte « cliquez ici » | U (2.4.4 Fonction du lien selon le contexte) | Quand un lecteur d'écran liste les liens de la page, on entend trois fois « cliquez ici » sans savoir où chacun mène. **Pour qui :** utilisateurs de lecteur d'écran, et personnes avec troubles cognitifs. |
| 6 | Pastilles `dot-red` / `dot-green` à côté des articles : le statut « annulé » ou « publié » n'est indiqué que par la couleur | P (1.4.1 Utilisation de la couleur) | Sans distinguer le rouge du vert, l'information est perdue ; il faut aussi un texte ou une icône. **Pour qui :** personnes daltoniennes, malvoyantes, ou sur écran noir et blanc. |

> Rappel : P = Perceptible, O = Opérable, U = Utilisable (Compréhensible), R = Robuste.