import React from 'react'
import { useHistory } from 'react-router'
import './Navbar.css'
function Navabar() {
    const history =useHistory()
    return (
        <div className="navbar">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix" />
            <img onClick={()=>history.push('/signup')} className="avatar"  src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        </div>
    )
}

export default Navabar
