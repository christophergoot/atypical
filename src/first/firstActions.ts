import axios, { AxiosPromise } from "axios";
import A, { FirstActionTypes } from "./firstActionTypes";

// actions
export function createItem(description: string): FirstActionTypes {
  return { type: A.CREATE_ITEM, payload: description };
}

export function deleteItem(id: number): FirstActionTypes {
  return { type: A.DELETE_ITEM, meta: { id } };
}

export function saveItems(): FirstActionTypes {
  const promisePayload = new Promise((resolve, reject) => {
    setTimeout(() => resolve("success"), 500);
  });

  return {
    type: A.SAVE_ITEM_WITH_PROMISE,
    payload: promisePayload
  };
}

export function newCatFactItem(): FirstActionTypes {
  return {
    type: A.NEW_CAT_FACT_ITEM,
    payload: axios.get("https://catfact.ninja/fact?max_length=140")
  };
}
