import { useState } from 'react';
import { MdMenu } from 'react-icons/md'

import './styles.css'

function Menu() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="menu-wrapper">
      <MdMenu size={32} onClick={() => setMenu(true)}/>
      <nav className={menu ? "menu" : "menu closed"}>
        <ul>
          <li>Início</li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;