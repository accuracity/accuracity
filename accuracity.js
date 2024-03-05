const map = document.getElementById('map');
const clickCoordinates = document.getElementById('click-coordinates');
const scoreLast = document.getElementById('last-score');
const scoreNb = document.getElementById('nb-score');
const scoreTotal = document.getElementById('total-score');
const scoreAverage = document.getElementById('average-score');
const scoreReset = document.getElementById("resetScore");
const targetInfo = document.getElementById('target-info');

let clickPoint = null;
let targetPoint = null;
let targetText = null;
let distanceText = null;
let randomCity = null;
let citiesList = null;
let gameOngoing = false;
let citiesIt = 0;
let lastScore = 0; //Score du dernier clic
let totalScore = 0; //Score total
let nbScore = 0; // Nombre de parties
let averageScore = 0; // Score moyen
let numberOfLinesToConsider = 22; // Le nombre de lignes à considérer (=difficulté) 22=préféectures de région, 96=préfectures, 326=sous-préfectures, 20=défi du jour
let isDefi = false;
let defiDate = "";
let diffText = ""

let scoreArray = [];
let clicHistory = [];
let textToCopy = "";
let top3 = [];
let flop3 = [];

  // Coordonnées GPS des 4 coins de l'image (à remplacer par les coordonnées réelles)
const topLeftGPS = { latitude: 52, longitude: -6 };
const topRightGPS = { latitude: 52, longitude: 10 };
const bottomLeftGPS = { latitude: 41, longitude: -6 };
const bottomRightGPS = { latitude: 41, longitude: 10 };
const width = 800;
const height = 800;
const offsetY = 105;

// IMage de fond
const img = new Image();
img.src = 'France_blank_1.svg';

img.onload = function() {
	//drawMapBackground();
}

document.addEventListener('DOMContentLoaded', function() {
    // Code JavaScript à exécuter une fois que la page est chargée
    //drawMapBackground();
});

defi.onclick = function() {
	startGame(true); //Défi
};

startGameButton.onclick = function() {
	startGame(false); //Pratique libre
};

scoreReset.onclick = function() {
	//Terminé
	stopGame();
};

