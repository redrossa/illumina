import '../styles/NavItem.css'

import {NavLink} from "react-router-dom";

export default function NavItem(props) {
  return (
      <li className='nav-item' style={{float: props.position}}>
        <NavLink exact={props.exact} activeClassName={props.activeClassName} to={props.to}>
          {props.children}
        </NavLink>
      </li>
  );
}