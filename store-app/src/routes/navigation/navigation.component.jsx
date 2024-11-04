import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartDrawerContext } from "../../contexts/cartDrawer.context"
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles.jsx"


const Navigation = () => {
  const{currentUser}= useContext(UserContext);
  const{isOpen}=useContext(CartDrawerContext);

    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to="/">
          <CrwnLogo className="logo" />
          </LogoContainer>
          <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          { currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ):(
            <NavLink to="/auth">SIGN IN</NavLink>
            )
          }
           <CartIcon/>
          </NavLinks>
          { isOpen &&  <CartDropdown/> }
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation