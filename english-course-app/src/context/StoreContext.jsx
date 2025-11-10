import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import CourseApi from '../api/client.js';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const loadCatalog = useCallback(async () => {
    setStatus('loading');
    setError(null);

    try {
      const [coursesData, categoriesData] = await Promise.all([
        CourseApi.getCourses(),
        CourseApi.getCategories()
      ]);

      setCourses(coursesData);
      setCategories(categoriesData);
      setFeatured(
        coursesData
          .slice()
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 2)
      );
      setStatus('ready');
    } catch (err) {
      setError(err);
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    loadCatalog();
  }, [loadCatalog]);

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
      removeFromCart,
      status,
      error,
      refresh: loadCatalog
    }),
    [courses, categories, featured, cart, currentUser, status, error, loadCatalog]
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
