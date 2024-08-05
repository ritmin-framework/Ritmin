export interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
  subscribe: (callback: (state: StoreState) => void) => () => void;
}
declare const useStore: import('zustand').UseBoundStore<
  import('zustand').StoreApi<StoreState>
>;
export default useStore;
