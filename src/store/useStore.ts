import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  _id: string;          // ✅ unique CMS id
  slug: string;
  title: string;
  price: number;
  image?: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (_id: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const existing = get().items.find(
          (i) => i._id === item._id
        );

        if (existing) {
          set({
            items: get().items.map((i) =>
              i._id === item._id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          });
        } else {
          set({
            items: [...get().items, { ...item, quantity: 1 }],
          });
        }
      },

      removeItem: (_id) =>
        set({
          items: get().items.filter((i) => i._id !== _id),
        }),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "aqua-cart",
    }
  )
);
