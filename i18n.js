// Tableau de traductions
const translations = {
	en: {
		txtChallengeTitle: "Challenge of the day",
		txtChallenge: "The same cities for all: compare yourself to your nearest and dearest!",
		defi: "Challenge of the day (20 cities)",
		txtFreePracticeTitle: "Free practice",
		txtEasy: "Easy: Préfectures de région only (22 cities)",
		txtMedium: "Medium: Préfectures (96 cities)",
		txtHard: "Hard: Préfectures and sous-préfectures (320 cities)",
		txtNbCitiesTitle: "Number of cities:",
		txtCitiesAll: "All",
		startGameButton: "Start",
		finish: "Game over!",
		txtLastScore: "Last score: ",
		txtNumberOfGames: "Number of games: ",
		txtTotalScore: "Total score: ",
		txtAverageScore: "Average score: ",
		resetScore: "Stop the game in progress",
		newTarget: "New city to locate: <b>%1</b>",
		txtEasy2: "Easy (%1)",
		txtMedium2: "Medium (%1)",
		txtHard2: "Hard (%1)",
		txtScoreCopy: "Today I scored %1 – Average %2 at Accuracity %3 ! – https://accura.city/%4%5",
		txtTop3: "Top 3: %1 (%2km), %3 (%4km), %5 (%6km)",
		txtFlop3: "Flop 3: %1 (%2km), %3 (%4km), %5 (%6km)",
		scoreSummary: "Game over!<br>Score : %1<br>Average : %2 – %3",
		txtButtonShowRecap: "Show a recap",
		txtButtonCopyMyScore: "Copy my score",
		scoreImpressive: "Impressive!",
		scoreExcellent: "Excellent!",
		scoreGood: "Good!",
		scoreAcceptable: "Acceptable",
		scoreDisappointing: "Disappointing",
		scoreNil: "Terribly bad!",
		txtRecapChallenge: "Challenge of %1",
		txtRecapFreePractice: "Free practice – Difficulty : %1",
		txtRecapScore: "Score: %1 – Average: %2 – %3",
		popupAlert: "The pop-up windows is blocked. Please enable the pop-ups to see the image.",
		txtScoreExplanations: `Exaplanations regarding the score: <ul><li>The lower the score, the better</li><li>The score of each try is:<br>distance × difficulty-coeff</li><li>The difficulty-coeff depends on the size of the city: 4 for the %1, 3 for a %2, 2 for a %3, 1 for a %4</li><li>Here is the scale of score assessment: <br>%5</li></ul>`,
		txtCreditsMap: "Map %1",
		txtCreditsDataset: "Dataset %1",
		txtLegalMentions: "Legal information",
		txtCreditsGame: "Game developed by Olivier Genest",
		distanceFrom: "Distance from %1 (%2, %3): %4km",
		txtOr: "or",
		txtTitle: "AccuraCity – Locate cities on a map",
		change: "Change map / language",
		txtDifficulty: "Difficulty:",
		txtNoScript: "Activate javascript to play AccuraCity !",
	},
	fr: {
		txtChallengeTitle: "Défi du jour",
		txtChallenge: "Les mêmes villes pour tous : comparez-vous à vos proches !",
		defi: "Défi du jour (20 villes)",
		txtFreePracticeTitle: "Pratique libre",
		txtEasy: "Facile : Préfectures de région uniquement (22 villes)",
		txtMedium: "Moyen : Préfectures (96 villes)",
		txtHard: "Difficile : Préfectures et sous-préfectures (320 villes)",
		txtNbCitiesTitle: "Nombre de villes :",
		txtCitiesAll: "Toutes",
		startGameButton: "Démarrer",
		finish: "Partie terminée !",
		txtLastScore: "Dernier score : ",
		txtNumberOfGames: "Nombre de parties : ",
		txtTotalScore: "Score total : ",
		txtAverageScore: "Score moyen : ",
		resetScore: "Arrêter la partie en cours",
		newTarget: "Nouvelle ville à positionner : <b>%1</b>",
		txtEasy2: "Facile (%1)",
		txtMedium2: "Moyen (%1)",
		txtHard2: "Difficile (%1)",
		txtScoreCopy: "Aujourd'hui j'ai fait %1 – Moyenne %2 à Accuracity %3 ! – https://accura.city/%4%5",
		txtTop3: "Top 3 : %1 (%2km), %3 (%4km), %5 (%6km)",
		txtFlop3: "Flop 3 : %1 (%2km), %3 (%4km), %5 (%6km)",
		scoreSummary: "Partie terminée !<br>Score : %1<br>Moyenne : %2 – %3",
		txtButtonShowRecap: "Afficher un récap",
		txtButtonCopyMyScore: "Copier mon score",
		scoreImpressive: "Impressionnant !",
		scoreExcellent: "Excellent !",
		scoreGood: "Bien !",
		scoreAcceptable: "Acceptable",
		scoreDisappointing: "Décevant",
		scoreNil: "Nul !",
		txtRecapChallenge: "Défi du %1",
		txtRecapFreePractice: "Pratique libre – Difficulté : %1",
		txtRecapScore: "Score : %1 – Moyenne : %2 – %3",
		popupAlert: "La fenêtre pop-up est bloquée. Veuillez autoriser les pop-ups pour voir l'image.",
		txtScoreExplanations: `Explications concernant le score : <ul><li>Plus un score est faible, meilleur il est</li><li>Le score de chaque essai est égal à :<br>distance × coeff-difficulté</li><li>Le coeff-difficulté dépend du type de ville : 4 pour %1, 3 pour %2, 2 pour une %3, 1 pour une %4</li><li>Voici l'échelle d'appréciation d'un score : <br>%5</li></ul>`,
		txtCreditsMap: "Fond de carte %1",
		txtCreditsDataset: "Jeu de données %1",
		txtLegalMentions: "Mentions légales",
		txtCreditsGame: "Jeu développé par Olivier Genest",
		distanceFrom: "Distance de %1 (%2, %3) : %4km",
		txtOr: "ou",
		txtTitle: "AccuraCity – Localisez les villes sur une carte",
		change: "Changer de carte / langue",
		txtDifficulty: "Difficulté :",
		txtNoScript: "Activez javascript pour jouer À AccuraCity !",
	}
};

// Fonction pour récupérer une traduction
function translate(key, language) {
	// Vérifie si la langue est prise en charge
	if (!translations[language]) {
		console.error(`La langue "${language}" n'est pas prise en charge.`);
		return "";
	}

	// Vérifie si la clé de traduction existe dans la langue spécifiée
	if (!translations[language][key]) {
		console.error(`La clé "${key}" n'existe pas pour la langue "${language}".`);
		return "";
	}

	// Retourne la traduction correspondante
	return translations[language][key];
}

function i18n(key, language, ...values) {
	return dynamicReplace(translate(key, language), ...values);
}

function dynamicReplace(sentence, ...args) {
	return sentence.replace(/%(\d+)/g, (match, index) => {
		const argIndex = parseInt(index, 10) - 1;
		return args[argIndex] !== undefined ? args[argIndex] : match;
	});
}

function applyI18nToHtml(language, ...ids) {
	for (const id of ids) {
		document.getElementById(id).innerHTML = i18n(id, language);
	}
}