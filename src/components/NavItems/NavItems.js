

const NavItems = (props) => {
  return (
    <li className="nav-item">
      {props.children}
    </li>
  )
}


const NavItemsDropDown = (props) => {
  return (
    <li className="nav-item dropdown">
      {props.children}
    </li>
  )
}
export default NavItems
export {NavItemsDropDown}