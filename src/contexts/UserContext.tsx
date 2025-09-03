// context/UserContext.tsx (note the .tsx extension)
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
}

interface OrderData extends UserData {
  orderId: string;
  items: any[];
  totalAmount: number;
  orderDate: string;
  orderTime: string;
}

interface UserContextType {
  userData: UserData | null;
  orderData: OrderData | null;
  saveUserData: (data: UserData) => void;
  saveOrderData: (data: OrderData) => void;
  clearData: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Fix: Add proper typing for children prop
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  // Fix: Add proper typing for parameters
  const saveUserData = (data: UserData) => {
    setUserData(data);
  };

  const saveOrderData = (data: OrderData) => {
    setOrderData(data);
  };

  const clearData = () => {
    setUserData(null);
    setOrderData(null);
  };

  return (
    <UserContext.Provider value={{
      userData,
      orderData,
      saveUserData,
      saveOrderData,
      clearData
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
