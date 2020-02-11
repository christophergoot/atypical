import * as c from "./firstActions";

type DefaultState = {
  items: c.Item[];
};

const defaultState: DefaultState = {
  items: []
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
      const index = state.items.findIndex(item => item.id === action.meta.id);
      return {
        ...state,
        items: [...state.items.splice(index, 1)]
      };
    }
  }
};

export default firstReducer;
