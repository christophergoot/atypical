import axios, { AxiosPromise } from "axios";
import A from "./firstActionTypes";

interface CreateItemAction {
  type: typeof A.CREATE_ITEM;
  payload: string;
}
export function createItem(description: string): CreateItemAction {
  return { type: A.CREATE_ITEM, payload: description };
}

interface DeleteItemAction {
  type: typeof A.DELETE_ITEM;
  meta: { id: number };
}
export function deleteItem(id: number): DeleteItemAction {
  return { type: A.DELETE_ITEM, meta: { id } };
}

interface SaveItemsAction {
  type: typeof A.SAVE_ITEM_WITH_PROMISE;
  payload: Promise<unknown>;
}
export function saveItems(): SaveItemsAction {
  const promisePayload = new Promise((resolve, reject) => {
    setTimeout(() => resolve("success"), 500);
  });

  return {
    type: A.SAVE_ITEM_WITH_PROMISE,
    payload: promisePayload
  };
}

interface NewCatFactItem {
  type: typeof A.NEW_CAT_FACT_ITEM;
  payload: AxiosPromise<{ fact: string }>;
}
export function newCatFactItem(): NewCatFactItem {
  return {
    type: A.NEW_CAT_FACT_ITEM,
    payload: axios.get("https://catfact.ninja/fact?max_length=140")
  };
}
