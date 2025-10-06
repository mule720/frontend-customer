import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/graphql';

// Vite exposes env variables via `import.meta.env`. Use `VITE_API_URL` in your .env files.
const API_URL = (import.meta.env.VITE_API_URL as string) || 'http://localhost:8000/graphql';

// Create GraphQL client with authentication
const graphqlClient = new GraphQLClient(API_URL, {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
export const setAuthToken = (token: string | null) => {
  if (token) {
    graphqlClient.setHeader('Authorization', `Bearer ${token}`);
  } else {
    graphqlClient.setHeader('Authorization', '');
  }
};


// Export typed SDK
export const api = getSdk(graphqlClient);

// Authentication mutations
export const login = async (email: string, password: string) => {
  const response = await api.login({ email, password });
  if (response.login?.token) {
    setAuthToken(response.login.token);
    return response.login;
  }
  throw new Error('Login failed');
};

export const register = async (input: RegisterInput) => {
  const response = await api.register({ input });
  if (response.register?.token) {
    setAuthToken(response.register.token);
    return response.register;
  }
  throw new Error('Registration failed');
};

export const logout = () => {
  setAuthToken(null);
  window.location.href = '/login';
};

// Product queries
export const getProducts = async (params: ProductsQueryParams) => {
  const response = await api.products(params);
  return response.products;
};

export const getProduct = async (id: string) => {
  const response = await api.product({ id });
  return response.product;
};

// Cart mutations
export const addToCart = async (input: AddToCartInput) => {
  const response = await api.addToCart({ input });
  return response.addToCart;
};

export const updateCartItem = async (input: UpdateCartItemInput) => {
  const response = await api.updateCartItem({ input });
  return response.updateCartItem;
};

export const removeFromCart = async (id: string) => {
  const response = await api.removeFromCart({ id });
  return response.removeFromCart;
};

// Order mutations
export const createOrder = async (input: CreateOrderInput) => {
  const response = await api.createOrder({ input });
  return response.createOrder;
};

export const getOrders = async () => {
  const response = await api.orders();
  return response.orders;
};

export const getOrder = async (id: string) => {
  const response = await api.order({ id });
  return response.order;
};

// Customer profile
export const getProfile = async () => {
  const response = await api.customerProfile();
  return response.customerProfile;
};

export const updateProfile = async (input: UpdateProfileInput) => {
  const response = await api.updateProfile({ input });
  return response.updateProfile;
};

// Address management
export const addAddress = async (input: AddressInput) => {
  const response = await api.addAddress({ input });
  return response.addAddress;
};

export const updateAddress = async (input: UpdateAddressInput) => {
  const response = await api.updateAddress({ input });
  return response.updateAddress;
};

export const deleteAddress = async (id: string) => {
  const response = await api.deleteAddress({ id });
  return response.deleteAddress;
};

// Wishlist management
export const addToWishlist = async (productId: string) => {
  const response = await api.addToWishlist({ productId });
  return response.addToWishlist;
};

export const removeFromWishlist = async (productId: string) => {
  const response = await api.removeFromWishlist({ productId });
  return response.removeFromWishlist;
};

// Reviews
export const addReview = async (input: ReviewInput) => {
  const response = await api.addReview({ input });
  return response.addReview;
};

export const updateReview = async (input: UpdateReviewInput) => {
  const response = await api.updateReview({ input });
  return response.updateReview;
};

// Types
export interface ProductsQueryParams {
  categoryId?: string;
  search?: string;
  first?: number;
  skip?: number;
}

export interface RegisterInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AddToCartInput {
  productId: string;
  variantId?: string;
  quantity: number;
}

export interface UpdateCartItemInput {
  itemId: string;
  quantity: number;
}

export interface CreateOrderInput {
  shippingAddressId: string;
  billingAddressId: string;
  paymentMethod: string;
  shippingMethod: string;
}

export interface UpdateProfileInput {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

export interface AddressInput {
  firstName: string;
  lastName: string;
  streetAddress1: string;
  streetAddress2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault?: boolean;
}

export interface UpdateAddressInput extends AddressInput {
  id: string;
}

export interface ReviewInput {
  productId: string;
  rating: number;
  title: string;
  content: string;
  pros?: string[];
  cons?: string[];
}
