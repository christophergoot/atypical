import axios, { AxiosPromise } from "axios";
import A, {
  CreateItemAction,
  DeleteItemAction,
  SaveItemsAction,
  NewCatFactItem
} from "./firstActionTypes";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

// actions
export function createItem(description: string): CreateItemAction {
  return { type: A.CREATE_ITEM, payload: description };
}

export function deleteItem(id: number): DeleteItemAction {
  return { type: A.DELETE_ITEM, meta: { id } };
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

export function newCatFactItem(): NewCatFactItem {
  return {
    type: A.NEW_CAT_FACT_ITEM,
    payload: axios.get("https://catfact.ninja/fact?max_length=140")
  };
}
