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
Sarcelles;95585;95;hard;48.99150508;2.381690774`;

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
Kristiansand;Norway;Norway;hard;58.14671;7.9956`;

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
San Francisco;CA;CA;hard;37.78;-122.43
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
Daly City;CA;CA;hard;37.69;-122.47`;
