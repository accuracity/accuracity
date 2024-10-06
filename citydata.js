	//Données de base
	const csvFR = `Paris;75056;75;veryeasy;48.85680578;2.344701659
Marseille;13055;13;easy;43.30021299;5.380122965
Caen;14118;14;easy;49.18104653;-0.356489581
Dijon;21231;21;easy;47.32016338;5.036037194
Besançon;25056;25;easy;47.23840153;6.025019975
Ajaccio;2A004;2A;easy;41.92594489;8.736636309
Toulouse;31555;31;easy;43.60272007;1.441503457
Bordeaux;33063;33;easy;44.84267933;-0.572916795
Montpellier;34172;34;easy;43.60694771;3.875238131
Rennes;35238;35;easy;48.10859515;-1.679234871
Nantes;44109;44;easy;47.21684206;-1.55150231
Orléans;45234;45;easy;47.90003167;1.905768552
Châlons-en-Champagne;51108;51;easy;48.9572047;4.36531986
Metz;57463;57;easy;49.11821129;6.175534871
Lille;59350;59;easy;50.62993097;3.062322331
Clermont-Ferrand;63113;63;easy;45.77947197;3.088490576
Strasbourg;67482;67;easy;48.58521746;7.736631138
Lyon;69123;69;easy;45.76236133;4.834514903
Rouen;76540;76;easy;49.4419772;1.09040446
Amiens;80021;80;easy;49.89359275;2.299450265
Poitiers;86194;86;easy;46.58177607;0.344343866
Limoges;87085;87;easy;45.8364187;1.262120984
Bourg-en-Bresse;01053;01;medium;46.20372963;5.22669494
Laon;02408;02;medium;49.57155164;3.619385081
Moulins;03190;03;medium;46.5625029;3.329100335
Digne-les-bains;04070;04;medium;44.08600926;6.217695712
Gap;05061;05;medium;44.55828753;6.077698399
Nice;06088;06;medium;43.70154705;7.261721669
Privas;07186;07;medium;44.72842753;4.592244755
Charleville-Mézières;08105;08;medium;49.7696874;4.723448154
Foix;09122;09;medium;42.96511413;1.607005737
Troyes;10387;10;medium;48.29646122;4.074777794
Carcassonne;11069;11;medium;43.21379098;2.352004518
Rodez;12202;12;medium;44.35793053;2.576832369
Aurillac;15014;15;medium;44.92754906;2.442479204
Angoulême;16015;16;medium;45.65180333;0.158461079
La Rochelle;17300;17;medium;46.15671984;-1.147801096
Bourges;18033;18;medium;47.08520899;2.394756369
Tulle;19272;19;medium;45.26849926;1.770660944
Saint-Brieuc;22278;22;medium;48.50998617;-2.763184581
Guéret;23096;23;medium;46.17212959;1.868300399
Périgueux;24322;24;medium;45.18935089;0.707015596
Valence;26362;26;medium;44.93095925;4.893296791
Evreux;27229;27;medium;49.0236015;1.152616776
Chartres;28085;28;medium;48.44581714;1.503148778
Quimper;29232;29;medium;47.99591135;-4.10209193
Bastia;2B033;2B;medium;42.69811511;9.449946056
Nîmes;30189;30;medium;43.83660084;4.359331163
Auch;32013;32;medium;43.64692236;0.588426332
Châteauroux;36044;36;medium;46.8094721;1.692028808
Tours;37261;37;medium;47.3954134;0.693427643
Grenoble;38185;38;medium;45.18554497;5.71507975
Lons-le-Saunier;39300;39;medium;46.67533504;5.55414807
Mont-de-Marsan;40192;40;medium;43.89127131;-0.50014889
Blois;41018;41;medium;47.58827001;1.330237262
Saint-Etienne;42218;42;medium;45.44063981;4.390834812
Le-Puy-en-Velay;43157;43;medium;45.04330516;3.885819449
Cahors;46042;46;medium;44.45101309;1.435285204
Agen;47001;47;medium;44.2041029;0.618606636
Mende;48095;48;medium;44.51834169;3.498572923
Angers;49007;49;medium;47.47047683;-0.555012766
Saint-Lô;50502;50;medium;49.11641345;-1.090142254
Chaumont;52121;52;medium;48.10546472;5.141790006
Laval;53130;53;medium;48.07002516;-0.771862445
Nancy;54395;54;medium;48.68961049;6.187406613
Bar-le-Duc;55029;55;medium;48.77389238;5.159970441
Vannes;56260;56;medium;47.65878023;-2.758089809
Nevers;58194;58;medium;46.98861308;3.159893113
Beauvais;60057;60;medium;49.43128031;2.084799422
Alençon;61001;61;medium;48.43080856;0.08661913
Arras;62041;62;medium;50.29158452;2.775516299
Pau;64445;64;medium;43.30061005;-0.369120661
Tarbes;65440;65;medium;43.23370805;0.073336348
Perpignan;66136;66;medium;42.69509417;2.893950148
Colmar;68066;68;medium;48.07817738;7.356119355
Vesoul;70550;70;medium;47.62158889;6.156360036
Mâcon;71270;71;medium;46.30413858;4.831134525
Le Mans;72181;72;medium;47.98564468;0.192800972
Chambéry;73065;73;medium;45.56564495;5.921764808
Annecy;74010;74;medium;45.91198224;6.125507968
Melun;77288;77;medium;48.54163728;2.658873488
Versailles;78646;78;medium;48.80474628;2.128281366
Niort;79191;79;medium;46.32398136;-0.460212512
Albi;81004;81;medium;43.92671564;2.147476256
Montauban;82121;82;medium;44.0194535;1.35405712
Toulon;83137;83;medium;43.12671786;5.927966529
Avignon;84007;84;medium;43.94806604;4.80846246
La Roche-sur-Yon;85191;85;medium;46.67064968;-1.426138896
Epinal;88160;88;medium;48.18308713;6.444585547
Auxerre;89024;89;medium;47.7965216;3.570867776
Belfort;90010;90;medium;47.64309725;6.856290891
Evry;91228;91;medium;48.63136408;2.442708296
Nanterre;92050;92;medium;48.90158091;2.202096618
Bobigny;93008;93;medium;48.90781472;2.441021194
Créteil;94028;94;medium;48.77873427;2.441128489
Pontoise;95500;95;medium;49.05211408;2.096378355
Belley;01034;01;hard;45.75813629;5.686648106
Gex;01173;01;hard;46.33741882;6.061932659
Nantua;01269;01;hard;46.15193064;5.607209949
Saint-Quentin;02691;02;hard;49.84584284;3.290619591
Vervins;02789;02;hard;49.83416965;3.906012302
Château-Thierry;02168;02;hard;49.04670015;3.396600881
Soissons;02722;02;hard;49.38175417;3.328792545
Montluçon;03185;03;hard;46.34085168;2.601691152
Vichy;03310;03;hard;46.12945814;3.424738937
Barcelonnette;04019;04;hard;44.38771428;6.643645611
Forcalquier;04088;04;hard;43.95952325;5.778682559
Castellane;04039;04;hard;43.84737033;6.510486119
Briançon;05023;05;hard;44.89432198;6.632905772
Grasse;06069;06;hard;43.64460273;6.933168648
Tournon-sur-rhône;07324;07;hard;45.06067918;4.845513317
Largentière;07132;07;hard;44.54426002;4.294962684
Sedan;08409;08;hard;49.70087563;4.94252051
Rethel;08362;08;hard;49.51139899;4.367875703
Vouziers;08490;08;hard;49.39815776;4.701168925
Saint-Girons;09261;09;hard;42.98595235;1.144866151
Pamiers;09225;09;hard;43.11631394;1.61607623
Bar-sur-aube;10033;10;hard;48.23177167;4.707477848
Nogent-sur-seine;10268;10;hard;48.49223021;3.500699908
Narbonne;11262;11;hard;43.18333336;3.000186834
Limoux;11206;11;hard;43.05338059;2.218669187
Millau;12145;12;hard;44.09991108;3.079055931
Villefranche-de-Rouergue;12300;12;hard;44.35138377;2.036634032
Aix-en-Provence;13001;13;hard;43.52760351;5.447757326
Istres;13047;13;hard;43.5035382;4.988333499
Arles;13004;13;hard;43.67795312;4.628912418
Lisieux;14366;14;hard;49.14520276;0.229048797
Bayeux;14047;14;hard;49.27938287;-0.707458175
Vire;14762;14;hard;48.84049645;-0.893762254
Mauriac;15120;15;hard;45.21787348;2.333919779
Saint-Flour;15187;15;hard;45.03262743;3.091867069
Confolens;16106;16;hard;46.01503694;0.670884646
Cognac;16102;16;hard;45.690098;-0.32583584
Jonzac;17197;17;hard;45.44244338;-0.435602975
Saintes;17415;17;hard;45.74504052;-0.632432713
Rochefort;17299;17;hard;45.93932759;-0.96185987
St-Jean-d'Angély;17347;17;hard;45.94417523;-0.519884541
Saint-Amand-Montrond;18197;18;hard;46.7231167;2.504749991
Vierzon;18279;18;hard;47.22313148;2.067912499
Ussel;19275;19;hard;45.54792675;2.310772713
Brive-la-Gaillarde;19031;19;hard;45.14973936;1.508123028
Beaune;21054;21;hard;47.023902;4.83911589
Montbard;21425;21;hard;47.62455657;4.338882204
Dinan;22050;22;hard;48.45422735;-2.042554164
Lannion;22113;22;hard;48.73222769;-3.458598308
Guingamp;22070;22;hard;48.5622468;-3.155211482
Aubusson;23008;23;hard;45.95309853;2.169484485
Sarlat-la-Canéda;24520;24;hard;44.88588831;1.217375038
Nontron;24311;24;hard;45.53743381;0.665425149
Bergerac;24037;24;hard;44.85501729;0.485498958
Montbéliard;25388;25;hard;47.50920337;6.798320826
Pontarlier;25462;25;hard;46.90656814;6.354561506
Nyons;26220;26;hard;44.35960331;5.133057529
Die;26113;26;hard;44.75645701;5.367912611
Bernay;27056;27;hard;49.09088057;0.598341358
Les Andelys;27016;27;hard;49.2468564;1.415648257
Nogent-le-Rotrou;28280;28;hard;48.31893296;0.821062017
Dreux;28134;28;hard;48.73678881;1.366381497
Châteaudun;28088;28;hard;48.0747202;1.341634545
Morlaix;29151;29;hard;48.57930235;-3.826725174
Brest;29019;29;hard;48.3872676;-4.488271708
Châteaulin;29026;29;hard;48.19529263;-4.08976488
Sartène;2A272;2A;hard;41.61954424;8.97168606
Corte;2B096;2B;hard;42.30491894;9.161592017
Calvi;2B050;2B;hard;42.558491;8.752678073
Le Vigan;30350;30;hard;43.98943105;3.602269221
Alès;30007;30;hard;44.12406676;4.081794673
Saint-Gaudens;31483;31;hard;43.1095574;0.72364425
Muret;31395;31;hard;43.46542584;1.334502977
Condom;32107;32;hard;43.95767198;0.371088233
Mirande;32256;32;hard;43.51467604;0.404475982
Arcachon;33009;33;hard;44.6511;-1.17
Langon;33227;33;hard;44.55267539;-0.247868343
Blaye;33058;33;hard;45.12801878;-0.66184362
Lesparre-Médoc;33240;33;hard;45.30702424;-0.938711249
Libourne;33243;33;hard;44.91410345;-0.243580756
Béziers;34032;34;hard;43.34468743;3.230507457
Lodève;34142;34;hard;43.73315489;3.319806305
Fougères;35115;35;hard;48.3544732;-1.19970709
Saint-Malo;35288;35;hard;48.63887668;-1.99667743
Redon;35236;35;hard;47.66058825;-2.077382653
La Châtre;36046;36;hard;46.58070018;1.989316903
Le Blanc;36018;36;hard;46.63387245;1.063513479
Issoudun;36088;36;hard;46.94935437;1.992422126
Chinon;37072;37;hard;47.16709107;0.244763509
Loches;37132;37;hard;47.12875292;0.996811124
Vienne;38544;38;hard;45.52355664;4.873285177
La Tour-du-pin;38509;38;hard;45.5679651;5.444705792
Dole;39198;39;hard;47.08993694;5.481956258
Saint-Claude;39478;39;hard;46.38530023;5.86410424
Dax;40088;40;hard;43.70848616;-1.053621486
Romorantin-Lanthenay;41194;41;hard;47.35926029;1.743641651
Vendôme;41269;41;hard;47.79860535;1.064471774
Montbrison;42147;42;hard;45.60690774;4.064772219
Roanne;42187;42;hard;46.0382119;4.0684185
Yssingeaux;43268;43;hard;45.14191038;4.12329824
Brioude;43040;43;hard;45.29415926;3.384454082
Châteaubriant;44036;44;hard;47.71716014;-1.3783097
Saint-Nazaire;44184;44;hard;47.28191503;-2.208786755
Montargis;45208;45;hard;47.99571069;2.732611236
Pithiviers;45252;45;hard;48.17399396;2.254058039
Figeac;46102;46;hard;44.60864708;2.033781333
Gourdon;46127;46;hard;44.73689116;1.3811048
Marmande;47157;47;hard;44.50075452;0.165682461
Villeneuve-sur-lot;47323;47;hard;44.40720778;0.705448034
Nérac;47195;47;hard;44.13632004;0.339194199
Florac;48061;48;hard;44.33008785;3.589167727
Cholet;49099;49;hard;47.06191339;-0.878862954
Saumur;49328;49;hard;47.26045943;-0.078728243
Segré;49331;49;hard;47.68858142;-0.867839043
Cherbourg-Octeville;50129;50;hard;49.6395574;-1.627849298
Coutances;50147;50;hard;49.04804405;-1.444560289
Avranches;50025;50;hard;48.68398858;-1.358450196
Epernay;51230;51;hard;49.04670514;3.95984154
Reims;51454;51;hard;49.25735253;4.035868185
Vitry-le-François;51649;51;hard;48.72629894;4.585253488
Langres;52269;52;hard;47.86442977;5.333501147
Saint-Dizier;52448;52;hard;48.63742562;4.946963918
Château-Gontier;53062;53;hard;47.82808144;-0.708061316
Mayenne;53147;53;hard;48.30349947;-0.616707688
Briey;54099;54;hard;49.24687837;5.940027399
Toul;54528;54;hard;48.67508161;5.89072439
Luneville;54329;54;hard;48.59027963;6.505203476
Verdun;55545;55;hard;49.15910277;5.38418141
Commercy;55122;55;hard;48.76227571;5.591090197
Pontivy;56178;56;hard;48.06688829;-2.966303741
Lorient;56121;56;hard;47.74960355;-3.362003374
Sarrebourg;57630;57;hard;48.73373782;7.052842915
Sarreguemines;57631;57;hard;49.11183993;7.071828952
Thionville;57672;57;hard;49.35791054;6.166098029
Forbach;57227;57;hard;49.19122256;6.897615489
Clamecy;58079;58;hard;47.46025488;3.519572471
Château-Chinon (ville);58062;58;hard;47.06439073;3.93347611
Cosne-cours-sur-loire;58086;58;hard;47.41217628;2.924610648
Avesnes-sur-helpe;59036;59;hard;50.12415515;3.929641433
Dunkerque;59183;59;hard;51.03506961;2.37720076
Cambrai;59122;59;hard;50.17421609;3.234536465
Douai;59178;59;hard;50.37545671;3.091977409
Valenciennes;59606;59;hard;50.35928301;3.523450742
Senlis;60612;60;hard;49.20642347;2.583449265
Compiègne;60159;60;hard;49.40833245;2.821494624
Clermont;60157;60;hard;49.37958179;2.412685442
Mortagne-au-perche;61293;61;hard;48.5215422;0.548463278
Argentan;61006;61;hard;48.7455798;-0.021988132
Saint-Omer;62765;62;hard;50.75033139;2.257588622
Montreuil-sur-Mer;62588;62;hard;50.46534839;1.764986324
Béthune;62119;62;hard;50.52696755;2.644112137
Lens;62498;62;hard;50.43099667;2.831083953
Calais;62193;62;hard;50.94679152;1.86436746
Boulogne-sur-mer;62160;62;hard;50.72337656;1.606867467
Issoire;63178;63;hard;45.54446783;3.24857167
Thiers;63430;63;hard;45.85729789;3.541693487
Ambert;63003;63;hard;45.55011201;3.742359661
Riom;63300;63;hard;45.89338552;3.1126172
Oloron-sainte-Marie;64422;64;hard;43.19366861;-0.606938694
Bayonne;64102;64;hard;43.49205209;-1.475503887
Bagnères-de-Bigorre;65059;65;hard;43.06993287;0.151031883
Argelès-Gazost;65025;65;hard;43.00463563;-0.096374805
Céret;66049;66;hard;42.4874623;2.750406095
Prades;66149;66;hard;42.61602807;2.422024802
Molsheim;67300;67;hard;48.53989452;7.492872644
Sélestat;67462;67;hard;48.25865429;7.455415818
Haguenau;67180;67;hard;48.81545875;7.78933288
Saverne;67437;67;hard;48.74044761;7.362225353
Mulhouse;68224;68;hard;47.75238289;7.335832615
Altkirch;68004;68;hard;47.62383697;7.239448222
Thann;68334;68;hard;47.81039278;7.102633687
Villefranche-sur-saône;69264;69;hard;45.98646985;4.718923534
Lure;70310;70;hard;47.68508099;6.498416964
Châlon-sur-saône;71076;71;hard;46.78809883;4.851244718
Louhans;71263;71;hard;46.62999307;5.223381492
Autun;71014;71;hard;46.95854469;4.298058213
Charolles;71106;71;hard;46.43452103;4.276144215
La Flèche;72154;72;hard;47.70242823;-0.076374122
Mamers;72180;72;hard;48.35054627;0.372297007
Saint-Jean-de-Maurienne;73248;73;hard;45.27517225;6.349326042
Albertville;73011;73;hard;45.66933948;6.384923114
Bonneville;74042;74;hard;46.07681223;6.406312182
Thonon-les-bains;74281;74;hard;46.37137675;6.480972125
Saint-Julien-en-Genevois;74243;74;hard;46.1435416;6.081604637
Le Havre;76351;76;hard;49.49507596;0.134631664
Dieppe;76217;76;hard;49.92577226;1.075863115
Meaux;77284;77;hard;48.95768933;2.882668974
Fontainebleau;77186;77;hard;48.40767293;2.699968339
Provins;77379;77;hard;48.55869207;3.300803908
Torcy;77468;77;hard;48.85085581;2.649375411
Rambouillet;78517;78;hard;48.64510791;1.833204517
Saint-Germain-en-Laye;78551;78;hard;48.95855357;2.101233607
Mantes-la-jolie;78361;78;hard;48.99799336;1.700330324
Bressuire;79049;79;hard;46.84050396;-0.491885712
Parthenay;79202;79;hard;46.64632361;-0.244395184
Abbeville;80001;80;hard;50.10574355;1.83248543
Montdidier;80561;80;hard;49.6479366;2.56884793
Péronne;80620;80;hard;49.92678123;2.932040773
Castres;81065;81;hard;43.60531335;2.240865081
Castelsarrasin;82033;82;hard;44.03827849;1.106910987
Draguignan;83050;83;hard;43.53786035;6.464856928
Brignoles;83023;83;hard;43.40642599;6.061286769
Carpentras;84031;84;hard;44.05342177;5.046469069
Apt;84003;84;hard;43.87669766;5.397021131
Fontenay-le-Comte;85092;85;hard;46.46722247;-0.806659431
Les Sables-d'Olonne;85194;85;hard;46.49620975;-1.780585928
Châtellerault;86066;86;hard;46.81787652;0.543250119
Montmorillon;86165;86;hard;46.42517679;0.871194035
Rochechouart;87126;87;hard;45.83187019;0.829548168
Bellac;87011;87;hard;46.12418553;1.053743984
Neufchâteau;88321;88;hard;48.35792123;5.692157108
Saint-Dié-des-Vosges;88413;88;hard;48.286133;6.944302686
Sens;89387;89;hard;48.19759268;3.28305706
Avallon;89025;89;hard;47.48956375;3.907089244
Etampes;91223;91;hard;48.43413157;2.157503591
Palaiseau;91477;91;hard;48.71446506;2.244754065
Antony;92002;92;hard;48.7520687;2.299638343
Boulogne-Billancourt;92012;92;hard;48.83695073;2.239909428
Le Raincy;93062;93;hard;48.89743876;2.519353948
Saint-Denis;93066;93;hard;48.93504913;2.354397788
L'Hay-les-roses;94038;94;hard;48.77777065;2.338400126
Nogent-sur-marne;94052;94;hard;48.83810133;2.483928108
Argenteuil;95018;95;hard;48.95420864;2.245639765
Sarcelles;95585;95;hard;48.99150508;2.381690774
`;