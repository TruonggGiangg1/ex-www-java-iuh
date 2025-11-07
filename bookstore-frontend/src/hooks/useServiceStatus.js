import { useEffect, useState } from 'react';

import { getServiceStatus } from '../services/systemService.js';

export default function useServiceStatus() {
  const [statuses, setStatuses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const data = await getServiceStatus();
        if (mounted) {
          setStatuses(data);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return { statuses, isLoading };
}
