export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'technician' | 'viewer';
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}