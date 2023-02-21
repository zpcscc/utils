import styled from '@emotion/styled';

interface ColorProps {
  bg: string;
}

export const Color = styled.div<ColorProps>`
  background-color: ${(props) => props.bg};
`;
