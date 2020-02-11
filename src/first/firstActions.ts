// types of action
export const CREATE_ITEM = "CREATE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export type Item = {
  id: number;
  description: string;
};
// actions
export const createItem = (description: string): FirstActionTypes => ({
  type: CREATE_ITEM,
  payload: description
});

export const deleteItem = (id: number): FirstActionTypes => ({
  type: DELETE_ITEM,
  meta: { id }
});

interface CreateItemAction {
  type: typeof CREATE_ITEM;
  payload: string;
}
interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  meta: { id: number };
}

export type FirstActionTypes = CreateItemAction | DeleteItemAction;
