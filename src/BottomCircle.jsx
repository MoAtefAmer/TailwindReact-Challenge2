import React from 'react';

export default function BottomCircle() {
  return (
    <svg width='978' height='972' xmlns='http://www.w3.org/2000/svg' className='-translate-y-[500px] translate-x-[1000px] z-20 '>
      <defs>
        <linearGradient x1='50%' y1='.779%' x2='50%' y2='100%' id='a'>
          <stop stopColor='#0989B4' stopOpacity='0' offset='0%' />
          <stop stopColor='#53FFEE' offset='99.94%' />
        </linearGradient>
      </defs>
      <ellipse
        fill='url(#a)'
        transform='rotate(-135 489 489)'
        cx='489'
        cy='489'
        rx='489'
        ry='488'
        fillRule='evenodd'
        opacity='.5'
      />
    </svg>
  );
}
