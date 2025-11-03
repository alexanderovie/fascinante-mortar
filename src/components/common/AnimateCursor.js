import React, { useEffect } from 'react';
import { Cursor } from 'react-creative-cursor';

const AnimateCursor = () => {
  useEffect(() => {
    // Set attributes for all global anchor tags
    const globalATags = document.querySelectorAll('a');
    globalATags.forEach(tag => {
      tag.setAttribute('data-cursor-stick', '#stick-item');
      tag.setAttribute('data-cursor-exclusion', 'true');
      tag.setAttribute('data-cursor-size', '60px');
    });
    const globalSpanTags = document.querySelectorAll('span');
    globalSpanTags.forEach(tag => {
      tag.setAttribute('data-cursor-stick', '#stick-item');
      tag.setAttribute('data-cursor-exclusion', 'true');
      tag.setAttribute('data-cursor-size', '60px');
    });

    // Set attributes for magnetic items
    const magneticItems = document.querySelectorAll('.magnetic-item');
    magneticItems.forEach(item => {
      item.setAttribute('data-cursor-stick', '#stick-item');
      item.setAttribute('data-cursor-exclusion', 'true');
    });

    // Set specific attributes for video items only
    const videoItems = document.querySelectorAll('.video-player.magnetic-item');
    videoItems.forEach(item => {
      // Clear all previous attributes for video items
      item.removeAttribute('data-cursor-stick');
      item.removeAttribute('data-cursor-exclusion');

      // Set attributes only for video items
      item.setAttribute('data-cursor-size', '80px');
      item.setAttribute('data-cursor-text', 'Watch Reel');
    });
    // Set specific attributes for video items only
    const testimonialItems = document.querySelectorAll('.testimonial-img.video-player');
    testimonialItems.forEach(item => {
      // Clear all previous attributes for video items
      item.removeAttribute('data-cursor-stick');
      item.removeAttribute('data-cursor-exclusion');

      // Set attributes only for video items
      item.setAttribute('data-cursor-size', '80px');
      item.setAttribute('data-cursor-text', 'Watch Reel');
    });
    // Set specific attributes for video items only
    const infolItems = document.querySelectorAll('.info-flow-content a');
    infolItems.forEach(item => {
      // Clear all previous attributes for video items
      item.removeAttribute('data-cursor-stick');
      item.removeAttribute('data-cursor-exclusion');
      item.removeAttribute('data-cursor-size');
      item.removeAttribute('data-cursor-text');
    });
    // Set specific attributes for video items only
    const infoimgItems = document.querySelectorAll('.info-flow-img');
    infoimgItems.forEach(item => {
      // Clear all previous attributes for video items
      item.removeAttribute('data-cursor-stick');
      item.removeAttribute('data-cursor-exclusion');
      item.removeAttribute('data-cursor-size');
      item.removeAttribute('data-cursor-text');
    });
  }, []);

  return (
    <>
      <Cursor cursorBackgrounColor='#cccccc' isGelly={true} />
    </>
  );
};

export default AnimateCursor;
