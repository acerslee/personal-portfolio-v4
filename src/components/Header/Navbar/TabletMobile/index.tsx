import { FC, useState } from 'react'
import UilBars from '@iconscout/react-unicons/icons/uil-bars'
import UilMultiply from '@iconscout/react-unicons/icons/uil-multiply'


const TabletMobileNavbar: FC = () => {
  const [isOpenedMenu, setIsOpenedMenu ] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsOpenedMenu(!isOpenedMenu)
  }


  return (
    <nav>
      {isOpenedMenu
        ? <UilMultiply size={32} color={'#d3d4d7'} onClick={toggleMenu} />
        : <UilBars size={32} color={'#d3d4d7'} onClick={toggleMenu} />
      }
    </nav>
  )
}

export default TabletMobileNavbar
