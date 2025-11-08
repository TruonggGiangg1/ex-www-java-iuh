import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import MockApi from '../api/MockApi.js';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    MockApi.getCourses().then(setCourses);
    MockApi.getFeaturedCourses().then(setFeatured);
    MockApi.getCategories().then(setCategories);
  }, []);

  const addToCart = (course) => {
    setCart((prev) => {
      if (prev.some((item) => item.id === course.id)) {
        return prev;
      }
      return [...prev, course];
    });
  };

  const removeFromCart = (courseId) => {
    setCart((prev) => prev.filter((item) => item.id !== courseId));
  };

  const value = useMemo(
    () => ({
      courses,
      categories,
      featured,
      cart,
      currentUser,
      login: (email) => setCurrentUser({ email, name: 'Guest Learner' }),
      logout: () => {
        setCurrentUser(null);
        setCart([]);
      },
      addToCart,
      removeFromCart
    }),
    [courses, categories, featured, cart, currentUser]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
