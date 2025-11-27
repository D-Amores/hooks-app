
export interface ScrambleWordsState {
  words: string[];
  currentWord: string;
  scrambledWord: string;
  guess: string;
  points: number;
  errorCounter: number;
  maxAllowErrors: number;
  skipCounter: number;
  isGameOver: boolean;
  maxSkips: number;
  totalWords: number;
}

const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const getInitialState = (): ScrambleWordsState => {
  const shuffleWords = shuffleArray([...GAME_WORDS]);

  return {
    words: shuffleWords,
    currentWord: shuffleWords[0],
    scrambledWord: scrambleWord(shuffleWords[0]),
    guess: '',
    points: 0,
    errorCounter: 0,
    maxAllowErrors: 3,
    skipCounter: 0,
    isGameOver: false,
    maxSkips: 3,
    totalWords: shuffleWords.length,
  }
}

export type ScrambleWordsAction =
| { type: 'NO_TENGO_LA_MENOR_IDEA_CUALES_ACCIONES_NECESITO' }
| { type: 'NO_TENGO_LA_MENOR_IDEA_CUALES_ACCIONES_NECESITO1' }
| { type: 'NO_TENGO_LA_MENOR_IDEA_CUALES_ACCIONES_NECESITO2' }

export const scrambledWordReducer = ( state: ScrambleWordsState, action: ScrambleWordsAction) => {

  switch (action.type) {


    default:
      return state;
  }
}
