import { createContext, useContext, useState, ReactNode } from 'react';
import { AuthContextType, User } from '../types/auth';
import { authenticateUser } from '../lib/db';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const authenticatedUser = await authenticateUser(email, password);
    if (!authenticatedUser) {
      throw new Error('Invalid email or password');
    }
    setUser(authenticatedUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}