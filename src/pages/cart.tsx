import React, { useState } from 'react'
import { HelpWidget } from '../components/HelpWidget'
import Navbar from '../components/Navbar'


type Props = {}

const cartView = (props: Props) => {
    const [navActive, setNavActive] = useState(false);
  return (
    <main>
    <Navbar navActive={navActive} setNavActive={setNavActive} />
    <HelpWidget />
    </main>
  )
}

export default cartView