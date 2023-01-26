import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function Shuffle ({ fill }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 44 44">
      <Path d="m19.924,9.827l-.189-.114c-0.823-0.429-1.742-0.697-2.735-0.697h-16c-0.552,0-1,0.447-1,0.999 0,0.552 0.448,0.999 1,0.999h16c0.655,0 1.265,0.173 1.811,0.451l.01-.014c0.161,0.11 0.344,0.19 0.554,0.19 0.552,0 1-0.447 1-1 0-0.345-0.185-0.634-0.451-0.814zm23.654,23.369l-3.938-3.915c-0.375-0.373-0.983-0.373-1.358,0-0.375,0.373-0.375,0.977 0,1.35l2.374,2.359h-13.656c-0.718,0-1.383-0.204-1.966-0.535l-.008,.013c-0.155-0.099-0.329-0.171-0.526-0.171-0.552,0-1,0.447-1,1 0,0.339 0.179,0.623 0.437,0.805l-.011,.016 .201,.104c0.856,0.474 1.825,0.767 2.873,0.767h13.686l-2.404,2.39c-0.375,0.373-0.375,0.977 0,1.35 0.375,0.373 0.983,0.373 1.358,0l4.032-4.008c0.199-0.184 0.328-0.44 0.328-0.732 0-0.331-0.173-0.611-0.422-0.793z" fill={fill} />
      <Path d="m43.671,9.284l-4.031-4.012c-0.375-0.373-0.983-0.373-1.358,0-0.375,0.373-0.375,0.978 0,1.351l2.404,2.393h-13.686c-3.314,0-6,2.687-6,6v14c0,2.209-1.791,4-4,4h-16c-0.552,0-1,0.447-1,1 0,0.553 0.448,1 1,1h16c3.313,0 6-2.687 6-6v-14c0-2.209 1.791-4 4-4h13.656l-2.374,2.362c-0.375,0.373-0.375,0.977 0,1.351 0.375,0.373 0.983,0.373 1.358,0l3.938-3.919c0.249-0.182 0.422-0.462 0.422-0.794 0-0.292-0.129-0.549-0.329-0.732z" fill={fill} />
    </Svg>
  )
}

Shuffle.defaultProps = {
  fill: '#fff'
}