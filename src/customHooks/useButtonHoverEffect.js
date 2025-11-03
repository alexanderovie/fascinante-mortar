'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useButtonHoverEffect = () => {
  const pathname = usePathname();

  useEffect(() => {
    const buttons = document.querySelectorAll('.btn-hover');

    const handleMouseMove = (e, btn) => {
      const span = btn.querySelector('span');
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      span.style.top = `${relY}px`;
      span.style.left = `${relX}px`;
    };

    buttons.forEach((btn) => {
      const span = btn.querySelector('span');
      if (!span) return;

      const onEnter = (e) => handleMouseMove(e, btn);
      const onLeave = (e) => handleMouseMove(e, btn);

      btn.addEventListener('mouseenter', onEnter);
      btn.addEventListener('mouseout', onLeave);

      // Cleanup function
      return () => {
        btn.removeEventListener('mouseenter', onEnter);
        btn.removeEventListener('mouseout', onLeave);
      };
    });
  }, [pathname]); 
};

export default useButtonHoverEffect;
