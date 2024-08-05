import { StoreState } from './store';
declare const store: () => {
  get: () => number;
  add: () => void;
  decrease: () => void;
  reset: () => void;
  set: (value: number) => void;
  updates: (callback: (state: StoreState) => void) => () => void;
};
export default store;
