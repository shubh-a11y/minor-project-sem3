import { useState, useEffect } from 'react';

const MAX_RECENTLY_VIEWED = 5;

export const useRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const storedRecentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    setRecentlyViewed(storedRecentlyViewed);
  }, []);

  const addRecentlyViewed = (serviceId) => {
    const newRecentlyViewed = [serviceId, ...recentlyViewed.filter(id => id !== serviceId)].slice(0, MAX_RECENTLY_VIEWED);
    setRecentlyViewed(newRecentlyViewed);
    localStorage.setItem('recentlyViewed', JSON.stringify(newRecentlyViewed));
  };

  return { recentlyViewed, addRecentlyViewed };
};
