	//Données de base
	const csvEU = `Brussels;Belgium;Belgium;veryeasy;50.85045;4.34878
Andorra la Vella;Andorra;Andorra;easy;42.50779;1.52109
Reykjavik;Iceland;Iceland;easy;64.13548;-21.89541
Vaduz;Liechtenstein;Liechtenstein;easy;47.14151;9.52154
Luxembourg;Luxembourg;Luxembourg;easy;49.54083;6.20083
Valletta;Malta;Malta;easy;35.89968;14.5148
Monaco;Monaco;Monaco;easy;43.73976;7.42732
San Marino;San Marino;San Marino;easy;43.9428779;12.4600933
Vatican City;Vatican;Vatican;easy;41.90268;12.45414
Moscow;Russian Federation;Russian Federation;easy;55.75222;37.61556
London;United Kingdom;United Kingdom;easy;51.50853;-0.12574
Berlin;Germany;Germany;easy;52.52437;13.41053
Madrid;Spain;Spain;easy;40.4165;-3.70256
Kyiv;Ukraine;Ukraine;easy;50.45466;30.5238
Rome;Italy;Italy;easy;41.89193;12.51133
Paris;France;France;easy;48.85341;2.3488
Bucharest;Romania;Romania;easy;44.43225;26.10626
Minsk;Belarus;Belarus;easy;53.9;27.56667
Budapest;Hungary;Hungary;easy;47.49835;19.04045
Warsaw;Poland;Poland;easy;52.22977;21.01178
Vienna;Austria;Austria;easy;48.20849;16.37208
Stockholm;Sweden;Sweden;easy;59.32938;18.06871
Belgrade;Serbia;Serbia;easy;44.80401;20.46513
Prague;Czech Republic;Czech Republic;easy;50.08804;14.42076
Copenhagen;Denmark;Denmark;easy;55.67594;12.56553
Sofia;Bulgaria;Bulgaria;easy;42.69751;23.32415
Dublin;Ireland;Ireland;easy;53.33306;-6.24889
Riga;Latvia;Latvia;easy;56.946;24.10589
Amsterdam;Netherlands;Netherlands;easy;52.37403;4.88969
Sarajevo;Bosnia and Herzegovina;Bosnia and Herzegovina;easy;43.84864;18.35644
Athens;Greece;Greece;easy;37.98376;23.72784
Zagreb;Croatia;Croatia;easy;45.81444;15.97798
Helsinki;Finland;Finland;easy;60.16952;24.93545
Chisinau;Moldova, Republic of;Moldova, Republic of;easy;47.00556;28.8575
Oslo;Norway;Norway;easy;59.91273;10.74609
Pristina;Kosovo;Kosovo;easy;42.67272;21.16688
Vilnius;Lithuania;Lithuania;easy;54.68916;25.2798
Lisbon;Portugal;Portugal;easy;38.71667;-9.13333
Skopje;Macedonia, The former Yugoslav Rep. of;Macedonia, The former Yugoslav Rep. of;easy;41.99646;21.43141
Bratislava;Slovakia;Slovakia;easy;48.14816;17.10674
Tirana;Albania;Albania;easy;41.3275;19.81889
Tallinn;Estonia;Estonia;easy;59.43696;24.75353
Ljubljana;Slovenia;Slovenia;easy;46.05108;14.50513
Podgorica;Montenegro;Montenegro;easy;42.44111;19.26361
Bern;Switzerland;Switzerland;easy;46.94809;7.44744
Istanbul;Turkey;Turkey;medium;41.01384;28.94966
Saint Petersburg;Russian Federation;Russian Federation;medium;59.93863;30.31413
Sintra;Portugal;Portugal;medium;38.798;-9.386
Hamburg;Germany;Germany;medium;53.55073;9.99302
Barcelona;Spain;Spain;medium;41.38879;2.15899
Kharkiv;Ukraine;Ukraine;medium;49.98081;36.25272
Milan;Italy;Italy;medium;45.46427;9.18951
Munich;Germany;Germany;medium;48.13743;11.57549
Kazan;Russian Federation;Russian Federation;medium;55.78874;49.12214
Samara;Russian Federation;Russian Federation;medium;53.20007;50.15
Birmingham;United Kingdom;United Kingdom;medium;52.48142;-1.89983
Odesa;Ukraine;Ukraine;medium;46.48572;30.74383
Cologne;Germany;Germany;medium;50.93333;6.95
Naples;Italy;Italy;medium;40.85216;14.26811
Marseille;France;France;medium;43.29695;5.38107
Turin;Italy;Italy;medium;45.07049;7.68682
Valencia;Spain;Spain;medium;39.47391;-0.37966
Lódz;Poland;Poland;medium;51.77058;19.47395
Kraków;Poland;Poland;medium;50.06143;19.93658
Zaragoza;Spain;Spain;medium;41.65606;-0.87734
Frankfurt;Germany;Germany;medium;50.11552;8.68417
Palermo;Italy;Italy;medium;38.1166;13.3636
Wroclaw;Poland;Poland;medium;51.1;17.03333
Stuttgart;Germany;Germany;medium;48.78232;9.17702
Rotterdam;Netherlands;Netherlands;medium;51.9225;4.47917
Genoa;Italy;Italy;medium;44.40478;8.94439
Málaga;Spain;Spain;medium;36.72016;-4.42034
Poznan;Poland;Poland;medium;52.40692;16.92993
Lyon;France;France;medium;45.74846;4.84671
Toulouse;France;France;medium;43.60426;1.44367
The Hague;Netherlands;Netherlands;medium;52.07667;4.29861
Gdansk;Poland;Poland;medium;54.35227;18.64912
Brno;Czech Republic;Czech Republic;medium;49.19522;16.60796
Utrecht;Netherlands;Netherlands;medium;52.09083;5.12222
Malmö;Sweden;Sweden;medium;55.60587;13.00073
Plovdiv;Bulgaria;Bulgaria;medium;42.15;24.75
Nice;France;France;medium;43.70313;7.26608
Nantes;France;France;medium;47.21725;-1.55336
Varna;Bulgaria;Bulgaria;medium;43.21667;27.91667
Graz;Austria;Austria;medium;47.06667;15.45
Kaunas;Lithuania;Lithuania;medium;54.90272;23.90961
Espoo;Finland;Finland;medium;60.2052;24.6522
Voronezh;Russian Federation;Russian Federation;hard;51.67204;39.1843
Volgograd;Russian Federation;Russian Federation;hard;48.71939;44.50183
Dnipro;Ukraine;Ukraine;hard;48.46664;35.04066
Donetsk;Ukraine;Ukraine;hard;48.023;37.80224
Krasnodar;Russian Federation;Russian Federation;hard;45.04484;38.97603
Liverpool;United Kingdom;United Kingdom;hard;53.41058;-2.97794
Lviv;Ukraine;Ukraine;hard;49.83826;24.02324
Zaporizhzhya;Ukraine;Ukraine;hard;47.85167;35.11714
Seville;Spain;Spain;hard;37.38283;-5.97317
Glasgow;United Kingdom;United Kingdom;hard;55.86515;-4.25763
Düsseldorf;Germany;Germany;hard;51.22172;6.77616
Kryvyy Rih;Ukraine;Ukraine;hard;47.90572;33.39404
Leipzig;Germany;Germany;hard;51.33962;12.37129
Essen;Germany;Germany;hard;51.45657;7.01228
Gothenburg;Sweden;Sweden;hard;57.70716;11.96679
Sheffield;United Kingdom;United Kingdom;hard;53.38297;-1.4659
Sevastopol;Ukraine;Ukraine;hard;44.60795;33.52134
Antwerp;Belgium;Belgium;hard;51.22047;4.40026
Homyel';Belarus;Belarus;hard;52.4345;30.9754
Leeds;United Kingdom;United Kingdom;hard;53.79648;-1.54785
Edinburgh;United Kingdom;United Kingdom;hard;55.95206;-3.19648
Mykolayiv;Ukraine;Ukraine;hard;46.97625;31.99296
Bristol;United Kingdom;United Kingdom;hard;51.45523;-2.59665
Murcia;Spain;Spain;hard;37.98704;-1.13004
Cardiff;United Kingdom;United Kingdom;hard;51.48;-3.18
Palma;Spain;Spain;hard;39.56939;2.65024
Szczecin;Poland;Poland;hard;53.42894;14.55302
Manchester;United Kingdom;United Kingdom;hard;53.48095;-2.23743
Bologna;Italy;Italy;hard;44.49381;11.33875
Iasi;Romania;Romania;hard;47.16667;27.6
Hrodna;Belarus;Belarus;hard;53.6884;23.8258
Mahilyow;Belarus;Belarus;hard;53.9168;30.3449
Florence;Italy;Italy;hard;43.77925;11.24626
Bydgoszcz;Poland;Poland;hard;53.1235;18.00762
Brest;Belarus;Belarus;hard;52.09755;23.68775
Lublin;Poland;Poland;hard;51.25;22.56667
Bilbao;Spain;Spain;hard;43.26271;-2.92528
Vitebsk;Belarus;Belarus;hard;55.1904;30.2049
Zürich;Switzerland;Switzerland;hard;47.36667;8.55
Alicante;Spain;Spain;hard;38.34517;-0.48149
Constanta;Romania;Romania;hard;44.18073;28.63432
Thessaloniki;Greece;Greece;hard;40.64361;22.93086
Katowice;Poland;Poland;hard;50.25841;19.02754
Cluj-Napoca;Romania;Romania;hard;46.76667;23.6
Bari;Italy;Italy;hard;41.12066;16.86982
Timisoara;Romania;Romania;hard;45.75372;21.22571
Catania;Italy;Italy;hard;37.49223;15.07041
Craiova;Romania;Romania;hard;44.31667;23.8
Galati;Romania;Romania;hard;45.43687;28.05028
Bergen;Norway;Norway;hard;60.39299;5.32415
Aarhus;Denmark;Denmark;hard;56.15674;10.21076
Ostrava;Czech Republic;Czech Republic;hard;49.83465;18.28204
Strasbourg;France;France;hard;48.58392;7.74553
Gent;Belgium;Belgium;hard;51.05;3.71667
Bordeaux;France;France;hard;44.84044;-0.5805
Brasov;Romania;Romania;hard;45.64861;25.60613
Niš;Serbia;Serbia;hard;43.32472;21.90333
Porto;Portugal;Portugal;hard;41.14961;-8.61099
Montpellier;France;France;hard;43.61093;3.87635
Tampere;Finland;Finland;hard;61.49911;23.78712
Groningen;Netherlands;Netherlands;hard;53.21917;6.56667
Ploiesti;Romania;Romania;hard;44.95;26.01667
Košice;Slovakia;Slovakia;hard;48.71395;21.25808
Banja Luka;Bosnia and Herzegovina;Bosnia and Herzegovina;hard;44.77842;17.19386
Novi Sad;Serbia;Serbia;hard;45.25167;19.83694
Trondheim;Norway;Norway;hard;63.43049;10.39506
Babruysk;Belarus;Belarus;hard;53.1384;29.2214
Oulu;Finland;Finland;hard;65.01236;25.46816
Eindhoven;Netherlands;Netherlands;hard;51.44083;5.47778
Linz;Austria;Austria;hard;48.30639;14.28611
Debrecen;Hungary;Hungary;hard;47.53167;21.62444
Charleroi;Belgium;Belgium;hard;50.41136;4.44448
Tilburg;Netherlands;Netherlands;hard;51.55551;5.0913
Burgas;Bulgaria;Bulgaria;hard;42.50606;27.46781
Turku;Finland;Finland;hard;60.45148;22.26869
Liège;Belgium;Belgium;hard;50.63373;5.56749
Cork;Ireland;Ireland;hard;51.89797;-8.47061
Vantaa;Finland;Finland;hard;60.29414;25.04099
Genève;Switzerland;Switzerland;hard;46.20222;6.14569
Odense;Denmark;Denmark;hard;55.39594;10.38831
Baranovichi;Belarus;Belarus;hard;53.13253;26.00774
Uppsala;Sweden;Sweden;hard;59.85882;17.63889
Almere Stad;Netherlands;Netherlands;hard;52.37025;5.21413
Klaipeda;Lithuania;Lithuania;hard;55.7068;21.13912
Prizren;Kosovo;Kosovo;hard;42.21389;20.73972
Pilsen;Czech Republic;Czech Republic;hard;49.74747;13.37759
Pátra;Greece;Greece;hard;38.24444;21.73444
Breda;Netherlands;Netherlands;hard;51.58656;4.77596
Linköping;Sweden;Sweden;hard;58.41086;15.62157
Basel;Switzerland;Switzerland;hard;47.55839;7.57327
Zenica;Bosnia and Herzegovina;Bosnia and Herzegovina;hard;44.20169;17.90397
Szeged;Hungary;Hungary;hard;46.253;20.14824
Nijmegen;Netherlands;Netherlands;hard;51.8425;5.85278
Salzburg;Austria;Austria;hard;47.79941;13.04399
Tiraspol;Moldova, Republic of;Moldova, Republic of;hard;46.84274;29.62909
Örebro;Sweden;Sweden;hard;59.27412;15.2066
Miskolc;Hungary;Hungary;hard;48.10306;20.77806
Split;Croatia;Croatia;hard;43.50891;16.43915
Kragujevac;Serbia;Serbia;hard;44.01667;20.91667
Lárisa;Greece;Greece;hard;39.63689;22.41761
Pécs;Hungary;Hungary;hard;46.0725;18.23083
Barysaw;Belarus;Belarus;hard;54.2279;28.505
Stavanger;Norway;Norway;hard;58.97005;5.73332
Jyväskylä;Finland;Finland;hard;62.24147;25.72088
Stara Zagora;Bulgaria;Bulgaria;hard;42.43278;25.64194
Ruse;Bulgaria;Bulgaria;hard;43.84872;25.9534
Aalborg;Denmark;Denmark;hard;57.048;9.9187
Tuzla;Bosnia and Herzegovina;Bosnia and Herzegovina;hard;44.53842;18.66709
Lausanne;Switzerland;Switzerland;hard;46.516;6.63282
Irákleion;Greece;Greece;hard;35.32787;25.14341
Innsbruck;Austria;Austria;hard;47.26266;11.39454
Pinsk;Belarus;Belarus;hard;52.12153;26.06726
Umeå;Sweden;Sweden;hard;63.82842;20.25972
Györ;Hungary;Hungary;hard;47.68333;17.63512
Västerås;Sweden;Sweden;hard;59.61617;16.55276
Balti;Moldova, Republic of;Moldova, Republic of;hard;47.76314;27.92932
Durrës;Albania;Albania;hard;41.32355;19.45469
Kuopio;Finland;Finland;hard;62.89238;27.67703
Braga;Portugal;Portugal;hard;41.55032;-8.42005
Lahti;Finland;Finland;hard;60.98267;25.66151
Brugge;Belgium;Belgium;hard;51.20892;3.22424
Nyíregyháza;Hungary;Hungary;hard;47.95539;21.71671
Setúbal;Portugal;Portugal;hard;38.5244;-8.8882
Cacak;Serbia;Serbia;hard;43.89139;20.34972
Daugavpils;Latvia;Latvia;hard;55.88333;26.53333
Namur;Belgium;Belgium;hard;50.4669;4.86746
Bender;Moldova, Republic of;Moldova, Republic of;hard;46.83156;29.47769
Rijeka;Croatia;Croatia;hard;45.32673;14.44241
Mitrovicë;Kosovo;Kosovo;hard;42.88333;20.86667
Coimbra;Portugal;Portugal;hard;40.20564;-8.41955
Mostar;Bosnia and Herzegovina;Bosnia and Herzegovina;hard;43.34333;17.80806
Drammen;Norway;Norway;hard;59.74389;10.20449
Liberec;Czech Republic;Czech Republic;hard;50.76711;15.05619
Leuven;Belgium;Belgium;hard;50.87959;4.70093
Pleven;Bulgaria;Bulgaria;hard;43.41667;24.61667
Elbasan;Albania;Albania;hard;41.1125;20.08222
Subotica;Serbia;Serbia;hard;46.1;19.66667
Olomouc;Czech Republic;Czech Republic;hard;49.59552;17.25175
Šiauliai;Lithuania;Lithuania;hard;55.93333;23.31667
Acharnés;Greece;Greece;hard;38.08333;23.73333
Maribor;Slovenia;Slovenia;hard;46.55472;15.64667
Leskovac;Serbia;Serbia;hard;42.99806;21.94611
Limerick;Ireland;Ireland;hard;52.66472;-8.62306
Gjakovë;Kosovo;Kosovo;hard;42.38028;20.43083
Ceské Budejovice;Czech Republic;Czech Republic;hard;48.97447;14.47434
Kristiansand;Norway;Norway;hard;58.14671;7.9956
`;