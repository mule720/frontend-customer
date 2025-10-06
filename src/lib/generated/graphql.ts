import { GraphQLClient } from 'graphql-request';

// Minimal stub SDK so api.ts can import getSdk during development.
// Replace this with a real generated SDK (e.g. using graphql-code-generator) when available.

export function getSdk(client: GraphQLClient) {
  const noop = async (..._args: any[]) => ({} as any);

  return {
    login: async (vars: any) => noop(vars),
    register: async (vars: any) => noop(vars),
    products: async (vars: any) => noop(vars),
    product: async (vars: any) => noop(vars),
    addToCart: async (vars: any) => noop(vars),
    updateCartItem: async (vars: any) => noop(vars),
    removeFromCart: async (vars: any) => noop(vars),
    createOrder: async (vars: any) => noop(vars),
    orders: async (_vars?: any) => noop(),
    order: async (vars: any) => noop(vars),
    customerProfile: async () => noop(),
    updateProfile: async (vars: any) => noop(vars),
    addAddress: async (vars: any) => noop(vars),
    updateAddress: async (vars: any) => noop(vars),
    deleteAddress: async (vars: any) => noop(vars),
    addToWishlist: async (vars: any) => noop(vars),
    removeFromWishlist: async (vars: any) => noop(vars),
    addReview: async (vars: any) => noop(vars),
    updateReview: async (vars: any) => noop(vars),
  } as const;
}
