import React, { Component } from 'react';

const Button = ({ style, text, action }) => (
  <button style={style} onClick={action}>
    {text}
  </button>
)

export default Button;