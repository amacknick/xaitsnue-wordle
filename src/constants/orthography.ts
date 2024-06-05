import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'e',
  'u',
  'o',
  'i',
  'p',
  "'",
  't',
  'h',
  's',
  'k',
  'f',
  'l',
  'b',
  'y',
  'q',
  'x',
  'X'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
