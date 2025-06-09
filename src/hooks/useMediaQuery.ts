import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    // Додаємо слухача
    mediaQuery.addEventListener('change', handler);

    // При демонтажі — видаляємо
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
