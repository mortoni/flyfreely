import * as React from 'react';
import styled from '../../utils/styled-components';

export interface ColorProps {
  color: string;
  name: string;
}

const ColorBox = styled<{ color: string }, 'div'>('div')`
  width: 100px;
  height: 100px;
  background: ${({ color }) => color};
  border-radius: 25px;
`;

const ColorName = styled<{}, 'div'>('div')`
  background: #FFF;
  height: 50px;
  color: #999;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0;
`;

const Wrapper = styled<{}, 'div'>('div')`
  margin: 30px;
  display: inline-block;
  width: 100px;
  height: 150px;
  background: #FFF;
`;

const Color: React.SFC<ColorProps> = ({
  color,
  name,
}) => (
    <Wrapper>
      <ColorBox color={color} />
      <ColorName>
        {name}
      </ColorName>
    </Wrapper>
  );

export default Color;
