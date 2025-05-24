import { MonthItem, WeekItem } from './components/date-picker'
import { MapTheme } from './components/map'
import { transformObjectToArray, transformObjectValuesToKeys } from './functions'
import { ILanguage, IService } from './types'

export const ObjectLanguage: ILanguage = {
  eng: {
    value: 'eng',
    label: 'English',
    placeholder: 'English',
    search: 'English, eng'
  },
  rus: {
    value: 'rus',
    label: 'Русский',
    placeholder: 'Русский',
    search: 'Русский, rus'
  }
}

export const ObjectService: IService = {
  jenesei_id: {
    value: 'jenesei_id',
    label: 'Jenesei ID',
    placeholder: 'Jenesei ID',
    search: 'Jenesei ID'
  }
}

export const ListLanguage = transformObjectToArray(ObjectLanguage)
export const KeysLanguage = transformObjectValuesToKeys(ObjectLanguage)

export const ListService = transformObjectToArray(ObjectService)
export const KeysService = transformObjectValuesToKeys(ObjectService)

export const localeMonths: MonthItem[] = [
  {
    localeLong: 'Январь',
    localeShort: 'Янв',
    value: 'january'
  },
  {
    localeLong: 'February',
    localeShort: 'Feb',
    value: 'february'
  },
  {
    localeLong: 'March',
    localeShort: 'Mar',
    value: 'march'
  },
  {
    localeLong: 'April',
    localeShort: 'Apr',
    value: 'april'
  },
  {
    localeLong: 'May',
    localeShort: 'May',
    value: 'may'
  },
  {
    localeLong: 'June',
    localeShort: 'Jun',
    value: 'june'
  },
  {
    localeLong: 'July',
    localeShort: 'Jul',
    value: 'july'
  },
  {
    localeLong: 'August',
    localeShort: 'Aug',
    value: 'august'
  },
  {
    localeLong: 'September',
    localeShort: 'Sep',
    value: 'september'
  },
  {
    localeLong: 'October',
    localeShort: 'Oct',
    value: 'october'
  },
  {
    localeLong: 'November',
    localeShort: 'Nov',
    value: 'november'
  },
  {
    localeLong: 'December',
    localeShort: 'Dec',
    value: 'december'
  }
]
export const localeWeeks: WeekItem[] = [
  {
    localeLong: 'Monday',
    localeShort: 'Пн',
    value: 'mo'
  },
  {
    localeLong: 'Tuesday',
    localeShort: 'Tue',
    value: 'tu'
  },
  {
    localeLong: 'Wednesday',
    localeShort: 'Wed',
    value: 'we'
  },
  {
    localeLong: 'Thursday',
    localeShort: 'Thu',
    value: 'th'
  },
  {
    localeLong: 'Friday',
    localeShort: 'Fri',
    value: 'fr'
  },
  {
    localeLong: 'Saturday',
    localeShort: 'Sat',
    value: 'sa'
  },
  {
    localeLong: 'Sunday',
    localeShort: 'Sun',
    value: 'su'
  }
]
export const MapThemeList: MapTheme[] = [
  {
    name: 'Light CARTO',
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
  },
  {
    name: 'Dark CARTO',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
  },
  {
    name: 'OpenStreetMap',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  },
  {
    name: 'World Topo Map',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    attribution:
      'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
  },
  {
    name: 'Esri World Imagery',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Earthstar Geographics'
  }
]
