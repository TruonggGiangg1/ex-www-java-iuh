import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { getCatalog, getFeaturedBooks } from '../services/bookService.js';

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const [catalog, featuredBooks] = await Promise.all([getCatalog(), getFeaturedBooks()]);
        setBooks(catalog);
        setFeatured(featuredBooks);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, []);

  const value = useMemo(
    () => ({
      books,
      featured,
      isLoading
    }),
    [books, featured, isLoading]
  );

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

BookProvider.propTypes = {
  children: PropTypes.node
};

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks phải được sử dụng bên trong BookProvider');
  }
  return context;
}