map.addEventListener('click', function(event) {
if(gameOngoing)
{
	const mapRect = map.getBoundingClientRect();
	const x = event.clientX - mapRect.left;
	const y = event.clientY - mapRect.top;
	console.log(`Clic - X `+x+` / Y `+y);

	// Calcul des coordonnées GPS du point cliqué
	const gpsCoordinates = xyToGPS(x, y - offsetY, width, height, topLeftGPS, topRightGPS, bottomLeftGPS, bottomRightGPS);
	console.log(`Clic - Long `+gpsCoordinates.longitude+` / Lat `+gpsCoordinates.latitude);

  
	//Positionnement de la cible
	console.log(`Target - Long `+randomCity.longitude+` / Lat `+randomCity.latitude);
	const imageCoordinates = gpsToXY(randomCity.latitude, randomCity.longitude, width, height, topLeftGPS, topRightGPS, bottomLeftGPS, bottomRightGPS);
	const targetX = imageCoordinates.x;
	const targetY = offsetY + imageCoordinates.y;
	console.log(`Target - X `+imageCoordinates.x+` / Y `+imageCoordinates.y);
	
	//Calcul et affichage de la distance
	const distance = Math.trunc(calculateDistance(gpsCoordinates.latitude, gpsCoordinates.longitude, randomCity.latitude, randomCity.longitude));
	clickCoordinates.innerHTML = `Distance de `+randomCity.cityName+` (`+randomCity.department+`, `+randomCity.type+`): ` + distance +`km`;
	
	//Calcul du score
	coeff = 0;
	if(randomCity.type == `Capitale`) coeff = 4;
	if(randomCity.type == `Préfecture de région`) coeff = 3;
	if(randomCity.type == `Préfecture`) coeff = 2;
	if(randomCity.type == `Sous-préfecture`) coeff = 1;
	lastScore = distance * coeff;
	totalScore = totalScore + lastScore;
	nbScore = nbScore + 1;
	scoreLast.innerHTML = distance + `×` + coeff + `= `+lastScore+ ` – `+ getEvaluation(lastScore);
	scoreTotal.innerHTML = totalScore;
	scoreNb.innerHTML = nbScore + `/` + numberOfLinesToConsider;
	averageScore = Math.trunc(totalScore / nbScore);
	scoreAverage.innerHTML = averageScore + ` – `+ getEvaluation(averageScore);
	
	//Stocker le score
	scoreArray.push(lastScore);
	
	//Stocker l'essai
	clicHistory.push([x,y,imageCoordinates.x,imageCoordinates.y,distance,randomCity.cityName]);
	
	//Effacer la carte avant d'afficher le prochain point
	drawMapClear();
	
	//Afficher le clic, la cible & co
	drawMapClic(x,y,imageCoordinates.x,imageCoordinates.y,distance,randomCity.cityName);
	//drawMapClicWithCanvas(x,y,imageCoordinates.x,imageCoordinates.y,distance,randomCity.cityName);
	
	//Mise à jour de la difficulté
	//var selectElement = document.getElementById("diffSelect");
	//numberOfLinesToConsider = selectElement.value;

	//On passe à la prochaine cible
	citiesIt = citiesIt+1;
	if(citiesIt >= numberOfLinesToConsider)
	{
		//Terminé
		//On bloque l'exécution
		gameOngoing = false;
		//On affiche le score final & co au bout de 1 seconde pour laisser le temps de voir le dernier clic
		setTimeout(function() {
			stopGame();
		}, 800); // 800 millisecondes
		
	}
	else
	{
		randomCity = citiesList[citiesIt];
		console.log(randomCity);
		targetInfo.innerHTML = `Nouvelle ville à positionner : <b>` + randomCity.cityName + `</b>`;
	}
}
});


function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadiusKm = 6371; // Rayon de la Terre en kilomètres

  // Convertir les degrés en radians
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  // Calculer la distance
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
			Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadiusKm * c;

  return distance;
}

function selectRandomCity(csvContent, numberOfLinesToConsider) {
  // Séparer les lignes du fichier CSV
  const lines = csvContent.split('\n');
  
  // Sélectionner les X premières lignes
  const selectedLines = lines.slice(0, numberOfLinesToConsider);
  
  // Choisir une ligne au hasard parmi les X premières lignes
  const randomLine = selectedLines[Math.floor(Math.random() * selectedLines.length)];
  
  // Séparer les valeurs de la ligne sélectionnée
  const values = randomLine.split(';');
  
  // Extraire les informations nécessaires
  const cityName = values[0];
  const department = values[2];
  const type = values[3];
  const longitude = parseFloat(values[5]); // Convertir en nombre
  const latitude = parseFloat(values[4]); // Convertir en nombre
  
  // Retourner les informations sélectionnées
  return { cityName, department, type, longitude, latitude };
}

function stopGame()
{
	let textTop3 = "";
	let textFlop3 = "";
	//On calcule le top3 et le flop3
	if(clicHistory.length > 3)
	{
		computeTop3Flop3();
		console.log(top3);
		console.log(flop3);
		textTop3 = `\nTop 3 : `+top3[0][0]+` (`+top3[0][1]+`km), `+top3[1][0]+` (`+top3[1][1]+`km), `+top3[2][0]+` (`+top3[2][1]+`km)`;
		textFlop3 = `\nFlop 3 : `+flop3[2][0]+` (`+flop3[2][1]+`km), `+flop3[1][0]+` (`+flop3[1][1]+`km), `+flop3[0][0]+` (`+flop3[0][1]+`km)`;
	}

	targetInfo.style.display = "none"; //On cache le champ qui indique la cible
	//On stocke le recap dans la chaine pour la copie éventuelle
	textToCopy = `Aujourd'hui j'ai fait `+totalScore+` – Moyenne `+averageScore+` à Accuracity ! – https://accura.city/`+textTop3+textFlop3;
	document.getElementById("finish").innerHTML = `Partie terminée !<br/>Score : ` + totalScore + `<br/>Moyenne : ` + averageScore + ` – `+ getEvaluation(averageScore) + `<br/>`+(textTop3 != "" ? `<div style="font-size: 10pt;padding:10px;">`+ textTop3 + `<br/>` + textFlop3 + `<br/></div>` : ``)+`<button onclick="generateAndOpenImage()">Afficher un récap</button> <button id="copyButton" onclick="copyScoreToClipboard()">Copier mon score</button>`;
	/*if(numberOfLinesToConsider == 20) //Mode défi uniquement
	{
		document.getElementById("finish").innerHTML += generateScoreTable();
	}*/
	document.getElementById("finish").style.display = "block"; //On affiche le bloc de fin
	document.getElementById("settings").style.display = "block"; //On affiche le bloc de paramétrage
	gameOngoing = false;
}

