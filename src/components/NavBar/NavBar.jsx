import React ,{useState}from'react';
import './NavBar.css';
import cart from '../assests/cart.png';
import logo from '../assests/logo.png';
import { Link } from 'react-router-dom';

const NavBar=()=>{

    const[menu,setMenu]=useState("shop");

   return(
        <div className="navbar">
            <div className='nav-logo'>
                <img src={logo}  className='logo'/>
                <p>MedPlus</p>

            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration: 'none'}} to='/'>Home</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("homeo")}}><Link style={{textDecoration: 'none'}} to='/homeo'>Homeopathy</Link>{menu==="homeo"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("health")}}><Link style={{textDecoration: 'none'}} to='/health'>Health Care</Link>{menu==="health"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("personal")}}><Link style={{textDecoration: 'none'}} to='/personal'>Personal care</Link>{menu==="personal++++++++++++"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart} className='mcart'/></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    );
}

export default NavBar;