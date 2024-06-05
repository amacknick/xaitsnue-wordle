import { CONFIG } from './config'

export const VALIDGUESSES = [
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
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