function startGame(defi)
{
	//Reset score
	lastScore = 0;
	totalScore = 0;
	nbScore = 0;
	averageScore = 0;
	scoreLast.innerHTML = `-`;
	scoreTotal.innerHTML = `0`;
	scoreNb.innerHTML = `0`;
	scoreAverage.innerHTML = `-`;
	scoreArray = []; //On vide le tableau des scores
	clicHistory = []; //On vide l'historique des clics
	top3 = []; //On vide le top 3
	flop3 = []; //On vide le flop 3
	
	//Cacher le bloc de fin
	document.getElementById("finish").style.display = "none";
	
	//Effacer les restes de la précédente parties
	drawMapClear();
	
	if(defi)
	{
		isDefi = true;
		//Création et lancement du défi
		citiesList = getCityListForToday();
		numberOfLinesToConsider = 20;
	}
	else
	{
		isDefi = false;
		//Prise en compte du paramétrage
		var selectElement = document.getElementById("diffSelect");
		numberOfLinesToConsider = selectElement.value;
		//Création de la liste mélangée
		citiesList = selectRandomCities(csvContent, numberOfLinesToConsider);
		//Enregistrement de la difficulté
			//22=préféectures de région, 96=préfectures, 326=sous-préfectures
		if (numberOfLinesToConsider == 22) diffText = "Facile (Préfectures de région uniquement)";
		else if (numberOfLinesToConsider == 96) diffText = "Moyen (Préfectures)";
		else if (numberOfLinesToConsider == 326) diffText = "Difficile (Préfectures et sous-préfectures)";
		//Troncage de la liste
		//  Récupérer tous les éléments radio avec le nom "nbCity"
		const radios = document.getElementsByName('nbCity');
		//  Parcourir tous les éléments radio
		for (let i = 0; i < radios.length; i++) {
			// Vérifier si l'élément radio est cochée
			if (radios[i].checked) {
				// Récupérer la valeur de l'élément radio cochée
				const valeurCochee = radios[i].value;
				if(valeurCochee < numberOfLinesToConsider) numberOfLinesToConsider = valeurCochee;
				break; // Sortir de la boucle une fois que la valeur a été trouvée
			}
		}
	}
	
	citiesIt = 0;
	randomCity = citiesList[0];
	console.log(randomCity);
	targetInfo.style.display = "block"; //On affiche le champ qui indique la cible
	targetInfo.innerHTML = `Ville à positionner : <b>` + randomCity.cityName + `</b>`;
	document.getElementById("settings").style.display = "none"; //On cache le paramétrage
	
	gameOngoing = true;
}

