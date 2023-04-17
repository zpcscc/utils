import { Button, Tooltip } from 'antd';

// 颜色块
const Color: React.FC<{ color: string; btn: string }> = ({ color, btn }) => (
  <Tooltip title='点击复制'>
    <Button
      className={btn}
      data-clipboard-text={color}
      size='small'
      style={{ backgroundColor: color, width: '24px' }}
    />
  </Tooltip>
);

export default Color;
