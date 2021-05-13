import { PinType } from './pin-type';
import { SerializedPointOfInterest } from './serialized-point-of-interest';

export const JuraPointsOfInterest: Record<string, SerializedPointOfInterest> = {
  'belvedere-repenty': {
    name: "Belvédère de Repenty",
    latitude: 46.48693786199287,
    longitude: 6.015590727778011,
    type: PinType.ScenicViewpoint,
    trails: [
      {
        startingPoint: "Depuis la route",
        gpxFile: 'belvedere-de-repenty.gpx',
        duration: '20min',
      },
    ],
    photospheres: [
      '!4v1620389731440!6m8!1m7!1sCAoSLEFGMVFpcE5XVmM0MWx2MmJxNlZQX3J0ZktwX3hCUXhjZ0Fmckg3bFZqYXFD!2m2!1d46.4870251!2d6.015476!3f168.13721400208368!4f-12.801263118888215!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'belvedere-roche-dade': {
    name: "Belvédère de la Roche au Dade",
    latitude: 46.52579603202816,
    longitude: 6.0182170591127,
    type: PinType.ScenicViewpoint,
    trails: [
      {
        startingPoint: "Depuis le parking de la Via Ferrata de Morez",
        gpxFile: 'belvedere-de-la-roche-au-dade.gpx',
        duration: '30min',
        inverted: true,
      },
    ],
    photospheres: [
      '!4v1620389575828!6m8!1m7!1sCAoSLEFGMVFpcE1FY2V4TVhob2JTeVo4dWtEeEF2cHRVZk44NERKOU5lcWhyQkZY!2m2!1d46.5259564!2d6.0181729!3f90.17164646428127!4f-21.31377426154083!5f0.7820865974627469',
      '!4v1620389674943!6m8!1m7!1sCAoSLEFGMVFpcE5aTHpTRlRVYmJxOE5rLTQzRjNGMWRkYnpteHJlakg0LXVWUWxK!2m2!1d46.52563500000001!2d6.0175326!3f154.115584069253!4f-13.020415684614449!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'belvedere-hermitage': {
    name: "Belvédère de l'Hermitage",
    latitude: 46.3878955420636,
    longitude: 5.868958812426768,
    type: PinType.ScenicViewpoint,
    trails: [
      {
        startingPoint: "Depuis l'Office de Tourisme de Saint-Claude",
        gpxFile: 'belvedere-de-l-hermitage.gpx',
        duration: '30min',
      },
    ],
    photospheres: [
      '!4v1620596071915!6m8!1m7!1sCAoSLEFGMVFpcE5PNXRDd3libXloUDNYRXVFZ2xCZ1VJalNJXzQ5Uy1JelJZQl9T!2m2!1d46.3878772!2d5.8690985!3f203.52909632005392!4f-6.438086995919704!5f0.7820865974627469',
      '!4v1620389042506!6m8!1m7!1sCAoSLEFGMVFpcE9FSUNRVUFhbDd5UzNYQzdjX2kwODdjV0h3UG5qcEFhN042WWk3!2m2!1d46.3879318!2d5.8688974!3f224.69153436969702!4f-19.813159117417143!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'belvedere-regardoir': {
    name: "Belvédère du Regardoir",
    latitude: 46.44604066194284,
    longitude: 5.7068120775586495,
    type: PinType.ScenicViewpoint,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'cascade-combes': {
    name: "Cascade des Combes",
    latitude: 46.40212953027252,
    longitude: 5.8779129448382195,
    type: PinType.Waterfall,
    photospheres: [
      '!4v1620389296693!6m8!1m7!1sCAoSLEFGMVFpcE82YmFIQW81VlRFX1VnZ3ZMaXlRVV9pNnF1dk1ObHVKdVprazAz!2m2!1d46.4021504!2d5.877988300000001!3f73.80652947606!4f16.740779286838745!5f0.7820865974627469',
      '!4v1620389332734!6m8!1m7!1sCAoSLEFGMVFpcE1WMUhCX3dLSVpKTDF6bS1jZ2RwSXdjOU8zXzEyLXhBNmtrWl92!2m2!1d46.4020766!2d5.8776141!3f78.02780899417196!4f2.338113416426012!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'gorges-abime': {
    name: "Gorges de l'Abîme",
    latitude: 46.40342328014523,
    longitude: 5.87963063627019,
    type: PinType.Canyon,
    trails: [
      {
        startingPoint: "Depuis le parking de la Cascade des Combes",
        gpxFile: 'gorges-de-l-abime.gpx',
        duration: '45min',
      },
    ],
    photospheres: [
      '!4v1620389168689!6m8!1m7!1sCAoSLEFGMVFpcFBQQkR3MWEyYjRwY1ROcnhLRUZiUEdJZU1rZVducDBaV2Y3UXRq!2m2!1d46.40481769908943!2d5.880170948803425!3f197.4573322602514!4f-9.669866665465847!5f0.7820865974627469',
      '!4v1620389242796!6m8!1m7!1sCAoSLEFGMVFpcFBTTTFtVEdVR0ZTeFFsVjVadWVwQ2lPNldIM2h3Nnc4YzlOdko0!2m2!1d46.4051927!2d5.8803966!3f51.31593507048082!4f-23.472534573146348!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'grotte-sainte-anne': {
    name: "Grotte Sainte-Anne",
    latitude: 46.38994014812221,
    longitude: 5.869371872615061,
    type: PinType.Cave,
    trails: [
      {
        startingPoint: "Depuis l'Office de Tourisme de Saint-Claude",
        gpxFile: 'grotte-sainte-anne.gpx',
        duration: '35min',
      },
    ],
    photospheres: [
      '!4v1620388739452!6m8!1m7!1sCAoSLEFGMVFpcE5qZERQLXJ5TVUyM3NpUmNKTklfdF95N1ZNZ1M2M1pNSjRia19Q!2m2!1d46.3899634!2d5.869193699999999!3f130.4336698365964!4f29.745497264853185!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'via-ferrata-morez': {
    name: "Via Ferrata de Morez",
    latitude: 46.526015318747525,
    longitude: 6.020173878441595,
    type: PinType.ViaFerrata,
    photospheres: [
      '!4v1620389799348!6m8!1m7!1sCAoSLEFGMVFpcE9Ia1pCd2lWM1N6Q2gzOUluWHh0ZkwwQ1p5bDV6UmRqWFlkS2k0!2m2!1d46.5261679!2d6.0200669!3f224.50101787110827!4f0.06736034172531902!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'via-ferrata-vouglans': {
    name: "Via Ferrata de Vouglans",
    latitude: 46.44532050790993,
    longitude: 5.708870596285287,
    type: PinType.ViaFerrata,
    trails: [
      {
        startingPoint: "Sentier d'accès",
        gpxFile: 'via-ferrata-de-vouglans-depart.gpx',
        duration: '10min',
      },
      {
        startingPoint: "Sentier de retour",
        gpxFile: 'via-ferrata-de-vouglans-retour.gpx',
        duration: '5min',
      },
    ],
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'escalade-mont-robert': {
    name: "Site d'escalade du Mont Robert",
    latitude: 46.43332546647621,
    longitude: 5.721284772523512,
    type: PinType.ClimbingSite,
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'escalade-3-commeres': {
    name: "Site d'escalade des 3 Commères",
    latitude: 46.54654811015665,
    longitude: 6.034033758286288,
    type: PinType.ClimbingSite,
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'belvedere-barrage-vouglans': {
    name: "Belvédère du Barrage de Vouglans",
    latitude: 46.39391732886984,
    longitude: 5.667009581013218,
    type: PinType.ScenicViewpoint,
    photospheres: [
      '!4v1620388899930!6m8!1m7!1sCAoSLEFGMVFpcE9nRXZkcEpPVWtPcmJmaDlYQVBXZW1QbGctSThmdjZPV1gzSzlu!2m2!1d46.3939425!2d5.667001399999999!3f1.0483275857959635!4f-6.879959552236187!5f0.7820865974627469',
      '!4v1620596127676!6m8!1m7!1sCAoSLEFGMVFpcFBuRDBHczFOeko1UWN6NFRLOWM0X3Q0UGtQSGZPUGZSUGM5RDhI!2m2!1d46.3976163!2d5.6630616!3f79.8294436355147!4f-8.411360740376665!5f0.7820865974627469',
      '!4v1620600517734!6m8!1m7!1sCAoSLEFGMVFpcFBxbGE3Nll4a1pUNS1xcVdOVVhnTE1ScDFmeFBPUnVVUHhlRHFo!2m2!1d46.3990288!2d5.664689099999999!3f157.39942525172077!4f-6.39023472878722!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'belvedere-bourlaches': {
    name: "Belvédère des Bourlaches",
    latitude: 46.45664013598437,
    longitude: 5.672187035688165,
    type: PinType.ScenicViewpoint,
    photospheres: [
      '!4v1620388847266!6m8!1m7!1sCAoSLEFGMVFpcE1Vdms3ZzRrWVBEb29EWXB6V25GZEhxcGM3elVnWUFtS2s0Ym5t!2m2!1d46.4566313!2d5.672244099999999!3f37.795800839446954!4f-6.426336674673124!5f0.7820865974627469',
    ],
    trails: [
      {
        startingPoint: "Depuis le parking du Belvédère des Bourlaches",
        gpxFile: 'belvedere-des-bourlaches.gpx',
        duration: '15min',
      },
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'plage-mercantine': {
    name: "Plage de la Mercantine",
    latitude: 46.464298453276406,
    longitude: 5.693280884183598,
    type: PinType.Beach,
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: false,
  },
  'pont-longchaumois': {
    name: "Le Pont de Longchaumois",
    latitude: 46.470071784585095,
    longitude: 5.904846264084158,
    type: PinType.Bridge,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'fort-rousses': {
    name: "Le Fort des Rousses",
    latitude: 46.47914923528563,
    longitude: 6.056021302132764,
    type: PinType.Museum,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: true,
    isLandscape: false,
    isActivity: false,
  },
  'ski-dole': {
    name: "Station de Ski de la Dôle",
    latitude: 46.439264680613185,
    longitude: 6.081568202186691,
    type: PinType.SkiStation,
    isWinterExclusive: true,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'ski-lelex': {
    name: "Station de Ski de Lélex",
    latitude: 46.304188196750474,
    longitude: 5.943850757481148,
    type: PinType.SkiStation,
    isWinterExclusive: true,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'lac-lamoura': {
    name: "Lac de Lamoura",
    latitude: 46.39508682522628,
    longitude: 5.981503848531151,
    type: PinType.Lake,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'cascade-moulin-aval': {
    name: "Cascade du Moulin d'Aval",
    latitude: 46.35591140420291,
    longitude: 5.904118515327781,
    type: PinType.Waterfall,
    trails: [
      {
        startingPoint: "Depuis le Belvédère du Saut du Chien",
        gpxFile: 'cascade-du-moulin-aval.gpx',
        duration: '5min',
      },
    ],
    photospheres: [
      '!4v1620849658422!6m8!1m7!1sCAoSLEFGMVFpcFBPYmZHSWJaUHY1RjhFUi1xTDVzbkQwc0NlcW5KVDdFandsWjRK!2m2!1d46.355946!2d5.904138499999999!3f162.98980423906508!4f2.2116722827988156!5f0.7820865974627469',
      '!4v1620388799834!6m8!1m7!1sCAoSLEFGMVFpcFBTUGtWUFU3Y1I2UFRhWHQ4NzlOYmZGcG1BSi1VWEhid191Z2U5!2m2!1d46.356033!2d5.904081499999999!3f161.75499432812444!4f3.0432548811173348!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'belvedere-saut-chien': {
    name: "Belvédère du Saut du Chien",
    latitude: 46.35709198201752,
    longitude: 5.902056464863761,
    type: PinType.ScenicViewpoint,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'plage-surchauffant': {
    name: "Plage du Surchauffant",
    latitude: 46.522077401833315,
    longitude: 5.676542281239807,
    type: PinType.Beach,
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: false,
  },
  'bike-park-longchaumois': {
    name: "Bike Park de Longchaumois",
    latitude: 46.44571129341734,
    longitude: 5.910999011397395,
    type: PinType.BikePark,
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'lac-rousses': {
    name: "Lac des Rousses",
    latitude: 46.49994306374634,
    longitude: 6.079344078740796,
    type: PinType.Lake,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'ski-serra': {
    name: "Station de Ski de la Serra",
    latitude: 46.412159518052306,
    longitude: 5.996286839619209,
    type: PinType.SkiStation,
    isWinterExclusive: true,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'ski-faucille': {
    name: "Station de Ski de la Faucille",
    latitude: 46.36730613762583,
    longitude: 6.015880142730694,
    type: PinType.SkiStation,
    isWinterExclusive: true,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'luge-ete-faucille': {
    name: "Luge d'Été de la Faucille",
    latitude: 46.367049981541285,
    longitude: 6.014699697841497,
    type: PinType.RollerCoaster,
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'tyrolienne-faucille': {
    name: "Tyrolienne de la Faucille",
    latitude: 46.36669149710434,
    longitude: 6.012897868370151,
    type: PinType.ZipLine,
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'domaine-nordique-vattay': {
    name: "Domaine Nordique de la Vattay",
    latitude: 46.388997058308185,
    longitude: 6.053721738522633,
    type: PinType.CrossCountrySkiTrail,
    isWinterExclusive: true,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'ski-jouvencelles': {
    name: "Station de Ski des Jouvencelles",
    latitude: 46.4560246945411,
    longitude: 6.054330190834567,
    type: PinType.SkiStation,
    isWinterExclusive: true,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'domaine-nordique-darbella': {
    name: "Domaine Nordique de la Darbella",
    latitude: 46.44366600183185,
    longitude: 6.04029007951453,
    type: PinType.CrossCountrySkiTrail,
    isWinterExclusive: true,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'domaine-nordique-marais': {
    name: "Domaine Nordique des Marais",
    latitude: 46.55704998804172,
    longitude: 6.022468876634721,
    type: PinType.CrossCountrySkiTrail,
    isWinterExclusive: true,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'parapente-cheneviers': {
    name: "Piste de Décollage de Parapente des Cheneviers",
    latitude: 46.42434419868878,
    longitude: 5.872901222134379,
    type: PinType.ParaglidingTakeOff,
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'musee-pipe-diamant-saint-claude': {
    name: "Musée de la Pipe et du Diamant de Saint-Claude",
    latitude: 46.38693264922453,
    longitude: 5.8662271001162125,
    type: PinType.Museum,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: true,
    isLandscape: false,
    isActivity: true,
  },
  'musee-lunette-morez': {
    name: "Musée de la Lunette de Morez",
    latitude: 46.520673107466465,
    longitude: 6.022807695409638,
    type: PinType.Museum,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: true,
    isLandscape: false,
    isActivity: true,
  },
  'patinoire-premanon': {
    name: "Patinoire de Prémanon",
    latitude: 46.46110897795911,
    longitude: 6.0293126225093285,
    type: PinType.Rink,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: true,
    isLandscape: false,
    isActivity: true,
  },
  'casino-saint-laurent': {
    name: "Casino de Saint-Laurent-en-Grandvaux",
    latitude: 46.57700171480465,
    longitude: 5.966741847330161,
    type: PinType.Casino,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: true,
    isLandscape: false,
    isActivity: true,
  },
  'bowling-chaumusse': {
    name: "Bowling de la Chaumusse",
    latitude: 46.59671216477136,
    longitude: 5.959645900329771,
    type: PinType.Bowling,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: true,
    isLandscape: false,
    isActivity: true,
  },
  'montagne-dole': {
    name: "La Dôle",
    latitude: 46.425451417227194,
    longitude: 6.100055548973375,
    type: PinType.Mountain,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'ruisseau-abime': {
    name: "Ruisseau de l'Abîme",
    latitude: 46.401477319820685,
    longitude: 5.875648118130123,
    type: PinType.Park,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: false,
    isActivity: false,
  },
  'bateau-louisiane': {
    name: "Bateau de Croisière le Louisiane",
    latitude: 46.52010736377037,
    longitude: 5.674579771321833,
    type: PinType.Ferry,
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'cascade-vouivre': {
    name: "Cascade de la Vouivre",
    latitude: 46.413907948567065,
    longitude: 5.872781919354124,
    type: PinType.Waterfall,
    trails: [
      {
        startingPoint: "Part la Ferme de Diesles",
        gpxFile: 'cascade-de-la-vouivre.gpx',
        duration: '20min',
      },
      {
        startingPoint: "Part le Pont des Cheneviers",
        gpxFile: 'cascade-de-la-vouivre-cheneviers.gpx',
        duration: '30min',
      },
      {
        startingPoint: "Depuis la Cascade sous la Vouivre",
        gpxFile: 'liaison-cascades-de-la-vouivre.gpx',
        duration: '30min',
        inverted: true,
      },
    ],
    photospheres: [
      '!4v1620388089922!6m8!1m7!1sCAoSLEFGMVFpcFBqRzlGMHpPeW1TcDRuSkJmQlJSTVNlNVk2R09KTk5QajdORGNT!2m2!1d46.4139236!2d5.872755!3f136!4f0!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'cascade-sous-vouivre': {
    name: "Cascade sous la Vouivre",
    latitude: 46.41389685317267,
    longitude: 5.871360348576231,
    type: PinType.Waterfall,
    trails: [
      {
        startingPoint: "Part la Ferme de Diesles",
        gpxFile: 'cascade-sous-la-vouivre.gpx',
        duration: '30min',
        inverted: true,
      },
      {
        startingPoint: "Part le Pont des Cheneviers",
        gpxFile: 'cascade-sous-la-vouivre-cheneviers.gpx',
        duration: '20min',
        inverted: true,
      },
      {
        startingPoint: "Depuis la Cascade de la Vouivre",
        gpxFile: 'liaison-cascades-de-la-vouivre.gpx',
        duration: '20min',
      },
    ],
    photospheres: [
      '!4v1620388548319!6m8!1m7!1sCAoSLEFGMVFpcE4zOC04YXpnMTFMcjNqUVZlbHB4Z2RuYU5USWhRSjgzcFMtMWQy!2m2!1d46.414002!2d5.871368899999999!3f126.01277663762797!4f18.085101386088937!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'pont-cheneviers': {
    name: "Pont des Cheneviers",
    latitude: 46.41671664733077,
    longitude: 5.867738521171484,
    type: PinType.Bridge,
    photospheres: [
      '!4v1620388323875!6m8!1m7!1sCAoSLEFGMVFpcE9uaXRwTFhGQW12TTFaaXlPa21FenZvcG1oNndxXzZPQWsxWDgy!2m2!1d46.4167036!2d5.8677399!3f151.66!4f-11.310000000000002!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'trou-abime': {
    name: "Trou de l'Abîme",
    latitude: 46.4075389685646,
    longitude: 5.882489630958023,
    type: PinType.Pond,
    trails: [
      {
        startingPoint: "Depuis le parking de la Cascade des Combes",
        gpxFile: 'gorges-de-l-abime.gpx',
        duration: '45min',
      },
    ],
    photospheres: [
      '!4v1620388359536!6m8!1m7!1sCAoSLEFGMVFpcE1OVnJCaUFJbWRoalZlUGRQLUwtOEp3N0w0YTZza2RtcFpYMXg5!2m2!1d46.4074879!2d5.8825296!3f303.12!4f-9.39!5f0.7820865974627469',
      '!4v1620388388312!6m8!1m7!1sCAoSLEFGMVFpcE9XMjluV0t3ajhRSnZtMVJwQW9GS0YyY3cwTEh6VWUxdFFrY2Qz!2m2!1d46.4074967!2d5.882458199999999!3f32.57!4f-18.439999999999998!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'trou-bleu': {
    name: "Le Trou Bleu",
    latitude: 46.53122931474212,
    longitude: 6.003747890130584,
    type: PinType.Pond,
    trails: [
      {
        startingPoint: "Départ du Sentier de Découverte de la Bienne",
        gpxFile: 'le-trou-bleu.gpx',
        duration: '20min',
        inverted: true,
      },
    ],
    photospheres: [
      '!4v1620407417624!6m8!1m7!1sCAoSLEFGMVFpcE5WdGl0eWRqZ3VESEZRRDF0S0xoV3RPVFRUaEVadklSbjlPWnRR!2m2!1d46.5309974!2d6.0037762!3f342.3926378578515!4f-21.691322011366182!5f0.7820865974627469',
      '!4v1620407484127!6m8!1m7!1sCAoSLEFGMVFpcFBEaEJ0eFo5SEJHeVhMelNnRk8yZ2VrQ1lrYUowSmlyempNUkVk!2m2!1d46.5311722!2d6.0037158!3f151.44831874239753!4f-9.105871589254349!5f0.6592554460474502',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'base-nautique-bellecin': {
    name: "Base Nautique de Bellecin",
    latitude: 46.486847172533146,
    longitude: 5.6763074940355684,
    type: PinType.NauticBase,
    photospheres: [
      '!4v1620591095422!6m8!1m7!1sCAoSLEFGMVFpcE5xWkRBN2RBUFhzUkJ2RHhSVjdpX0otR1FPNXkzNU9CNEtweUs2!2m2!1d46.4867058!2d5.6764803!3f165.45294908880572!4f-8.851745217342852!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'piscine-saint-claude': {
    name: "Piscine de Saint-Claude",
    latitude: 46.37487522618866,
    longitude: 5.8737492925635415,
    type: PinType.SwimmingPool,
    isWinterExclusive: false,
    isSummerExclusive: true,
    isIndoor: false,
    isLandscape: false,
    isActivity: true,
  },
  'cinema-saint-claude': {
    name: "Cinéma de Saint-Claude",
    latitude: 46.388024959557505,
    longitude: 5.863251565207026,
    type: PinType.Cinema,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: true,
    isLandscape: false,
    isActivity: false,
  },
  'cinema-morez': {
    name: "Cinéma de Morez",
    latitude: 46.52339857362707,
    longitude: 6.020880508567248,
    type: PinType.Cinema,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: true,
    isLandscape: false,
    isActivity: false,
  },
  'cinema-rousses': {
    name: "Cinéma des Rousses",
    latitude: 46.48392405256153,
    longitude: 6.057734578741707,
    type: PinType.Cinema,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: true,
    isLandscape: false,
    isActivity: false,
  },
  'karting-moirans': {
    name: "Karting de Moirans-en-Montagne",
    latitude: 46.42831640034331,
    longitude: 5.714712608735004,
    type: PinType.Karting,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: true,
    isLandscape: false,
    isActivity: true,
  },
  'lac-clairvaux': {
    name: "Lac de Clairvaux-les-Lacs",
    latitude: 46.569271977746396,
    longitude: 5.750986748408562,
    type: PinType.Lake,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'yurt-rosset': {
    name: "La Yurt de Rosset",
    latitude: 46.45306593877455,
    longitude: 5.969775211744892,
    type: PinType.CampSite,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: false,
    isActivity: false,
  },
  'longchaumois': {
    name: "Longchaumois",
    latitude: 46.46182410111024,
    longitude: 5.933146944002905,
    type: PinType.StargazingSite,
    description: "La commune de Longchaumois coupe son éclairage public la nuit, ce qui en fait un coin idéal pour l'observation des étoiles.",
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'piscine-morbier': {
    name: "Piscine de Morbier",
    latitude: 46.54179663218006,
    longitude: 6.0199516129757225,
    type: PinType.SwimmingPool,
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: true,
    isLandscape: false,
    isActivity: true,
  },
  'cascade-chapeau-gendarme': {
    name: "Cascade du Chapeau de Gendarme",
    latitude: 46.35891866166526,
    longitude: 5.906130996409802,
    type: PinType.Waterfall,
    trails: [
      {
        startingPoint: "Depuis le Belvédère du Saut du Chien",
        gpxFile: 'chapeau-de-gendarme-chien.gpx',
        duration: '20min',
        inverted: true,
      },
      {
        startingPoint: "Depuis la route sous le chapeau",
        gpxFile: 'chapeau-de-gendarme-route.gpx',
        duration: '5min',
        inverted: true,
      },
    ],
    photospheres: [
      '!4v1620849553544!6m8!1m7!1sCAoSLEFGMVFpcE9QbmdIdzJ2VmltM0JJVnJIZTctNGpHSl9DVG9CMXROSUFhdW5D!2m2!1d46.35889299999999!2d5.9059731!3f49.44810884121242!4f15.837551236768519!5f0.7820865974627469',
      '!4v1620849582474!6m8!1m7!1sCAoSLEFGMVFpcE9waElGMURyMHhmR2hFd1c2aXVlOFNsWk9PUWFFcE0zQWpxeVNz!2m2!1d46.3586091!2d5.9054166!3f65.56969242668431!4f22.956926978251957!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'cascade-moulin-amont': {
    name: "Cascade du Moulin d'Amont",
    latitude: 46.35298685291105,
    longitude: 5.907207305866242,
    type: PinType.Waterfall,
    trails: [
      {
        startingPoint: "Depuis le Belvédère du Saut du Chien",
        gpxFile: 'cascade-du-moulin-amont.gpx',
        duration: '25min',
      },
    ],
    photospheres: [
      '!4v1620849706125!6m8!1m7!1sCAoSLEFGMVFpcE5Ua3dmTnNFSFV1NzBYOV9BYXQ2QnJRek95TFBmVU5qcjh4Yy1r!2m2!1d46.3529053!2d5.907388699999999!3f140.20648000742133!4f13.059285078623347!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'cascades-flumen': {
    name: "Cascades du Flumen",
    latitude: 46.35811225694381,
    longitude: 5.896421970696242,
    type: PinType.Waterfall,
    trails: [
      {
        startingPoint: "Depuis l'Usine Électrique",
        gpxFile: 'cascades-du-flumen.gpx',
        duration: '25min',
      },
    ],
    photospheres: [
      '!4v1620937889906!6m8!1m7!1sCAoSLEFGMVFpcE1wWFZTeUpiY1RVXy1YNXdMelRCN3VuMUh4SGRzR1dkZjhLSWZI!2m2!1d46.3578987!2d5.8960252!3f102.90381313204855!4f19.918982054577725!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
  'cascades-cheval': {
    name: "Cascades de la Queue de Cheval",
    latitude: 46.39015502334763,
    longitude: 5.895178412090032,
    type: PinType.Waterfall,
    trails: [
      {
        startingPoint: "Depuis le parking de la Cascade de la Queue de Cheval",
        gpxFile: 'cascade-de-la-queue-de-cheval.gpx',
        duration: '25min',
      },
    ],
    photospheres: [
      '!4v1620937980646!6m8!1m7!1sCAoSLEFGMVFpcE9ndkNlT3ZpNld5X1lkY2E0LUpBRy1wUkpYSHJSRS16dHljQS13!2m2!1d46.3899992!2d5.895200399999999!3f9.000228173644782!4f15.4272117850077!5f0.7820865974627469',
    ],
    isWinterExclusive: false,
    isSummerExclusive: false,
    isIndoor: false,
    isLandscape: true,
    isActivity: false,
  },
};
