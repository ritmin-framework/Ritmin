import useStore from './store';

// دالة للحصول على واجهة API مخصصة
export const store = () => {
  const { count, increment, decrement, reset, setCount } = useStore((state) => ({
    count: state.count,
    increment: state.increment,
    decrement: state.decrement,
    reset: state.reset,
    setCount: state.setCount,
  }));

  return {
    get: () => count,
    add: () => increment(),
    decrease: () => decrement(),
    reset: () => reset(),
    set: (value: number) => setCount(value),
    
  };
};
