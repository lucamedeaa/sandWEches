import { Button, Spacer } from '@nextui-org/react';
import './button.css'
export default function NormalButton({text,width,onClick}) {
  return (
      <Button width={width} bordered onClick={onClick}>{text}</Button>
  );
}