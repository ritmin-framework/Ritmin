import create from 'zustand';

export interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
  subscribe: (callback: (state: StoreState) => void) => () => void;
}

const useStore = create<StoreState>((set, get) => {
  const listeners: Array<(state: StoreState) => void> = [];

  const notify = () => {
    const state = get();
    listeners.forEach((listener) => listener(state));
  };

  return {
    count: 0,
    increment: () => {
      set((state) => {
        const newState = { count: state.count + 1 };
        notify();
        return { ...state, ...newState };
      });
    },
    decrement: () => {
      set((state) => {
        const newState = { count: state.count - 1 };
        notify();
        return { ...state, ...newState };
      });
    },
    reset: () => {
      set((state) => {
        const newState = { count: 0 };
        notify();
        return { ...state, ...newState };
      });
    },
    setCount: (value: number) => {
      set((state) => {
        const newState = { count: value };
        notify();
        return { ...state, ...newState };
      });
    },
    subscribe: (callback: (state: StoreState) => void) => {
      listeners.push(callback);
      return () => {
        const index = listeners.indexOf(callback);
        if (index > -1) {
          listeners.splice(index, 1);
        }
      };
    },
  };
});

export default useStore;
