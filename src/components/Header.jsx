import {useState, useEffect} from 'react'
import desktop from '/images/bg-header-desktop.svg'
import mobile from '/images/bg-header-mobile.svg'

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <  768)

  useEffect(() => {
    const handleResize = ()  => {
      setIsMobile(window.innerWidth < 767)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return (
    <div className='w-full bg-desaturated-dark-cyan'>
        <img src={isMobile ? mobile : desktop} alt="" />
    </div>
  )
}

export default Header