import A, { FirstActionTypes, Item } from "./firstActionTypes";

type DefaultState = {
  items: Item[];
  loading: boolean;
};

const defaultState: DefaultState = {
  items: [],
  loading: false
};

const firstReducer = (
  state: DefaultState = defaultState,
  action: FirstActionTypes
) => {
  switch (action.type) {
    case A.CREATE_ITEM: {
      return {
        ...state,
        items: [
          ...state.items,
          { id: state.items.length + 1, description: action.payload }
        ]
      };
    }

    case A.DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.meta.id)
      };
    }

    case A.NEW_CAT_FACT_ITEM_PENDING:
    case A.NEW_CAT_FACT_ITEM_REJECTED:
    case A.SAVE_ITEM_WITH_PROMISE_PENDING:
    case A.SAVE_ITEM_WITH_PROMISE_REJECTED: {
      return {
        ...state,
        loading: false
      };
    }

    case A.SAVE_ITEM_WITH_PROMISE_FULFILLED: {
      return {
        ...state,
        loading: false
      };
    }

    case A.NEW_CAT_FACT_ITEM_FULFILLED: {
      return {
        state,
        items: [
          ...state.items,
          { id: state.items.length + 1, description: action.payload.fact }
        ]
      };
    }
  }
};

export default firstReducer;
