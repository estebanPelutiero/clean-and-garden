import React from 'react'

const Layout = ({children}) => {
  return (
    <section className='mt-28 md:mt-36 mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1120px] font-urbanist'>
        {children}
    </section>
  )
}

export default Layout