import useStore, { StoreState } from './store';

const store = () => {
  const { count, increment, decrement, reset, setCount, subscribe } = useStore(
    (state) => ({
      count: state.count,
      increment: state.increment,
      decrement: state.decrement,
      reset: state.reset,
      setCount: state.setCount,
      subscribe: state.subscribe,
    }),
  );

  return {
    get: () => count,
    add: () => increment(),
    decrease: () => decrement(),
    reset: () => reset(),
    set: (value: number) => setCount(value),
    updates: (callback: (state: StoreState) => void) => {
      const unsubscribe = subscribe(callback);
      return () => unsubscribe();
    },
  };
};

export default store;
