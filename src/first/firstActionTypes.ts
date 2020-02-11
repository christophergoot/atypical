const t = {
  CREATE_ITEM: "CREATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",

  SAVE_ITEM_WITH_PROMISE: "SAVE_ITEM_WITH_PROMISE",
  SAVE_ITEM_WITH_PROMISE_PENDING: `SAVE_ITEM_WITH_PROMISE_PENDING`,
  SAVE_ITEM_WITH_PROMISE_FULFILLED: `SAVE_ITEM_WITH_PROMISE_FULFILLED`,
  SAVE_ITEM_WITH_PROMISE_REJECTED: `SAVE_ITEM_WITH_PROMISE_REJECTED`,

  NEW_CAT_FACT_ITEM: "NEW_CAT_FACT_ITEM",
  NEW_CAT_FACT_ITEM_PENDING: `NEW_CAT_FACT_ITEM_PENDING`,
  NEW_CAT_FACT_ITEM_FULFILLED: `NEW_CAT_FACT_ITEM_FULFILLED`,
  NEW_CAT_FACT_ITEM_REJECTED: `NEW_CAT_FACT_ITEM_REJECTED`
};

export type Item = {
  id: number;
  description: string;
};

type T = Object;
interface CreateItemAction {
  type: typeof t.CREATE_ITEM;
  payload: string;
}
interface DeleteItemAction {
  type: typeof t.DELETE_ITEM;
  meta: { id: number };
}
interface SaveItemsAction {
  type: typeof t.SAVE_ITEM_WITH_PROMISE;
  payload: Promise<unknown>;
}
interface NewCatFactItem {
  type: typeof t.NEW_CAT_FACT_ITEM;
  payload: Promise<T>;
}

interface NewCatFactItemFulfilled {
  type: typeof t.NEW_CAT_FACT_ITEM_FULFILLED;
  payload: Promise<{ fact: string }>;
}

export type FirstActionTypes =
  | CreateItemAction
  | DeleteItemAction
  | SaveItemsAction
  | NewCatFactItem
  | NewCatFactItemFulfilled;

export default t;
