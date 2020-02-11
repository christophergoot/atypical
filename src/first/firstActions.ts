import axios, { AxiosPromise } from "axios";

// types of action
export const CREATE_ITEM = "CREATE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const SAVE_ITEM_WITH_PROMISE = "SAVE_ITEM_WITH_PROMISE";
export const SAVE_ITEM_WITH_PROMISE_PENDING = `${SAVE_ITEM_WITH_PROMISE}_PENDING`;
export const SAVE_ITEM_WITH_PROMISE_FULFILLED = `${SAVE_ITEM_WITH_PROMISE}_FULFILLED`;
export const SAVE_ITEM_WITH_PROMISE_REJECTED = `${SAVE_ITEM_WITH_PROMISE}_REJECTED`;

export const NEW_CAT_FACT_ITEM = "NEW_CAT_FACT_ITEM";
export const NEW_CAT_FACT_ITEM_PENDING = `${NEW_CAT_FACT_ITEM}_PENDING`;
export const NEW_CAT_FACT_ITEM_FULFILLED = `${NEW_CAT_FACT_ITEM}_FULFILLED`;
export const NEW_CAT_FACT_ITEM_REJECTED = `${NEW_CAT_FACT_ITEM}_REJECTED`;

export type Item = {
  id: number;
  description: string;
};
// actions
export function createItem(description: string): FirstActionTypes {
  return { type: CREATE_ITEM, payload: description };
}

export function deleteItem(id: number): FirstActionTypes {
  return { type: DELETE_ITEM, meta: { id } };
}

export function saveItems(): FirstActionTypes {
  const promisePayload = new Promise((resolve, reject) => {
    setTimeout(() => resolve("success"), 500);
  });

  return { type: SAVE_ITEM_WITH_PROMISE, localPromisePayload: promisePayload };
}

export function newCatFactItem(): FirstActionTypes {
  return {
    type: NEW_CAT_FACT_ITEM,
    axiosPayload: axios.get("https://catfact.ninja/fact?max_length=140")
  };
}

interface CreateItemAction {
  type: typeof CREATE_ITEM;
  payload: string;
}
interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  meta: { id: number };
}
interface SaveItemsAction {
  type: typeof SAVE_ITEM_WITH_PROMISE;
  localPromisePayload: Promise<unknown>;
}
interface NewCatFactItem {
  type: typeof NEW_CAT_FACT_ITEM;
  axiosPayload: any;
}

interface NewCatFactItemFulfilled {
  type: typeof NEW_CAT_FACT_ITEM_FULFILLED;
  axiosPayload: { fact: string; length: number };
}

export type FirstActionTypes =
  | CreateItemAction
  | DeleteItemAction
  | SaveItemsAction
  | NewCatFactItem
  | NewCatFactItemFulfilled;
