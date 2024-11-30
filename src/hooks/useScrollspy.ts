import { useState, useEffect } from 'react';

export function useScrollspy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const elements = ids
        .map(id => {
          const element = document.getElementById(id);
          if (!element) return { id, top: 0 };
          return {
            id,
            top: element.getBoundingClientRect().top + scroll
          };
        })
        .sort((a, b) => a.top - b.top);

      const current = elements.find((element, index) => {
        const nextElement = elements[index + 1];
        if (!nextElement) return true;
        return scroll >= element.top - offset && scroll < nextElement.top - offset;
      });

      setActiveId(current?.id || '');
    };

    listener();
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, [ids, offset]);

  return activeId;
}