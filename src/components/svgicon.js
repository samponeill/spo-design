import React from 'react'

const SvgIcon = props => (
  <svg
    id="prefix__Layer_1"
    x={0}
    y={0}
    viewBox="0 0 568.82 503.06"
    xmlSpace="preserve"
    preserveAspectRatio="xMidYMid meet"
    width="300px"    
    {...props}
  >
    <style>
      {
        '@keyframes transform1{0%{transform:rotate(-360deg) scale(.8)}50%{transform:rotate(-180deg) scale(1)}to{transform:rotate(0deg) scale(.8)}}.prefix__st1,.prefix__st2{fill:none;stroke:#fff;stroke-width:50;stroke-linecap:round;stroke-miterlimit:10;stroke-dasharray:234,100}.prefix__st2{stroke-dasharray:124,100}.prefix__st1,.prefix__st2{animation:dash2 2s ease-in;transition:stroke-dashoffset .5s;stroke-dashoffset:0}.prefix__st2{animation:dash3 2s ease-in}svg:hover .prefix__st1,svg:hover .prefix__st2{transition:stroke-dashoffset .5s;stroke-dashoffset:233}svg:hover .prefix__st2{stroke-dashoffset:123}'
      }
    </style>
    <g
      style={{
        transition: 'transform 1s',
      }}
      display="block"
    >
      <path
        style={{
          animation: 'dash1 2s ease-in',
          transition: 'stroke-dashoffset .5s',
        }}
        fill="none"
        stroke="#fff"
        strokeWidth={40}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeDasharray="348 100"
        d="M317.632 45.624L137.424 355.896"
      />
      <path
        className="prefix__st1"
        d="M285.09 445.13l168-289M115.09 347.13l168-290"
        transform="scale(.8)"
      />
      <path
        className="prefix__st2"
        d="M508.91 252.1L396.78 446.03M172.04 57.87L59.91 251.8"
        transform="scale(.8)"
      />
    </g>
  </svg>
)

export default SvgIcon
