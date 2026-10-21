import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (product, selectedSize = null, quantity = 1) => {
        const { cartItems } = get();
        const key = `${product.id}-${selectedSize || 'default'}`;
        const existingItem = cartItems.find((item) => item.cartKey === key);

        if (existingItem) {
          set({
            cartItems: cartItems.map((item) =>
              item.cartKey === key
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            cartItems: [
              ...cartItems,
              { ...product, cartKey: key, selectedSize, quantity },
            ],
          });
        }
      },

      removeFromCart: (cartKey) => {
        set({ cartItems: get().cartItems.filter((item) => item.cartKey !== cartKey) });
      },

      incrementQuantity: (cartKey) => {
        set({
          cartItems: get().cartItems.map((item) =>
            item.cartKey === cartKey ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },

      decrementQuantity: (cartKey) => {
        const { cartItems } = get();
        const item = cartItems.find((i) => i.cartKey === cartKey);
        if (!item) return;
        if (item.quantity <= 1) {
          set({ cartItems: cartItems.filter((i) => i.cartKey !== cartKey) });
        } else {
          set({
            cartItems: cartItems.map((i) =>
              i.cartKey === cartKey ? { ...i, quantity: i.quantity - 1 } : i
            ),
          });
        }
      },

      clearCart: () => set({ cartItems: [] }),

      getItemCount: () => get().cartItems.reduce((total, item) => total + item.quantity, 0),

      getSubtotal: () =>
        get().cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const shipping = subtotal > 0 ? (subtotal >= 75 ? 0 : 5.99) : 0;
        return subtotal + shipping;
      },

      getShipping: () => {
        const subtotal = get().getSubtotal();
        return subtotal > 0 ? (subtotal >= 75 ? 0 : 5.99) : 0;
      },
    }),
    {
      name: 'auramart-cart',
    }
  )
);

export { useCartStore };
export default useCartStore;
