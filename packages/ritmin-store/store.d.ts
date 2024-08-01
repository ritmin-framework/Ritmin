interface Item {
    id: number;
    name: string;
}
interface StoreState {
    items: Item[];
    addItem: (name: string) => void;
    removeItem: (id: number) => void;
    getItems: () => Item[];
}
declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<StoreState>>;
export default useStore;
