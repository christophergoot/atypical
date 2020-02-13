import axios, { AxiosPromise } from "axios";

import * as A from "./firstActionTypes";
import { CatFact } from "./types";

interface DeleteCatFactAction {
  type: typeof A.DELETE_CAT_FACT;
  meta: { fact: string };
}
export function deleteItem(fact: string): DeleteCatFactAction {
  return { type: A.DELETE_CAT_FACT, meta: { fact } };
}

interface NewCatFact {
  type: typeof A.NEW_CAT_FACT;
  payload: AxiosPromise<CatFact>;
}
export function newCatFact(): NewCatFact {
  return {
    type: A.NEW_CAT_FACT,
    payload: axios.get("https://catfact.ninja/fact?max_length=140")
  };
}

interface NewCatFactPending {
  type: typeof A.NEW_CAT_FACT_PENDING;
}
interface NewCatFactFulfilled {
  type: typeof A.NEW_CAT_FACT_FULFILLED;
  payload: CatFact;
}
interface NewCatFactRejected {
  type: typeof A.NEW_CAT_FACT_REJECTED;
  meta: { errorMessage: "couldn't get a cat fact" };
}

type AllNewCatFactActions =
  | NewCatFact
  | NewCatFactPending
  | NewCatFactFulfilled
  | NewCatFactRejected;

export type AppActionTypes = DeleteCatFactAction | AllNewCatFactActions;
