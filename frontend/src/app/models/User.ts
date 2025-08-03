export interface User {
  id?: number;
  role_id?: number;
  name?: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
  isAuthenticated?: boolean;
  token?: string;
}
