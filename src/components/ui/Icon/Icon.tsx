import type React from 'react'
import * as Hi2 from "react-icons/hi2";

const Icon: React.FC = ({ name }: any) => {

  const component = (Hi2 as any)[name];

  if (!component)
    return Hi2['HiAcademicCap'];
  return component
}

export default Icon;