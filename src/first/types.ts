export type CatFact = {
  fact: string;
  length: number;
};

export type DefaultState = {
  catFacts: CatFact[];
  loading: boolean;
  error: string;
};
