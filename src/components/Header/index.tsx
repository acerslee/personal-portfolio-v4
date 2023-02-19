import { FC } from "react";
import Image from "next/image";

import Navbar from "./Navbar";

const Header: FC = () => {
  return (
    <header>
      <Image  src={''} alt={'webpage logo'} />
      <Navbar />
    </header>
  )
}

export default Header