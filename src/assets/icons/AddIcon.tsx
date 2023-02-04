import React from 'react';

const AddIcon: React.FunctionComponent = () => (
  <svg className="svg-icon"
       style={{ width: '200px', height: '200px', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }}
       viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M512 96C282.256 96 96 282.256 96 512s186.256 416 416 416 416-186.256 416-416S741.744 96 512 96zM512 896C299.92 896 128 724.08 128 512S299.92 128 512 128s384 171.92 384 384S724.08 896 512 896z"/>
    <path
      d="M776 496 528 496 528 248c0-4.416-3.584-8-8-8l-16 0c-4.416 0-8 3.584-8 8L496 496 248 496c-4.416 0-8 3.584-8 8l0 16c0 4.416 3.584 8 8 8L496 528l0 248c0 4.4 3.584 8 8 8l16 0c4.416 0 8-3.6 8-8L528 528l248 0c4.4 0 8-3.584 8-8l0-16C784 499.584 780.4 496 776 496z"/>
  </svg>
);

export default AddIcon;
