import { Input } from "@nextui-org/react";

export default function App({placeholder,width,handleChange}) {
  return <Input style={{width:width}} bordered placeholder={placeholder} aria-label='ciao' onChange={handleChange}/>;
}