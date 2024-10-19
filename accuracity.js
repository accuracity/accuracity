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
let lastScore = 0; // Score du dernier clic
let totalScore = 0; // Score total
let nbScore = 0; // Nombre de parties
let averageScore = 0; // Score moyen
let numberOfLinesToConsider = 22; // Le nombre de lignes à considérer (=difficulté) 22=préféectures de région, 96=préfectures, 320=sous-préfectures, 20=défi du jour
let isDefi = false;
let defiDate = "";
let diffText = "";

let scoreArray = [];
let clicHistory = [];
let textToCopy = "";

let lang = "en";
let currentMap = maps["fr"];

// Obtenez l'URL actuelle de la page
const urlParams = new URLSearchParams(window.location.search);

// a Hash function
function cyrb128(str) {
	let h1 = 1779033703, h2 = 3144134277,
		h3 = 1013904242, h4 = 2773480762;
	for (let i = 0, k; i < str.length; i++) {
		k = str.charCodeAt(i);
		h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
		h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
		h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
		h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
	}
	h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
	h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
	h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
	h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
	h1 ^= (h2 ^ h3 ^ h4)
	return h1 >>> 0;
}

// hash string to a 32bit integer
String.prototype.hashCode = function () {
	return cyrb128(this);
}


class RandGen {
	// Linear congruential generator

	constructor(seed) {
		this.current = seed;
		this.a = 75;
		this.c = 74;
		this.m = 2 ** 16 + 1;
	}

	getRandInt() {
		this.current = ((this.a, this.current) + this.c) % this.m;
		return this.current;
	}

	// return pseudo random integer between 0 and k-1
	getRandMax(k) {
		return Math.abs(this.getRandInt()) % k;
	}
}

function getPseudoRandomSubarray(arr, size, seed) {
	let rndg = new RandGen(seed);
	var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
	while (i-- > min) {
		index = Math.floor(rndg.getRandMax(i + 1));
		temp = shuffled[index];
		shuffled[index] = shuffled[i];
		shuffled[i] = temp;
	}
	return shuffled.slice(min);
}

// Vérifiez si le paramètre "lang" est présent dans l'URL
if (urlParams.has('lang')) {
	// Obtenez la valeur du paramètre "lang"
	const urlLang = urlParams.get('lang');
	if (urlLang == "fr" || urlLang == "en") {
		lang = urlLang;
	}
	else {
		console.log('Unknown language => en');
	}
} else {
	console.log('No language specified in the url => en');
}

// Vérifiez si le paramètre "map" est présent dans l'URL
if (urlParams.has('map')) {
	// Obtenez la valeur du paramètre "map"
	const urlMap = urlParams.get('map');
	if (urlMap == "fr" || urlMap == "us" || urlMap == "eu") {
		currentMap = maps[urlMap];
	}
	else {
		console.log('Unknown map => fr');
	}
} else {
	console.log('No map specified in the url => fr');
}

// Coordonnées GPS des 4 coins de l'image (à remplacer par les coordonnées réelles)
const topLeftGPS = currentMap.topLeftGPS;
const topRightGPS = currentMap.topRightGPS;
const bottomLeftGPS = currentMap.bottomLeftGPS;
const bottomRightGPS = currentMap.bottomRightGPS;
const width = currentMap.width;
const height = currentMap.height;
const offsetY = 105;

// Image de fond
const img = new Image();
img.src = currentMap.img;

