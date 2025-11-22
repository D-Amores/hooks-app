
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
}

export type ScrambleWordsAction = 
| { type: 'NO_TENGO_LA_MENOR_IDEA_CUALES_ACCIONES_NECESITO' }
