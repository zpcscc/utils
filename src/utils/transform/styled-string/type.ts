import type { CSSProperties } from 'react';

export interface StyledType {
  [key: string]: CSSProperties | StyledType | string | number;
}