document.addEventListener('DOMContentLoaded', function () {
	// Code JavaScript à exécuter une fois que la page est chargée
	applyI18nToHtml(lang, "txtChallengeTitle", "txtChallenge", "defi", "txtFreePracticeTitle", "txtEasy", "txtMedium", "txtHard", "txtNbCitiesTitle", "txtCitiesAll", "startGameButton", "finish", "txtLastScore", "txtNumberOfGames", "txtAverageScore", "resetScore", "txtCreditsMap", "txtLegalMentions", "txtCreditsDataset", "txtCreditsGame", "txtOr", "change", "txtDifficulty");

	document.getElementById("map-image").src = currentMap.img;
	document.getElementById("map").style.height = currentMap.height + "px"; // not sufficient, to be fixed
	document.getElementById("map").style.width = currentMap.width + "px";

	if (lang == "fr") document.getElementById("change").style.left = "654px";
	else if (lang == "en") document.getElementById("change").style.left = "666px";

	const styleSheets = document.styleSheets;

	// Pour chaque feuille de style
	for (let i = 0; i < styleSheets.length; i++) {
		const styleSheet = styleSheets[i];

		// Vérifiez si la règle de style est une règle @media
		if (styleSheet.media && styleSheet.media.mediaText === 'screen and (max-width: 819px)') {
			// Parcourir les règles de style dans la feuille de style
			const rules = styleSheet.cssRules || styleSheet.rules;
			for (let j = 0; j < rules.length; j++) {
				const rule = rules[j];
				// Vérifiez si la règle cible l'élément "credits"
				if (rule.selectorText === '#credits') {
					// Modifier le top de la règle
					rule.style.top = (currentMap.height + 650) + "px"; // Nouvelle valeur
				}
				// Vérifiez si la règle cible l'élément "credits"
				if (rule.selectorText === '#score') {
					// Modifier le top de la règle
					rule.style.top = (currentMap.height + 205) + "px"; // Nouvelle valeur
				}
				// Vérifiez si la règle cible l'élément "click-coordinates"
				if (rule.selectorText === '#click-coordinates') {
					// Modifier le top de la règle
					rule.style.top = (currentMap.height + 135) + "px"; // Nouvelle valeur
				}
			}
		}

		// Recherche de la règle CSS correspondant à l'élément avec l'identifiant "credits"
		const rules2 = styleSheet.cssRules || styleSheet.rules;
		for (let k = 0; k < rules2.length; k++) {
			const rule = rules2[k];
			if (rule.selectorText === '#credits') {
				rule.style.top = Math.max(700, currentMap.height + 185) + "px";
				break;
			}
		}
	}

	document.title = i18n("txtTitle", lang);

	document.getElementById("myCanvas").height = currentMap.height;
	document.getElementById("myCanvas").width = currentMap.width;

	document.getElementById("txtEasy").value = currentMap.categories.easy.totalCount;
	document.getElementById("txtEasy").innerHTML = currentMap.categories.easy.difficulty;
	document.getElementById("txtMedium").value = currentMap.categories.medium.totalCount;
	document.getElementById("txtMedium").innerHTML = currentMap.categories.medium.difficulty;
	document.getElementById("txtHard").value = currentMap.categories.hard.totalCount;
	document.getElementById("txtHard").innerHTML = currentMap.categories.hard.difficulty;

	document.getElementById("txtScoreExplanations").innerHTML = i18n("txtScoreExplanations", lang, currentMap.categories.veryeasy.name, currentMap.categories.easy.name, currentMap.categories.medium.name, currentMap.categories.hard.name, generateScale());

	document.getElementById("txtCreditsMap").innerHTML = i18n("txtCreditsMap", lang, currentMap.credits.map);
	document.getElementById("txtCreditsDataset").innerHTML = i18n("txtCreditsDataset", lang, currentMap.credits.dataset);
});

defi.onclick = function () {
	startGame(true); // Défi
};

startGameButton.onclick = function () {
	startGame(false); // Pratique libre
};

scoreReset.onclick = function () {
	// Terminé
	stopGame();
};

