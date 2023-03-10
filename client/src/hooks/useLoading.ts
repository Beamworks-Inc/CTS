import { useReducer, useEffect } from 'react';

type FetchType = 'LOADING' | 'SUCCESS' | 'ERROR';
type LoadingState = {
  loading: boolean;
  data: any; // TODO: Make it Generic
  error: any;
};
interface ActionType {
  type: FetchType;
  data?: any;
  error?: any;
}

const INIT_LOADING_STATE: LoadingState = {
  loading: false,
  data: null,
  error: false,
};

function reducer(state: any, action: ActionType) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useLoading(callback: any, deps = []): [LoadingState, () => void] {
  const [state, dispatch] = useReducer(reducer, INIT_LOADING_STATE);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const [data] = await callback();
      console.log('Loading Success', data);
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      console.log('Loading Error', e);
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useLoading;
