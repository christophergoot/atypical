import * as A from "./firstActionTypes";
import { AppActionTypes } from "./firstActions";
import { DefaultState } from "./types";

const defaultState: DefaultState = {
  catFacts: [],
  loading: false,
  error: ""
};

const firstReducer = (
  state: DefaultState = defaultState,
  action: AppActionTypes
) => {
  switch (action.type) {
    case A.DELETE_CAT_FACT: {
      return {
        ...state,
        items: state.catFacts.filter(
          catFact => catFact.fact !== action.meta.fact
        )
      };
    }

    case A.NEW_CAT_FACT_PENDING: {
      return {
        ...state,
        loading: true
      };
    }

    case A.NEW_CAT_FACT_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.meta.errorMessage
      };
    }

    case A.NEW_CAT_FACT_FULFILLED: {
      return {
        ...state,
        selectedCatFact: action.payload
      };
    }
  }
};

export default firstReducer;
