	//Données de base
	const csvUS = `Washington;DC;DC;veryeasy;38.90;-77.02
Austin;TX;TX;easy;30.30;-97.75
Sacramento;CA;CA;easy;38.57;-121.47
Raleigh;NC;NC;easy;35.83;-78.64
Saint Paul;MN;MN;easy;44.95;-93.10
Lincoln;NE;NE;easy;40.81;-96.68
Madison;WI;WI;easy;43.09;-89.43
Richmond;VA;VA;easy;37.53;-77.48
Baton Rouge;LA;LA;easy;30.44;-91.13
Tallahassee;FL;FL;easy;30.46;-84.25
Montgomery;AL;AL;easy;32.35;-86.27
Salem;OR;OR;easy;44.92;-123.02
Columbia;SC;SC;easy;34.04;-80.91
Topeka;KS;KS;easy;39.03;-95.69
Hartford;CT;CT;easy;41.77;-72.68
Springfield;IL;IL;easy;39.79;-89.64
Lansing;MI;MI;easy;42.71;-84.56
Albany;NY;NY;easy;42.67;-73.80
Phoenix;AZ;AZ;easy;33.57;-112.09
Columbus;OH;OH;easy;39.99;-82.99
Indianapolis;IN;IN;easy;39.78;-86.15
Denver;CO;CO;easy;39.76;-104.88
Oklahoma City;OK;OK;easy;35.47;-97.51
Nashville;TN;TN;easy;36.17;-86.79
Boston;MA;MA;easy;42.34;-71.02
Atlanta;GA;GA;easy;33.76;-84.42
Boise;ID;ID;easy;43.60;-116.23
Des Moines;IA;IA;easy;41.57;-93.61
Salt Lake City;UT;UT;easy;40.78;-111.93
Little Rock;AR;AR;easy;34.72;-92.36
Providence;RI;RI;easy;41.82;-71.42
Jackson;MS;MS;easy;32.32;-90.21
New York;NY;NY;medium;40.66;-73.94
Los Angeles;CA;CA;medium;34.02;-118.41
Chicago;IL;IL;medium;41.84;-87.68
Houston;TX;TX;medium;29.79;-95.39
Philadelphia;PA;PA;medium;40.01;-75.13
Jacksonville;FL;FL;medium;30.34;-81.66
Charlotte;NC;NC;medium;35.21;-80.83
Seattle;WA;WA;medium;47.62;-122.35
Las Vegas;NV;NV;medium;36.23;-115.26
Portland;OR;OR;medium;45.54;-122.65
Louisville;KY;KY;medium;38.17;-85.65
Detroit;MI;MI;medium;42.38;-83.10
Baltimore;MD;MD;medium;39.30;-76.61
Milwaukee;WI;WI;medium;43.06;-87.97
Albuquerque;NM;NM;medium;35.10;-106.65
Kansas City;MO;MO;medium;39.12;-94.56
Omaha;NE;NE;medium;41.26;-96.05
Virginia Beach;VA;VA;medium;36.78;-76.03
Minneapolis;MN;MN;medium;44.96;-93.27
Wichita;KS;KS;medium;37.69;-97.35
New Orleans;LA;LA;medium;30.05;-89.93
Newark;NJ;NJ;medium;40.72;-74.17
Huntsville;AL;AL;medium;34.78;-86.53
Sioux Falls;SD;SD;medium;43.54;-96.73
Charleston;SC;SC;medium;32.83;-79.97
Bridgeport;CT;CT;medium;41.19;-73.20
Fargo;ND;ND;medium;46.86;-96.83
Billings;MT;MT;medium;45.79;-108.55
Manchester;NH;NH;medium;42.98;-71.44
San Antonio;TX;TX;hard;29.46;-98.52
San Diego;CA;CA;hard;32.81;-117.14
Dallas;TX;TX;hard;32.79;-96.77
San Jose;CA;CA;hard;37.30;-121.81
Fort Worth;TX;TX;hard;32.78;-97.35
San Francisco;CA;CA;hard;37.73;-123.03
El Paso;TX;TX;hard;31.85;-106.43
Memphis;TN;TN;hard;35.11;-89.97
Tucson;AZ;AZ;hard;32.15;-110.87
Fresno;CA;CA;hard;36.78;-119.79
Mesa;AZ;AZ;hard;33.40;-111.72
Colorado Springs;CO;CO;hard;38.87;-104.76
Long Beach;CA;CA;hard;33.78;-118.17
Miami;FL;FL;hard;25.78;-80.21
Oakland;CA;CA;hard;37.77;-122.23
Tulsa;OK;OK;hard;36.13;-95.90
Bakersfield;CA;CA;hard;35.35;-119.04
Tampa;FL;FL;hard;27.97;-82.47
Arlington;TX;TX;hard;32.70;-97.12
Aurora;CO;CO;hard;39.70;-104.72
Cleveland;OH;OH;hard;41.48;-81.68
Anaheim;CA;CA;hard;33.86;-117.76
Henderson;NV;NV;hard;36.01;-115.04
Stockton;CA;CA;hard;37.98;-121.31
Riverside;CA;CA;hard;33.94;-117.39
Lexington;KY;KY;hard;38.04;-84.46
Corpus Christi;TX;TX;hard;27.75;-97.17
Orlando;FL;FL;hard;28.41;-81.25
Irvine;CA;CA;hard;33.68;-117.77
Cincinnati;OH;OH;hard;39.14;-84.51
Santa Ana;CA;CA;hard;33.74;-117.88
Pittsburgh;PA;PA;hard;40.44;-79.98
Greensboro;NC;NC;hard;36.10;-79.83
Durham;NC;NC;hard;35.98;-78.90
Plano;TX;TX;hard;33.05;-96.75
Jersey City;NJ;NJ;hard;40.71;-74.06
St. Louis;MO;MO;hard;38.64;-90.24
Chandler;AZ;AZ;hard;33.28;-111.85
North Las Vegas;NV;NV;hard;36.28;-115.09
Chula Vista;CA;CA;hard;32.63;-117.02
Buffalo;NY;NY;hard;42.89;-78.86
Gilbert;AZ;AZ;hard;33.31;-111.74
Reno;NV;NV;hard;39.55;-119.85
Fort Wayne;IN;IN;hard;41.09;-85.14
Toledo;OH;OH;hard;41.66;-83.58
Lubbock;TX;TX;hard;33.57;-101.89
St. Petersburg;FL;FL;hard;27.77;-82.64
Laredo;TX;TX;hard;27.56;-99.49
Irving;TX;TX;hard;32.86;-96.97
Chesapeake;VA;VA;hard;36.68;-76.30
Glendale;AZ;AZ;hard;33.53;-112.19
Winston-Salem;NC;NC;hard;36.10;-80.26
Scottsdale;AZ;AZ;hard;33.68;-111.86
Garland;TX;TX;hard;32.91;-96.63
Norfolk;VA;VA;hard;36.92;-76.24
Port St. Lucie;FL;FL;hard;27.28;-80.39
Spokane;WA;WA;hard;47.67;-117.43
Fremont;CA;CA;hard;37.49;-121.94
Tacoma;WA;WA;hard;47.25;-122.46
Santa Clarita;CA;CA;hard;34.41;-118.49
San Bernardino;CA;CA;hard;34.14;-117.29
Hialeah;FL;FL;hard;25.87;-80.30
Frisco;TX;TX;hard;33.16;-96.82
Modesto;CA;CA;hard;37.64;-121.00
Cape Coral;FL;FL;hard;26.65;-81.99
Fontana;CA;CA;hard;34.11;-117.46
Moreno Valley;CA;CA;hard;33.92;-117.21
Rochester;NY;NY;hard;43.17;-77.62
Fayetteville;NC;NC;hard;35.08;-78.97
Yonkers;NY;NY;hard;40.95;-73.87
McKinney;TX;TX;hard;33.20;-96.66
Worcester;MA;MA;hard;42.27;-71.81
Columbus;GA;GA;hard;32.51;-84.87
Augusta;GA;GA;hard;33.37;-82.07
Grand Prairie;TX;TX;hard;32.69;-97.02
Amarillo;TX;TX;hard;35.20;-101.83
Oxnard;CA;CA;hard;34.20;-119.21
Peoria;AZ;AZ;hard;33.79;-112.31
Overland Park;KS;KS;hard;38.89;-94.69
Birmingham;AL;AL;hard;33.53;-86.80
Grand Rapids;MI;MI;hard;42.96;-85.66
Knoxville;TN;TN;hard;35.97;-83.95
Vancouver;WA;WA;hard;45.64;-122.60
Huntington Beach;CA;CA;hard;33.70;-118.00
Brownsville;TX;TX;hard;26.00;-97.45
Glendale;CA;CA;hard;34.18;-118.25
Akron;OH;OH;hard;41.08;-81.52
Tempe;AZ;AZ;hard;33.39;-111.93
Newport News;VA;VA;hard;37.08;-76.52
Chattanooga;TN;TN;hard;35.07;-85.25
Mobile;AL;AL;hard;30.67;-88.10
Fort Lauderdale;FL;FL;hard;26.14;-80.15
Cary;NC;NC;hard;35.78;-78.82
Shreveport;LA;LA;hard;32.47;-93.79
Ontario;CA;CA;hard;34.04;-117.60
Eugene;OR;OR;hard;44.06;-123.12
Aurora;IL;IL;hard;41.76;-88.29
Elk Grove;CA;CA;hard;38.41;-121.38
Santa Rosa;CA;CA;hard;38.45;-122.71
Clarksville;TN;TN;hard;36.57;-87.35
Rancho Cucamonga;CA;CA;hard;34.12;-117.56
Oceanside;CA;CA;hard;33.22;-117.31
Springfield;MO;MO;hard;37.19;-93.29
Pembroke Pines;FL;FL;hard;26.01;-80.34
Garden Grove;CA;CA;hard;33.78;-117.96
Fort Collins;CO;CO;hard;40.55;-105.06
Lancaster;CA;CA;hard;34.69;-118.18
Palmdale;CA;CA;hard;34.59;-118.11
Murfreesboro;TN;TN;hard;35.85;-86.42
Salinas;CA;CA;hard;36.69;-121.63
Corona;CA;CA;hard;33.86;-117.57
Killeen;TX;TX;hard;31.08;-97.73
Hayward;CA;CA;hard;37.63;-122.10
Paterson;NJ;NJ;hard;40.91;-74.16
Macon;GA;GA;hard;32.81;-83.69
Lakewood;CO;CO;hard;39.70;-105.12
Alexandria;VA;VA;hard;38.82;-77.08
Roseville;CA;CA;hard;38.77;-121.32
Surprise;AZ;AZ;hard;33.67;-112.45
Springfield;MA;MA;hard;42.12;-72.54
Kansas City;KS;KS;hard;39.12;-94.74
Sunnyvale;CA;CA;hard;37.39;-122.03
Bellevue;WA;WA;hard;47.60;-122.16
Hollywood;FL;FL;hard;26.03;-80.16
Denton;TX;TX;hard;33.22;-97.14
Escondido;CA;CA;hard;33.13;-117.07
Joliet;IL;IL;hard;41.52;-88.15
Naperville;IL;IL;hard;41.75;-88.16
Savannah;GA;GA;hard;32.00;-81.15
Mesquite;TX;TX;hard;32.76;-96.59
Pasadena;TX;TX;hard;29.65;-95.15
Rockford;IL;IL;hard;42.26;-89.06
Pomona;CA;CA;hard;34.06;-117.76
Olathe;KS;KS;hard;38.88;-94.82
Gainesville;FL;FL;hard;29.68;-82.35
McAllen;TX;TX;hard;26.22;-98.25
Syracuse;NY;NY;hard;43.04;-76.14
Waco;TX;TX;hard;31.56;-97.19
Visalia;CA;CA;hard;36.33;-119.33
Thornton;CO;CO;hard;39.92;-104.94
Torrance;CA;CA;hard;33.83;-118.36
Fullerton;CA;CA;hard;33.89;-117.93
Lakewood;NJ;NJ;hard;40.08;-74.20
New Haven;CT;CT;hard;41.31;-72.92
Hampton;VA;VA;hard;37.05;-76.30
Miramar;FL;FL;hard;25.97;-80.34
Victorville;CA;CA;hard;34.53;-117.35
Warren;MI;MI;hard;42.49;-83.03
West Valley City;UT;UT;hard;40.69;-112.01
Cedar Rapids;IA;IA;hard;41.97;-91.68
Stamford;CT;CT;hard;41.08;-73.55
Orange;CA;CA;hard;33.79;-117.86
Dayton;OH;OH;hard;39.78;-84.20
Midland;TX;TX;hard;32.02;-102.11
Kent;WA;WA;hard;47.39;-122.21
Elizabeth;NJ;NJ;hard;40.67;-74.19
Pasadena;CA;CA;hard;34.16;-118.14
Carrollton;TX;TX;hard;32.99;-96.90
Coral Springs;FL;FL;hard;26.27;-80.26
Sterling Heights;MI;MI;hard;42.58;-83.03
Lewisville;TX;TX;hard;33.05;-96.98
Meridian;ID;ID;hard;43.61;-116.40
Norman;OK;OK;hard;35.24;-97.35
Palm Bay;FL;FL;hard;27.96;-80.66
Athens;GA;GA;hard;33.95;-83.37
Columbia;MO;MO;hard;38.95;-92.33
Abilene;TX;TX;hard;32.45;-99.74
Pearland;TX;TX;hard;29.56;-95.32
Santa Clara;CA;CA;hard;37.36;-121.97
Round Rock;TX;TX;hard;30.53;-97.66
Allentown;PA;PA;hard;40.59;-75.48
Clovis;CA;CA;hard;36.83;-119.68
Simi Valley;CA;CA;hard;34.27;-118.75
College Station;TX;TX;hard;30.59;-96.30
Thousand Oaks;CA;CA;hard;34.19;-118.87
Vallejo;CA;CA;hard;38.11;-122.26
Concord;CA;CA;hard;37.97;-122.00
Rochester;MN;MN;hard;44.02;-92.48
Arvada;CO;CO;hard;39.83;-105.15
Lafayette;LA;LA;hard;30.21;-92.03
Independence;MO;MO;hard;39.09;-94.35
West Palm Beach;FL;FL;hard;26.75;-80.13
Wilmington;NC;NC;hard;34.21;-77.89
Lakeland;FL;FL;hard;28.06;-81.95
Ann Arbor;MI;MI;hard;42.28;-83.73
Fairfield;CA;CA;hard;38.26;-122.03
Berkeley;CA;CA;hard;37.87;-122.30
Richardson;TX;TX;hard;32.97;-96.71
North Charleston;SC;SC;hard;32.92;-80.07
Cambridge;MA;MA;hard;42.38;-71.12
Broken Arrow;OK;OK;hard;36.04;-95.78
Clearwater;FL;FL;hard;27.98;-82.77
West Jordan;UT;UT;hard;40.60;-112.00
Evansville;IN;IN;hard;37.99;-87.53
League City;TX;TX;hard;29.49;-95.11
Antioch;CA;CA;hard;37.98;-121.80
High Point;NC;NC;hard;35.99;-79.99
Waterbury;CT;CT;hard;41.56;-73.04
Westminster;CO;CO;hard;39.88;-105.06
Richmond;CA;CA;hard;37.95;-122.36
Carlsbad;CA;CA;hard;33.13;-117.28
Las Cruces;NM;NM;hard;32.33;-106.79
Murrieta;CA;CA;hard;33.57;-117.19
Lowell;MA;MA;hard;42.64;-71.32
Provo;UT;UT;hard;40.25;-111.65
Elgin;IL;IL;hard;42.04;-88.33
Odessa;TX;TX;hard;31.88;-102.35
Pompano Beach;FL;FL;hard;26.24;-80.13
Beaumont;TX;TX;hard;30.08;-94.15
Temecula;CA;CA;hard;33.49;-117.13
Gresham;OR;OR;hard;45.50;-122.44
Allen;TX;TX;hard;33.11;-96.67
Pueblo;CO;CO;hard;38.27;-104.61
Everett;WA;WA;hard;47.95;-122.19
South Fulton;GA;GA;hard;33.66;-84.57
Peoria;IL;IL;hard;40.75;-89.62
Nampa;ID;ID;hard;43.58;-116.56
Tuscaloosa;AL;AL;hard;33.23;-87.53
Miami Gardens;FL;FL;hard;25.95;-80.24
Santa Maria;CA;CA;hard;34.93;-120.44
Downey;CA;CA;hard;33.94;-118.13
Concord;NC;NC;hard;35.39;-80.64
Ventura;CA;CA;hard;34.27;-119.25
Costa Mesa;CA;CA;hard;33.67;-117.91
Sugar Land;TX;TX;hard;29.59;-95.63
Menifee;CA;CA;hard;33.69;-117.18
Tyler;TX;TX;hard;32.32;-95.31
Sparks;NV;NV;hard;39.57;-119.72
Greeley;CO;CO;hard;40.41;-104.77
Rio Rancho;NM;NM;hard;35.29;-106.70
Sandy Springs;GA;GA;hard;33.93;-84.37
Dearborn;MI;MI;hard;42.31;-83.21
Jurupa Valley;CA;CA;hard;34.00;-117.47
Edison;NJ;NJ;hard;40.50;-74.35
Spokane Valley;WA;WA;hard;47.66;-117.23
Hillsboro;OR;OR;hard;45.53;-122.94
Davie;FL;FL;hard;26.08;-80.28
Green Bay;WI;WI;hard;44.52;-87.99
Centennial;CO;CO;hard;39.59;-104.87
Buckeye;AZ;AZ;hard;33.43;-112.64
Boulder;CO;CO;hard;40.02;-105.25
Goodyear;AZ;AZ;hard;33.25;-112.37
El Monte;CA;CA;hard;34.07;-118.03
West Covina;CA;CA;hard;34.06;-117.91
Brockton;MA;MA;hard;42.08;-71.02
New Braunfels;TX;TX;hard;29.70;-98.12
El Cajon;CA;CA;hard;32.80;-116.96
Edinburg;TX;TX;hard;26.32;-98.16
Renton;WA;WA;hard;47.48;-122.19
Burbank;CA;CA;hard;34.19;-118.33
Inglewood;CA;CA;hard;33.96;-118.34
Rialto;CA;CA;hard;34.12;-117.39
Lee's Summit;MO;MO;hard;38.92;-94.38
Bend;OR;OR;hard;44.06;-121.31
Woodbridge;NJ;NJ;hard;40.56;-74.29
South Bend;IN;IN;hard;41.68;-86.27
Wichita Falls;TX;TX;hard;33.91;-98.53
St. George;UT;UT;hard;37.08;-113.56
Fishers;IN;IN;hard;39.96;-85.97
Carmel;IN;IN;hard;39.97;-86.15
Vacaville;CA;CA;hard;38.36;-121.97
Quincy;MA;MA;hard;42.26;-71.01
Conroe;TX;TX;hard;30.32;-95.49
Chico;CA;CA;hard;39.76;-121.82
San Mateo;CA;CA;hard;37.56;-122.31
Lynn;MA;MA;hard;42.47;-70.96
Hesperia;CA;CA;hard;34.40;-117.32
New Bedford;MA;MA;hard;41.66;-70.94
Davenport;IA;IA;hard;41.56;-90.60
Daly City;CA;CA;hard;37.69;-122.47
`;