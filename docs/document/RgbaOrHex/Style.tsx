import styled from '@emotion/styled';

interface ColorProps {
  bg: string;
}

export const Color = styled.div<ColorProps>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.bg};
`;
