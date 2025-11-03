
"use client";
import useInViewCounter from '@/customHooks/useInViewCounter';
import React from 'react';

const Counter = ({ start, end, speed, forwardedRef, as: Tag = 'span', ...rest }) => {
  const count = useInViewCounter(forwardedRef, start, end, speed);

  return (
    <Tag ref={forwardedRef} {...rest}>
      {count}
    </Tag>
  );
};

export default Counter;