function shuffleArray(array) {
	// Algorithme de mélange de Fisher-Yates
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function selectRandomCities(csvContent, numberOfLinesToConsider) {
	// Séparer les lignes du fichier CSV
	const lines = csvContent.split('\n');
	
	// Sélectionner les X premières lignes
	const selectedLines = lines.slice(0, numberOfLinesToConsider);
	
	// Créer une liste des villes
	const cities = selectedLines.map(line => {
		const values = line.split(';');
		const cityName = values[0];
		const department = values[2];
		const type = values[3];
		const longitude = parseFloat(values[5]);
		const latitude = parseFloat(values[4]);
		return { cityName, department, type, longitude, latitude };
	});
	
	// Mélanger aléatoirement la liste des villes
	const shuffledCities = shuffleArray(cities);
	
	return shuffledCities;
}

function getEvaluation(avgScore) {
	if(avgScore <= 50) return `<font color="limegreen">Impressionnant !</font>`;
	else if(avgScore <= 100) return `<font color="yellowgreen">Excellent !</font>`;
	else if(avgScore <= 200) return `<font color="deepskyblue">Bien !</font>`;
	else if(avgScore <= 500) return `<font color="orange">Acceptable</font>`;
	else if(avgScore <= 1000) return `<font color="orangered">Décevant</font>`;
	else return `<font color="crimson">Nul !</font>`;
}

function getEvaluationText(avgScore) {
	if(avgScore <= 50) return `Impressionnant !`;
	else if(avgScore <= 100) return `Excellent !`;
	else if(avgScore <= 200) return `Bien !`;
	else if(avgScore <= 500) return `Acceptable`;
	else if(avgScore <= 1000) return `Décevant`;
	else return `Nul !`;
}

function getEvaluationColor(avgScore) {
	if(avgScore <= 50) return `limegreen`;
	else if(avgScore <= 100) return `yellowgreen`;
	else if(avgScore <= 200) return `deepskyblue`;
	else if(avgScore <= 500) return `orange`;
	else if(avgScore <= 1000) return `orangered`;
	else return `crimson`;
}

function generateScoreTable()
{
	let table = `<table style="padding:1; border-spacing:0;font-size:8pt;"><tr>`;
	for (let i = 0; i < scoreArray.length; i++) {
		table += `<td style="border:1px solid; padding:1; border-spacing:0; background-color:` + getEvaluationColor(scoreArray[i]) + `">`+scoreArray[i]+`</td>`;
	}
	table += `</tr></table>`;
	return table;
}

function latToMercator(latitude) {
	return Math.log(Math.tan((90 + latitude) * Math.PI / 360)) / (Math.PI / 180);
}

function mercatorToLat(mercator) {
	return (Math.atan(Math.exp(mercator * Math.PI / 180)) * 360 / Math.PI) - 90;
}

function gpsToXY(latitude, longitude, width, height, topLeftGPS, topRightGPS, bottomLeftGPS, bottomRightGPS) {
	const xRatio = (longitude - topLeftGPS.longitude) / (topRightGPS.longitude - topLeftGPS.longitude);

	// Convertir la latitude en coordonnées y sur l'image (projection Mercator)
	const mercN = latToMercator(latitude);
	const mercTopLeft = latToMercator(topLeftGPS.latitude);
	const mercBottomLeft = latToMercator(bottomLeftGPS.latitude);
	const mercatorHeight = mercTopLeft - mercBottomLeft;
	const yRatio = (mercTopLeft - mercN) / mercatorHeight;

	const x = xRatio * width;
	const y = yRatio * height;

	return { x, y };
}

function xyToGPS(x, y, width, height, topLeftGPS, topRightGPS, bottomLeftGPS, bottomRightGPS) {
	const xRatio = x / width;
	const yRatio = y / height; 

	const longitude = topLeftGPS.longitude + xRatio * (topRightGPS.longitude - topLeftGPS.longitude);
	const mercN = latToMercator(topLeftGPS.latitude) - yRatio * (latToMercator(topLeftGPS.latitude) - latToMercator(bottomLeftGPS.latitude));
	const latitude = mercatorToLat(mercN);

	return { latitude, longitude };
}

// Fonction pour récupérer la liste du jour
function getCityListForToday() {
	// Obtenir la date courante au format "YYYY-MM-DD"
	const todayDate = getCurrentDate();
	console.log(todayDate);
	// Vérifier si la liste des villes pour la date courante existe dans la collection
	if (cityListsByDate.hasOwnProperty(todayDate)) {
		// Renvoyer la liste des villes associée à la date courante
		return cityListsByDate[todayDate];
	} else {
		// Si aucune liste n'est trouvée pour la date courante, renvoyer une liste vide ou une liste par défaut
		return [];
	}
}

function getCurrentDate() {
	// Chaine contenant la date à Paris
	const dateString = new Date().toLocaleString("fr-FR", {timeZone: "Europe/Paris"});
	
	//Stocker la date
	defiDate = dateString.substring(0, 10);
	
	// Extraire les composants de la date
	const parts = dateString.split(' ')[0].split('/');
	const day = parts[0];
	const month = parts[1];
	const year = parts[2];

	// Former la nouvelle chaîne de date au format "AAAA-MM-JJ"
	return `${year}-${month}-${day}`;
}

function drawMapClear() {
	// Supprimer l'ancien point
	if (clickPoint) {
	  clickPoint.remove();
	}

	// Supprimer l'ancienne cible
	if (targetPoint) {
	  targetPoint.remove();
	}
	
	// Supprimer l'ancienne légende de la cible
	if (targetText) {
	  targetText.remove();
	}
	
	// Supprimer l'ancienne légende de la distance
	if (distanceText) {
	  distanceText.remove();
	}
	
	// Récupérer le contexte 2D du canvas
	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');

	// Effacer le contenu du canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawMapClic(x,y,targetX,targetY,distance,cityName) {
	// Créer et afficher le nouveau point cliqué
	clickPoint = document.createElement('div');
	clickPoint.className = 'click-point';
	clickPoint.style.left = `${x}px`;
	clickPoint.style.top = `${y}px`;
	map.appendChild(clickPoint);
	
	// Créer et afficher la cible
	targetPoint = document.createElement('div');
	targetPoint.className = 'target-point';
	targetPoint.style.left = `${targetX}px`;
	targetPoint.style.top = `${offsetY + targetY}px`;
	map.appendChild(targetPoint);
	
	// Créer et afficher la légende de la cible
	targetText = document.createElement('div');
	targetText.className = 'target-text';
	targetText.innerHTML = randomCity.cityName;
	targetText.style.left = `${targetX + 10}px`;
	targetText.style.top = `${offsetY + targetY - 5}px`;
	map.appendChild(targetText);
	
	// Créer et afficher la légende de la distance
	distanceText = document.createElement('div');
	distanceText.className = 'distance-text';
	distanceText.innerHTML = distance + `km`
	distanceText.style.left = `${(targetX + x)/2 + 5}px`;
	distanceText.style.top = `${(offsetY + targetY + y)/2 - 10}px`;
	map.appendChild(distanceText);
	
	//Afficher une ligne entre les 2 points
	// Récupérer le contexte 2D du canvas
	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');

	// Tracer une ligne entre les deux points
	ctx.beginPath();
	ctx.moveTo(targetX, targetY);
	ctx.lineTo(x, y - offsetY);
	ctx.strokeStyle = 'black'; // Couleur de la ligne
	ctx.lineWidth = 1; // Epaisseur de la ligne
	ctx.stroke();	
}

function drawMapClicWithCanvas(x, y, targetX, targetY, distance, cityName) {
    // Récupérer le canvas et son contexte
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Dessiner le point cliqué
    ctx.beginPath();
    ctx.arc(x, y - offsetY, 4, 0, Math.PI * 2);
    ctx.fillStyle = 'red'; // Couleur du point cliqué
    ctx.fill();

    // Dessiner la cible
    ctx.beginPath();
    ctx.arc(targetX, targetY, 4, 0, Math.PI * 2);
    ctx.fillStyle = 'green'; // Couleur de la cible
    ctx.fill();

    // Dessiner le texte de la cible
    ctx.fillStyle = 'black'; // Couleur du texte
    ctx.font = '12px Arial';
    ctx.fillText(cityName, targetX + 5, targetY - 5);

    // Dessiner le texte de la distance
    ctx.fillText(distance + 'km', (targetX + x) / 2 + 5, (targetY + y  - offsetY) / 2 - 5);

    // Dessiner la ligne entre les deux points
    ctx.beginPath();
    ctx.moveTo(targetX, targetY);
    ctx.lineTo(x, y - offsetY);
    ctx.strokeStyle = 'black'; // Couleur de la ligne
    ctx.lineWidth = 1; // Epaisseur de la ligne
    ctx.stroke();
}

function drawMapBackground() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Dessinez l'image sur tout le canvas
}

