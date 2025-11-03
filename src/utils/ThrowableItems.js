'use client';

import { useEffect, useRef } from 'react';

const tags = [
    { text: 'Machine Learning', className: 'throwable-item' },
    { text: 'Professional Expert', className: 'pink throwable-item' },
    { text: '06 Global Branches', className: 'blue throwable-item' },
    { text: '99% Success', className: 'green throwable-item' },
    { text: 'Data Analytics', className: 'throwable-item' },
    { text: 'Product Design', className: 'light-blue throwable-item' },
    { text: 'IT Consulting', className: 'light-green throwable-item' },
];

export default function ThrowableItems() {
    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const items = itemRefs.current;
        const container = containerRef.current;
        const gravity = 0.5;
        const friction = 0.98;
        const bounce = 0.8;

        items.forEach((el, i) => {
            let vx = (Math.random() - 0.5) * 8;
            let vy = (Math.random() - 0.5) * 8;
            let isDragging = false;
            let offset = { x: 0, y: 0 };
            let rotation = Math.random() * 360;
            let vRotation = (Math.random() - 0.5) * 4;

            el.style.position = 'absolute';
            el.style.left = `${Math.random() * (container.clientWidth - 120)}px`;
            el.style.top = `${Math.random() * (container.clientHeight - 40)}px`;
            el.style.transform = `rotate(${rotation}deg)`;

            const update = () => {
                if (!isDragging) {
                    vx *= friction;
                    vy += gravity;
                    vRotation *= friction;

                    let newX = el.offsetLeft + vx;
                    let newY = el.offsetTop + vy;
                    rotation += vRotation;

                    if (newX <= 0 || newX + el.offsetWidth >= container.clientWidth) {
                        vx *= -bounce;
                        newX = Math.max(0, Math.min(newX, container.clientWidth - el.offsetWidth));
                    }

                    if (newY <= 0 || newY + el.offsetHeight >= container.clientHeight) {
                        vy *= -bounce;
                        newY = Math.max(0, Math.min(newY, container.clientHeight - el.offsetHeight));
                    }

                    el.style.left = `${newX}px`;
                    el.style.top = `${newY}px`;
                    el.style.transform = `rotate(${rotation}deg)`;
                }

                requestAnimationFrame(update);
            };

            const onMouseDown = (e) => {
                isDragging = true;
                offset = {
                    x: e.clientX - el.offsetLeft,
                    y: e.clientY - el.offsetTop,
                };
                el.style.zIndex = 100;

                // Push nearby items slightly away
                items.forEach((otherEl, j) => {
                    if (i !== j) {
                        const dx = otherEl.offsetLeft - el.offsetLeft;
                        const dy = otherEl.offsetTop - el.offsetTop;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 100) {
                            const angle = Math.atan2(dy, dx);
                            const push = 20;
                            otherEl.style.left = `${otherEl.offsetLeft + Math.cos(angle) * push}px`;
                            otherEl.style.top = `${otherEl.offsetTop + Math.sin(angle) * push}px`;
                        }
                    }
                });
            };

            const onMouseMove = (e) => {
                if (isDragging) {
                    const x = e.clientX - offset.x;
                    const y = e.clientY - offset.y;
                    vx = x - el.offsetLeft;
                    vy = y - el.offsetTop;
                    vRotation = vx * 0.2;
                    el.style.left = `${x}px`;
                    el.style.top = `${y}px`;
                    el.style.transform = `rotate(${rotation + vRotation}deg)`;
                }
            };

            const onMouseUp = () => {
                isDragging = false;
                el.style.zIndex = '';
            };

            el.addEventListener('mousedown', onMouseDown);
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);

            update();
        });
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                top: '40px',
                height: '',  // Set a height for the container
                position: 'relative',
                background: 'transparent',
            }}
        >
            {tags.map((tag, i) => (
                <span
                    key={i}
                    className={tag.className}
                    ref={(el) => (itemRefs.current[i] = el)}
                >
                    {tag.text}
                </span>
            ))}
        </div>
    );
}
