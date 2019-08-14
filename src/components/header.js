import React from 'react'
import  { NavLink } from 'react-router-dom'

import '../css/header.css'

class Header extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-6 offset-3">
                    <ul className="router">
                        <li>
                            <NavLink exact activeClassName="active-route" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active-route" to="/movie">Movie</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Header