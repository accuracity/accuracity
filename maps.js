const maps = {
	fr: {
		name: "France",
		img: 'France_blank_1.svg',
		projection: 'mercator',
		topLeftGPS: { latitude: 52, longitude: -6 },
		topRightGPS: { latitude: 52, longitude: 10 },
		bottomLeftGPS: { latitude: 41, longitude: -6 },
		bottomRightGPS: { latitude: 41, longitude: 10 },
		width: 800,
		height: 800,
		categories: {
			veryeasy: { name: "Capitale", difficulty: "", coeff: 4, count: 1, totalCount: 1},
			easy: {name: "Préfecture de région", difficulty: "Préfetures de région (22)", coeff: 3, count: 21, totalCount: 22},
			medium: {name: "Préfecture", difficulty: "Préfetures (74)", coeff: 2, count: 74, totalCount: 96},
			hard: {name: "Sous-préfecture", difficulty: "Préfetures & sous-préfectures (22)", coeff: 1, count: 230, totalCount: 326}
		},
		csv: csvFR,
		scoreThresholds: {
			impressive: 50,
			excellent: 100,
			good: 200, 
			acceptable: 500,
			disappointing: 1000
		},
		daily: cityListsByDateFR,
		credits: {
			map: `CC-BY-SA – Eric Gaba (Wikimedia Commons user: <a href="https://commons.wikimedia.org/wiki/User:Sting" target="_blank">Sting</a>)`,
			dataset: `<a href="https://datastory-datactivist.opendatasoft.com/explore/dataset/dreal/information/" target="_blank">DREAL Poitou-Charentes</a>`
		}
	},
	us: {
		name: "USA",
		img: 'USA-Mercator-offset.svg',
		projection: 'mercator',
		topLeftGPS: {latitude: 56, longitude: -125.13},
		bottomLeftGPS: {latitude: 14.24809715729971, longitude: -125.13},
		topRightGPS: {latitude: 56, longitude: -66.63},
		bottomRightGPS: {latitude: 14.24809715729971, longitude: -66.63},
		//topLeftGPS: {latitude: 55.94483880124804, longitude: -125},
		//bottomLeftGPS: {latitude: 14.24809715729971, longitude: -125},
		//topRightGPS: {latitude: 55.94483880124804, longitude: -66.5},
		//bottomRightGPS: {latitude: 14.24809715729971, longitude: -66.5},
		//topLeftGPS: { latitude: 49.5, longitude: -125 },
		//topRightGPS: { latitude: 49.5, longitude: -66.5 },
		//bottomLeftGPS: { latitude: 24.3, longitude: -125 },
		//bottomRightGPS: { latitude: 24.3, longitude: -66.5 },
		width: 800,
		height: 726,
		categories: {
			veryeasy: { name: "Federal capital", difficulty: "", coeff: 4, count: 1, totalCount: 1},
			easy: {name: "State capital", difficulty: "State capitals (33)", coeff: 3, count: 31, totalCount: 32},
			medium: {name: "State largest city", difficulty: "State capitals & State largest cities (61)", coeff: 2, count: 29, totalCount: 61},
			hard: {name: "Large city", difficulty: "Top 333 largest cities", coeff: 1, count: 270, totalCount: 331}
		},
		csv: csvUS,
		scoreThresholds: {
			impressive: 100,
			excellent: 200,
			good: 500, 
			acceptable: 1000,
			disappointing: 2000
		},
		daily: cityListsByDateUS,
		credits: {
			map: `<a href="https://themapsmith.github.io/site/bootstrap/" target="_blank">Mapsmith</a>)`,
			dataset: `<a href="https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population" target="_blank">Wikipedia</a>`
		}
	},
	eu: {
		name: "Europe",
		img: 'Europe_laea_location_map.svg',
		//img: 'Europe_relief_laea_location_map.jpg',
		projection: 'laea',
		topLeftGPS: { latitude: 72.9617, longitude: -8.9067 },
		topRightGPS: { latitude: 72.9617, longitude: 58.9174 },
		bottomLeftGPS: { latitude: 33.2307, longitude: -8.9067 }, 
		bottomRightGPS: { latitude: 33.2307, longitude: 58.9174 },
		width: 800,
		height: 684,
		categories: {
			veryeasy: { name: "EU Capital", difficulty: "", coeff: 4, count: 1, totalCount: 1},
			easy: {name: "Capital", difficulty: "Capitals (46)", coeff: 3, count: 45, totalCount: 46},
			medium: {name: "Largest cities", difficulty: "Largest cities (87)", coeff: 2, count: 41, totalCount: 87},
			hard: {name: "Other cities", difficulty: "Top 256 largest cities", coeff: 1, count: 169, totalCount: 256}
		},
		csv: csvEU,
		scoreThresholds: {
			impressive: 100,
			excellent: 200,
			good: 500, 
			acceptable: 1000,
			disappointing: 2000
		},
		daily: cityListsByDateEU,
		credits: {
			map: `CC-BY-SA – Alexrk2 (Wikimedia Commons user: <a href="https://commons.m.wikimedia.org/wiki/User:Alexrk2" target="_blank">Alexrk2</a>)`,
			dataset: `<a href="https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/table/?disjunctive.cou_name_en&sort=population&refine.timezone=Europe" target="_blank">GeoNames</a>`
		}
	},
}