import { Pin } from './pin';
import { PinType } from './pin-type';

export const Pins: Record<PinType, Pin> = {
  [PinType.ViaFerrata]: {
    label: 'Via Ferrata',
    icon: 'via_ferrata',
    color: 'costa-del-sol',
    fillColor: '#556b2f',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '33px',
  },
  [PinType.ZipLine]: {
    label: 'Tyrolienne',
    icon: 'zip_line',
    color: 'red',
    fillColor: '#f00',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '33px',
  },
  [PinType.Beach]: {
    label: 'Plage',
    icon: 'beach',
    color: 'amber',
    fillColor: '#ffc400',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '26px',
    lineHeight: '33px',
  },
  [PinType.CampSite]: {
    label: 'Site de Campement',
    icon: 'tent',
    color: 'atlantis',
    fillColor: '#9acd32',
    strokeColor: '#000',
    textColor: '#000',
    fontSize: '21px',
    lineHeight: '33px',
  },
  [PinType.ClimbingSite]: {
    label: "Site d'Escalade",
    icon: 'climbing',
    color: 'gray',
    fillColor: '#808080',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '34px',
  },
  [PinType.StargazingSite]: {
    label: "Site d'Observation des Étoiles",
    icon: 'telescope',
    color: 'navy-blue',
    fillColor: '#000080',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '33px',
  },
  [PinType.SkiStation]: {
    label: 'Station de Ski',
    icon: 'alpine_skiing',
    color: 'white',
    fillColor: '#fff',
    strokeColor: '#333',
    textColor: '#333',
    fontSize: '19px',
    lineHeight: '33px',
  },
  [PinType.HikingTrail]: {
    label: 'Sentier de Randonnée',
    icon: 'hiking',
    color: 'copper-canyon',
    fillColor: '#8b4513',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '33px',
  },
  [PinType.Waterfall]: {
    label: 'Cascade',
    icon: 'waterfall',
    color: 'cerulean',
    fillColor: '#00bfff',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '18px',
    lineHeight: '33px',
  },
  [PinType.Bridge]: {
    label: 'Pont',
    icon: 'bridge',
    color: 'web-orange',
    fillColor: '#ffa500',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '33px',
  },
  [PinType.Pond]: {
    label: "Point d'Eau",
    icon: 'reeds',
    color: 'norway',
    fillColor: '#8fbc8f',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '33px',
  },
  [PinType.Mountain]: {
    label: 'Montagne',
    icon: 'mountains',
    color: 'blaze-orange',
    fillColor: '#ff6600',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '19px',
    lineHeight: '30px',
  },
  [PinType.Museum]: {
    label: 'Musée',
    icon: 'museum',
    color: 'purple-heart',
    fillColor: '#8a2be2',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '31px',
  },
  [PinType.ScenicViewpoint]: {
    label: 'Belvédère',
    icon: 'viewing',
    color: 'hibiscus',
    fillColor: '#b03060',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '19px',
    lineHeight: '33px',
  },
  [PinType.Cave]: {
    label: 'Grotte',
    icon: 'cave',
    color: 'black',
    fillColor: '#000',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '18px',
    lineHeight: '31px',
  },
  [PinType.Lake]: {
    label: 'Lac',
    icon: 'lake',
    color: 'blue',
    fillColor: '#0000ff',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '18px',
    lineHeight: '32px',
  },
  [PinType.Canyon]: {
    label: 'Canyon',
    icon: 'canyon',
    color: 'whiskey',
    fillColor: '#cfa569',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '18px',
    lineHeight: '31px',
  },
  [PinType.RollerCoaster]: {
    label: 'Montagne Russe',
    icon: 'roller_coaster',
    color: 'crimson',
    fillColor: '#dc143c',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '34px',
  },
  [PinType.Park]: {
    label: 'Parc',
    icon: 'park_bench',
    color: 'japanese-laurel',
    fillColor: '#009900',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '19px',
    lineHeight: '31px',
  },
  [PinType.Bowling]: {
    label: 'Bowling',
    icon: 'bowling',
    color: 'khaki',
    fillColor: '#f0e68c',
    strokeColor: '#000',
    textColor: '#000',
    fontSize: '20px',
    lineHeight: '34px',
  },
  [PinType.Casino]: {
    label: 'Casino',
    icon: 'casino',
    color: 'lavender-magenta',
    fillColor: '#ee82ee',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '19px',
    lineHeight: '31px',
  },
  [PinType.ParaglidingTakeOff]: {
    label: 'Piste de Décollage de Parapente',
    icon: 'hang_gliding',
    color: 'yellow-sunshine',
    fillColor: '#ffee00',
    strokeColor: '#000',
    textColor: '#000',
    fontSize: '22px',
    lineHeight: '33px',
  },
  [PinType.Rink]: {
    label: 'Patinoire',
    icon: 'ice_skating',
    color: 'aquamarine',
    fillColor: '#55eeff',
    strokeColor: '#000',
    textColor: '#000',
    fontSize: '19px',
    lineHeight: '33px',
  },
  [PinType.BikePark]: {
    label: 'Bike Park',
    icon: 'bicycling',
    color: 'hot-toddy',
    fillColor: '#a67808',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '21px',
    lineHeight: '33px',
  },
  [PinType.Ferry]: {
    label: 'Bateau de Croisière',
    icon: 'ferry',
    color: 'bittersweet',
    fillColor: '#fa8072',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '33px',
  },
  [PinType.CrossCountrySkiTrail]: {
    label: 'Domaine Nordique',
    icon: 'cross_country_skiing',
    color: 'alto',
    fillColor: '#d5d5d5',
    strokeColor: '#000',
    textColor: '#000',
    fontSize: '20px',
    lineHeight: '33px',
  },
  [PinType.NauticBase]: {
    label: 'Base Nautique',
    icon: 'wind_surfing',
    color: 'oyster-bay',
    fillColor: '#d4fbff',
    strokeColor: '#000',
    textColor: '#000',
    fontSize: '20px',
    lineHeight: '32px',
  },
  [PinType.Cinema]: {
    label: 'Cinéma',
    icon: 'movie_theater',
    color: 'crusoe',
    fillColor: '#024700',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '17px',
    lineHeight: '33px',
  },
  [PinType.SwimmingPool]: {
    label: 'Piscine',
    icon: 'swimming',
    color: 'teal',
    fillColor: '#008b8b',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '35px',
  },
  [PinType.Karting]: {
    label: 'Karting',
    icon: 'karting',
    color: 'cosmos',
    fillColor: '#ffdbdb',
    strokeColor: '#000',
    textColor: '#000',
    fontSize: '23px',
    lineHeight: '32px',
  },
  [PinType.Monument]: {
    label: 'Monument',
    icon: 'monument',
    color: 'persian-rose',
    fillColor: '#ff1493',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '34px',
  },
  [PinType.EquestrianCenter]: {
    label: 'Centre Équestre',
    icon: 'horse_riding',
    color: 'pale-purple',
    fillColor: '#ac95cc',
    strokeColor: '#fff',
    textColor: '#fff',
    fontSize: '20px',
    lineHeight: '33px',
  },
};
