import React from 'react';

export default function TopCircle() {
  return (
    <svg width='978' height='978' xmlns='http://www.w3.org/2000/svg' className='-translate-x-[300px] -translate-y-[2300px] z-10'>
      <defs>
        <linearGradient x1='50%' y1='.779%' x2='50%' y2='100%' id='a'>
          <stop stop-color='#0989B4' stop-opacity='0' offset='0%' />
          <stop stop-color='#53FFEE' offset='99.94%' />
        </linearGradient>
      </defs>
      <ellipse
        fill='url(#a)'
        transform='rotate(-135 489 489)'
        cx='489'
        cy='489'
        rx='489'
        ry='488'
        fill-rule='evenodd'
        opacity='.5'
      />
    </svg>
  );
}