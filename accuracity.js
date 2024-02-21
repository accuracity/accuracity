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

let scoreArray = [];

  // Coordonnées GPS des 4 coins de l'image (à remplacer par les coordonnées réelles)
const topLeftGPS = { latitude: 52, longitude: -6 };
const topRightGPS = { latitude: 52, longitude: 10 };
const bottomLeftGPS = { latitude: 41, longitude: -6 };
const bottomRightGPS = { latitude: 41, longitude: 10 };
const width = 800;
const height = 800;
const offsetY = 105;

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
	
	// Supprimer l'ancien point
	if (clickPoint) {
	  clickPoint.remove();
	}

	// Créer et afficher le nouveau point cliqué
	clickPoint = document.createElement('div');
	clickPoint.className = 'click-point';
	clickPoint.style.left = `${x}px`;
	clickPoint.style.top = `${y}px`;
	map.appendChild(clickPoint);
	
	// Supprimer l'ancienne cible
	if (targetPoint) {
	  targetPoint.remove();
	}
	
	// Créer et afficher la cible
	targetPoint = document.createElement('div');
	targetPoint.className = 'target-point';
	targetPoint.style.left = `${imageCoordinates.x}px`;
	targetPoint.style.top = `${offsetY + imageCoordinates.y}px`;
	map.appendChild(targetPoint);
	
	// Supprimer l'ancienne légende de la cible
	if (targetText) {
	  targetText.remove();
	}
	
	// Créer et afficher la légende de la cible
	targetText = document.createElement('div');
	targetText.className = 'target-text';
	targetText.innerHTML = randomCity.cityName;
	targetText.style.left = `${imageCoordinates.x + 10}px`;
	targetText.style.top = `${offsetY + imageCoordinates.y - 5}px`;
	map.appendChild(targetText);
	
	// Supprimer l'ancienne légende de la distance
	if (distanceText) {
	  distanceText.remove();
	}
	
	// Créer et afficher la légende de la distance
	distanceText = document.createElement('div');
	distanceText.className = 'distance-text';
	distanceText.innerHTML = distance + `km`
	distanceText.style.left = `${(targetX + x)/2 + 5}px`;
	distanceText.style.top = `${(targetY + y)/2 - 10}px`;
	map.appendChild(distanceText);
	
	//Afficher une ligne entre les 2 points
	// Récupérer le contexte 2D du canvas
	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');

	// Effacer le contenu du canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// Tracer une ligne entre les deux points
	ctx.beginPath();
	ctx.moveTo(targetX, targetY - offsetY);
	ctx.lineTo(x, y - offsetY);
	ctx.strokeStyle = 'black'; // Couleur de la ligne
	ctx.lineWidth = 1; // Epaisseur de la ligne
	ctx.stroke();	
	
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
	targetInfo.style.display = "none"; //On cache le champ qui indique la cible
	document.getElementById("finish").innerHTML = `Partie terminée !<br/>Score : ` + totalScore + `<br/>Moyenne : ` + averageScore + ` – `+ getEvaluation(averageScore);
	/*if(numberOfLinesToConsider == 20) //Mode défi uniquement
	{
		document.getElementById("finish").innerHTML += generateScoreTable();
	}*/
	document.getElementById("finish").style.display = "block"; //On affiche le bloc de fin
	document.getElementById("settings").style.display = "block"; //On affiche le bloc de paramétrage
	gameOngoing = false;
	scoreArray = []; //On vide le tableau des scores
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
	
	//Cacher le bloc de fin
	document.getElementById("finish").style.display = "none";
	
	//Effacer les restes de la précédente parties
	if (clickPoint) {
	  clickPoint.remove();
	}
	if (targetPoint) {
	  targetPoint.remove();
	}
	if (distanceText) {
	  distanceText.remove();
	}
	if (targetText) {
	  targetText.remove();
	}
	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
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

	// Extraire les composants de la date
	const parts = dateString.split(' ')[0].split('/');
	const day = parts[0];
	const month = parts[1];
	const year = parts[2];

	// Former la nouvelle chaîne de date au format "AAAA-MM-JJ"
	return `${year}-${month}-${day}`;
}