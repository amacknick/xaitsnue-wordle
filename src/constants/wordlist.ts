import { CONFIG } from './config'

export const WORDS = [
  'tsiwo',
  'hayue',
  'kamut',
  'kawai',
  'kochi',
  "q'iya",
  'matha',
  "ts'ta",
  'suwue',
  'xowal',
  'beheb',
  'Xaxai',
  'qiqta',
  'skuen',
  'natha',
  "ts'oi",
  'hueya',
  'koman',
  'mutak',
  'aweda',
  'xokat',
  "dak'o",
  'beted',
  'mashe',
  'ishek',
  'immek',
  'tsawi',
  'imsen',
  'hamni',
  'wiXad',
  'imdeq',
  'wasue',
  'nawha',
  'mawli',
  "ts'oy",
  'mfath',
  'senwi',
  'imtaq',
  'Xqowi',
  'wikwi',
  'kiwil',
  'budue',
  'xubue',
  "sha'o",
  'alina',
  'maish',
  'xalue',
  'letse',
  'metsa',
  'knath',
  'sukan',
  'xanue',
  'athan',
  'xaman',
  'buexa',
  'ashub',
  "wa'el",
  'molok',
  'xonwa',
  'sawal',
  'xasmi',
  'shoth',
  'miyan',
  'tinai',
  'afdiq',
  'kebuk',
  'xmaia',
  'Xaqfa',
  'saxai',
  'wiXad',
  'imdeq',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
