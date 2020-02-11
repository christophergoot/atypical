import * as c from "./firstActions";

type DefaultState = {
  items: c.Item[];
  loading: boolean;
};

const defaultState: DefaultState = {
  items: [],
  loading: false
};

const firstReducer = (
  state: DefaultState = defaultState,
  action: c.FirstActionTypes
) => {
  switch (action.type) {
    case c.CREATE_ITEM: {
      return {
        ...state,
        items: [
          ...state.items,
          { id: state.items.length + 1, description: action.payload }
        ]
      };
    }

    case c.DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.meta.id)
      };
    }

    case c.NEW_CAT_FACT_ITEM_PENDING:
    case c.NEW_CAT_FACT_ITEM_REJECTED:
    case c.SAVE_ITEM_WITH_PROMISE_PENDING:
    case c.SAVE_ITEM_WITH_PROMISE_REJECTED: {
      return {
        ...state,
        loading: false
      };
    }

    case c.SAVE_ITEM_WITH_PROMISE_FULFILLED: {
      return {
        ...state,
        loading: false
      };
    }

    case c.NEW_CAT_FACT_ITEM_FULFILLED: {
      return {
        state,
        items: [
          ...state.items,
          { id: state.items.length + 1, description: action.axiosPayload.fact }
        ]
      };
    }
  }
};

export default firstReducer;
