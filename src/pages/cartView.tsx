import React from 'react'
import { HelpWidget } from '../components/HelpWidget'
import Navbar from '../components/Navbar'


type Props = {}

const cartView = (props: Props) => {
    const [navActive, setNavActive] = React.useState(false);
  return (
    <main>
    <Navbar navActive={navActive} setNavActive={setNavActive} />
    <div>cartView</div>
    <HelpWidget />
    </main>
  )
}

export default cartView