function generateAndDownloadImage() {
	// Récupérer le canvas et son contexte
	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');

	//On efface la carte
	drawMapClear();
	
	//On dessine le fond
	drawMapBackground();
	
	//On affiche tous les points 
	for (const element of clicHistory) {
		drawMapClicWithCanvas(element[0],element[1],element[2],element[3],element[4],element[5]);
	}

	// Convertir le contenu du canvas en URL de données au format PNG
	const dataURL = canvas.toDataURL('image/png');

	// Créer un élément <a> pour télécharger l'image
	const downloadLink = document.createElement('a');
	downloadLink.href = dataURL;
	downloadLink.download = 'image.png';
	document.body.appendChild(downloadLink);

	// Cliquer sur le lien de téléchargement
	downloadLink.click();

	// Supprimer l'élément <a> après le téléchargement
	document.body.removeChild(downloadLink);
	
}

function generateAndOpenImage() {
    // Récupérer le canvas
    const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');
	
	//On efface la carte
	drawMapClear();
	
	//On dessine le fond
	drawMapBackground();
	
	//On affiche tous les points 
	for (const element of clicHistory) {
		drawMapClicWithCanvas(element[0],element[1],element[2],element[3],element[4],element[5]);
	}
	
	
	//Ecrire la date et le score total
	// Définir la police et la taille du texte
	ctx.font = '20px Arial';
	ctx.fillStyle = 'black';
	if(isDefi)
	{
		// Dessiner le texte sur le canvas
		ctx.fillText(`Défi du `+defiDate, 10, 30);
	}
	else
	{
		ctx.fillText(`Pratique libre – Difficulté : `+diffText, 10, 30);
	}
	ctx.fillText(`Score : `+totalScore+` – Moyenne : `+averageScore+` – `+getEvaluationText(averageScore),10,60);
    
	// Convertir le contenu du canvas en Blob (format PNG)
	canvas.toBlob(function(blob) {
		// Créer une URL à partir du Blob
		const url = URL.createObjectURL(blob);
		
		// Ouvrir l'image dans un nouvel onglet
		const imageWindow = window.open(url, '_blank');
		
		// Si la fenêtre est bloquée par le navigateur, informer l'utilisateur
		if (!imageWindow || imageWindow.closed || typeof imageWindow.closed == 'undefined') {
			alert("La fenêtre pop-up est bloquée. Veuillez autoriser les pop-ups pour voir l'image.");
		}
	}, 'image/png');
	
	drawMapClear();
}

function copyScoreToClipboard() {
	// Créer un élément de texte temporaire
	const tempInput = document.createElement('textarea');
	tempInput.value = textToCopy;
	document.body.appendChild(tempInput);
	
	// Sélectionner le texte
	tempInput.select();
	tempInput.setSelectionRange(0, 99999); // Pour les mobiles
	
	// Copier le texte dans le presse-papiers
	document.execCommand('copy');
	
	// Supprimer l'élément temporaire
	document.body.removeChild(tempInput);
}

function computeTop3Flop3()
{
	//Créer un tableau à trier
	const sortedScore = [];
	for (const element of clicHistory) {
		sortedScore.push([element[5],element[4]]);
	}
	
    // Trier le tableau en fonction de la valeur de distance
    sortedScore.sort((a, b) => a[1] - b[1]);

    // Extraire les 3 premiers et les 3 derniers éléments
    top3 = sortedScore.slice(0, 3);
    flop3 = sortedScore.slice(-3);
}