map.addEventListener('click', function (event) {
	if (gameOngoing) {
		const mapRect = map.getBoundingClientRect();
		const x = event.clientX - mapRect.left;
		const y = event.clientY - mapRect.top;
		console.log(`Clic - X ` + x + ` / Y ` + y);

		// Calcul des coordonnées GPS du point cliqué
		const gpsCoordinates = xyToGPS(currentMap.projection, x, y - offsetY, width, height, topLeftGPS, topRightGPS, bottomLeftGPS, bottomRightGPS);
		console.log(`Clic - Long ` + gpsCoordinates.longitude + ` / Lat ` + gpsCoordinates.latitude);

		// Positionnement de la cible
		console.log(`Target - Long ` + randomCity.longitude + ` / Lat ` + randomCity.latitude);
		const imageCoordinates = gpsToXY(currentMap.projection, randomCity.latitude, randomCity.longitude, width, height, topLeftGPS, topRightGPS, bottomLeftGPS, bottomRightGPS);
		console.log(`Target - X ` + imageCoordinates.x + ` / Y ` + imageCoordinates.y);

		// Calcul et affichage de la distance
		const distance = Math.trunc(calculateDistance(gpsCoordinates.latitude, gpsCoordinates.longitude, randomCity.latitude, randomCity.longitude));
		clickCoordinates.innerHTML = i18n("distanceFrom", lang, randomCity.cityName, randomCity.department, currentMap.categories[randomCity.type]?.name, distance);

		// Calcul du score
		coeff = currentMap.categories[randomCity.type]?.coeff;
		lastScore = distance * coeff;
		totalScore = totalScore + lastScore;
		nbScore = nbScore + 1;
		scoreLast.innerHTML = distance + `×` + coeff + `= ` + lastScore + ` – ` + getEvaluation(lastScore);
		scoreTotal.innerHTML = totalScore;
		scoreNb.innerHTML = nbScore + `/` + numberOfLinesToConsider;
		averageScore = Math.trunc(totalScore / nbScore);
		scoreAverage.innerHTML = averageScore + ` – ` + getEvaluation(averageScore);

		// Stocker le score
		scoreArray.push(lastScore);

		// Stocker l'essai
		clicHistory.push([x, y, imageCoordinates.x, imageCoordinates.y, distance, randomCity.cityName]);

		// Effacer la carte avant d'afficher le prochain point
		drawMapClear();

		// Afficher le clic, la cible & co
		drawMapClic(x, y, imageCoordinates.x, imageCoordinates.y, distance, randomCity.cityName);

		// On passe à la prochaine cible
		citiesIt = citiesIt + 1;
		if (citiesIt >= numberOfLinesToConsider) {
			// Terminé, On bloque l'exécution
			gameOngoing = false;
			// On affiche le score final & co au bout de 1 seconde pour laisser le temps de voir le dernier clic
			setTimeout(function () {
				stopGame();
			}, 800); // 800 millisecondes

		}
		else {
			randomCity = citiesList[citiesIt];
			console.log(randomCity);
			var cityName = randomCity.cityName;
			if (currentMap.giveDetails) cityName += ` (` + randomCity.department + `)`;
			targetInfo.innerHTML = i18n("newTarget", lang, cityName);
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

function stopGame() {
	let textTop3 = "";
	let textFlop3 = "";
	// On calcule le top3 et le flop3
	if (clicHistory.length > 3) {
		const [top3, flop3] = computeTop3Flop3();
		textTop3 = `\n` + i18n("txtTop3", lang, top3[0][0], top3[0][1], top3[1][0], top3[1][1], top3[2][0], top3[2][1]);
		textFlop3 = `\n` + i18n("txtFlop3", lang, flop3[0][0], flop3[0][1], flop3[1][0], flop3[1][1], flop3[2][0], flop3[2][1]);
	}

	targetInfo.style.display = "none"; // On cache le champ qui indique la cible
	// On stocke le recap dans la chaine pour la copie éventuelle
	textToCopy = i18n("txtScoreCopy", lang, totalScore, averageScore, currentMap.name, textTop3, textFlop3);
	document.getElementById("finish").innerHTML = i18n("scoreSummary", lang, totalScore, averageScore, getEvaluation(averageScore)) + `<br/>` + (textTop3 != "" ? `<div style="font-size: 10pt;padding:10px;">` + textTop3 + `<br/>` + textFlop3 + `<br/></div>` : ``) + `<button onclick="generateAndOpenImage()">` + i18n("txtButtonShowRecap", lang) + `</button> <button id="copyButton" onclick="copyScoreToClipboard()">` + i18n("txtButtonCopyMyScore", lang) + `</button>`;
	document.getElementById("finish").style.display = "block"; // On affiche le bloc de fin
	document.getElementById("settings").style.display = "block"; // On affiche le bloc de paramétrage
	gameOngoing = false;
}

function startGame(defi) {
	// Reset score
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

	// Cacher le bloc de fin
	document.getElementById("finish").style.display = "none";

	// Effacer les restes de la précédente parties
	drawMapClear();

	if (defi) {
		isDefi = true;
		// Création et lancement du défi
		numberOfLinesToConsider = 20;
		citiesList = selectTodaysCities(currentMap.csv, numberOfLinesToConsider)
	}
	else {
		isDefi = false;
		// Prise en compte du paramétrage
		var selectElement = document.getElementById("diffSelect");
		numberOfLinesToConsider = selectElement.value;
		// Création de la liste mélangée
		citiesList = selectRandomCities(currentMap.csv, numberOfLinesToConsider);
		// Enregistrement de la difficulté
		// 22=préféectures de région, 96=préfectures, 320=sous-préfectures
		if (numberOfLinesToConsider == currentMap.categories.easy.totalCount) diffText = i18n("txtEasy2", lang, currentMap.categories.easy.difficulty);
		else if (numberOfLinesToConsider == currentMap.categories.medium.totalCount) diffText = i18n("txtMedium2", lang, currentMap.categories.medium.difficulty);
		else if (numberOfLinesToConsider == currentMap.categories.hard.totalCount) diffText = i18n("txtHard2", lang, currentMap.categories.hard.difficulty);
		// Troncage de la liste
		// Récupérer tous les éléments radio avec le nom "nbCity"
		const radios = document.getElementsByName('nbCity');
		// Parcourir tous les éléments radio
		for (let radio of radios) {
			// Vérifier si l'élément radio est cochée
			if (radio.checked) {
				// Récupérer la valeur de l'élément radio cochée
				const valeurCochee = radio.value;
				if (valeurCochee < numberOfLinesToConsider) numberOfLinesToConsider = valeurCochee;
				break; // Sortir de la boucle une fois que la valeur a été trouvée
			}
		}
	}

	citiesIt = 0;
	randomCity = citiesList[0];
	console.log(randomCity);
	targetInfo.style.display = "block"; // On affiche le champ qui indique la cible
	var cityName = randomCity.cityName;
	if (currentMap.giveDetails) cityName += ` (` + randomCity.department + `)`;
	targetInfo.innerHTML = targetInfo.innerHTML = i18n("newTarget", lang, cityName);
	document.getElementById("settings").style.display = "none"; // On cache le paramétrage

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
	return `<span style="color:` + getEvaluationColor(avgScore) + `">` + getEvaluationText(avgScore) + `</span>`
}

function getEvaluationText(avgScore) {
	if (avgScore <= currentMap.scoreThresholds.impressive) return i18n("scoreImpressive", lang);
	else if (avgScore <= currentMap.scoreThresholds.excellent) return i18n("scoreExcellent", lang);
	else if (avgScore <= currentMap.scoreThresholds.good) return i18n("scoreGood", lang);
	else if (avgScore <= currentMap.scoreThresholds.acceptable) return i18n("scoreAcceptable", lang);
	else if (avgScore <= currentMap.scoreThresholds.disappointing) return i18n("scoreDisappointing", lang);
	else return i18n("scoreNil", lang);
}

function getEvaluationColor(avgScore) {
	if (avgScore <= currentMap.scoreThresholds.impressive) return `limegreen`;
	else if (avgScore <= currentMap.scoreThresholds.excellent) return `yellowgreen`;
	else if (avgScore <= currentMap.scoreThresholds.good) return `deepskyblue`;
	else if (avgScore <= currentMap.scoreThresholds.acceptable) return `orange`;
	else if (avgScore <= currentMap.scoreThresholds.disappointing) return `orangered`;
	else return `crimson`;
}

function latToMercator(latitude) {
	return Math.log(Math.tan((90 + latitude) * Math.PI / 360)) / (Math.PI / 180);
}

function mercatorToLat(mercator) {
	return (Math.atan(Math.exp(mercator * Math.PI / 180)) * 360 / Math.PI) - 90;
}

function gpsToXY(projection, latitude, longitude, width, height, topLeftGPS, topRightGPS, bottomLeftGPS, bottomRightGPS) {
	if (projection == "mercator") {
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
	else if (projection == "laea") {
		// Projection parameters
		const sourceProjection = '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs +type=crs';
		const destProjection = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs'; // Projection WGS84

		// Min & Max of the map
		const x_min = 2555000;
		const x_max = 7405000;
		const y_min = 1350000;
		const y_max = 5500000;
		const ratio_h = (y_max - y_min) / height;
		const ratio_w = (x_max - x_min) / width;

		// Compute transformation
		var transform = proj4(sourceProjection, destProjection);
		var result = transform.inverse([longitude, latitude]);

		var x = (result[0] - x_min) / ratio_w;
		var y = (y_max - result[1]) / ratio_h;
		return { x, y };
	}
}

function xyToGPS(projection, x, y, width, height, topLeftGPS, topRightGPS, bottomLeftGPS, bottomRightGPS) {
	if (projection == "mercator") {
		const xRatio = x / width;
		const yRatio = y / height;

		const longitude = topLeftGPS.longitude + xRatio * (topRightGPS.longitude - topLeftGPS.longitude);
		const mercN = latToMercator(topLeftGPS.latitude) - yRatio * (latToMercator(topLeftGPS.latitude) - latToMercator(bottomLeftGPS.latitude));
		const latitude = mercatorToLat(mercN);

		return { latitude: latitude, longitude: longitude };
	}
	else if (projection == "laea") {
		// Projection parameters
		const sourceProjection = '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs +type=crs';
		const destProjection = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs'; // Projection WGS84

		// Min & Max of the map
		const x_min = 2555000;
		const x_max = 7405000;
		const y_min = 1350000;
		const y_max = 5500000;
		const ratio_h = (y_max - y_min) / height;
		const ratio_w = (x_max - x_min) / width;

		// Compute transformation
		var transform = proj4(sourceProjection, destProjection);
		var result = transform.forward([(x_min + ratio_w * x), (y_max - ratio_h * y)]);

		return { latitude: result[1], longitude: result[0] };
	}
}

// Fonction pour récupérer la liste du jour
function selectTodaysCities(csvContent, numberOfLinesToConsider) {
	const lines = csvContent.split('\n');

	// Créer une liste des villes
	const cities = lines.map(line => {
		const values = line.split(';');
		const cityName = values[0];
		const department = values[2];
		const type = values[3];
		const longitude = parseFloat(values[5]);
		const latitude = parseFloat(values[4]);
		return { cityName, department, type, longitude, latitude };
	});

	let seed = getCurrentDate().hashCode();
	return getPseudoRandomSubarray(cities, numberOfLinesToConsider, seed);
}

function getCurrentDate() {
	// Chaine contenant la date à Paris
	const dateString = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

	// Stocker la date
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

function drawMapClic(x, y, targetX, targetY, distance, cityName) {
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
	distanceText.style.left = `${(targetX + x) / 2 + 5}px`;
	distanceText.style.top = `${(offsetY + targetY + y) / 2 - 10}px`;
	map.appendChild(distanceText);

	// Afficher une ligne entre les 2 points
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
	ctx.fillText(distance + 'km', (targetX + x) / 2 + 5, (targetY + y - offsetY) / 2 - 5);

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

function generateAndOpenImage() {
	// Récupérer le canvas
	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');

	// On efface la carte
	drawMapClear();

	// On dessine le fond
	drawMapBackground();

	// On affiche tous les points
	for (const element of clicHistory) {
		drawMapClicWithCanvas(element[0], element[1], element[2], element[3], element[4], element[5]);
	}

	// Ecrire la date et le score total
	// Définir la police et la taille du texte
	ctx.font = '20px Arial';
	ctx.fillStyle = 'black';
	if (isDefi) {
		// Dessiner le texte sur le canvas
		ctx.fillText(i18n("txtRecapChallenge", lang, defiDate), 10, 30);
	}
	else {
		ctx.fillText(i18n("txtRecapFreePractice", lang, diffText), 10, 30);
	}
	ctx.fillText(i18n("txtRecapScore", lang, totalScore, averageScore, getEvaluationText(averageScore)), 10, 60);

	// Convertir le contenu du canvas en Blob (format PNG)
	canvas.toBlob(function (blob) {
		// Créer une URL à partir du Blob
		const url = URL.createObjectURL(blob);

		// Ouvrir l'image dans un nouvel onglet
		const imageWindow = window.open(url, '_blank');

		// Si la fenêtre est bloquée par le navigateur, informer l'utilisateur
		if (!imageWindow || imageWindow.closed || typeof imageWindow.closed == 'undefined') {
			alert(i18n("popupAlert", lang));
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

function computeTop3Flop3() {
	// Créer un tableau à trier
	const sortedScore = clicHistory.map(
		element => [element[5], element[4]]
	);

	// Trier le tableau en fonction de la valeur de distance
	sortedScore.sort((a, b) => a[1] - b[1]);

	// Extraire les 3 premiers et les 3 derniers éléments
	return [sortedScore.slice(0, 3), sortedScore.slice(-3)];
}

function generateScale() {
	let scale = "";
	let lastThreshold = -1;
	for (const key in currentMap.scoreThresholds) {
		if (currentMap.scoreThresholds.hasOwnProperty(key)) {
			const value = currentMap.scoreThresholds[key];
			scale += `<span style="color:` + getEvaluationColor(value) + `">[` + (lastThreshold + 1) + `-` + value + `] ` + getEvaluationText(value) + `</span> – `;
			lastThreshold = value;
		}
	}
	scale += `<span style="color:` + getEvaluationColor(lastThreshold + 1) + `">[` + (lastThreshold + 1) + `+] ` + getEvaluationText(lastThreshold + 1) + `</span>`;
	return scale;
}
