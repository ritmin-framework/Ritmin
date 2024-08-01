import create from 'zustand';
const useStore = create((set, get) => ({
    items: [],
    addItem: (name) => set((state) => ({
        items: [...state.items, { id: Date.now(), name }],
    })),
    removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id),
    })),
    getItems: () => get().items,
}));
export default useStore;
//# sourceMappingURL=store.js.map