import React from 'react'
import { HelpWidget } from '../components/HelpWidget'
import Navbar from '../components/Navbar'

type Props = {}

const productView = (props: Props) => {
    const [navActive, setNavActive] = React.useState(false);
  return (
    <main>
    <Navbar navActive={navActive} setNavActive={setNavActive} />
    <HelpWidget />
    </main>
  )
}

export default productView