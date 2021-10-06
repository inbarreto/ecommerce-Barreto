import './NavBar.css';
import logo from './../../logo.svg';

export const NavBar = () => {
return (

    <div className ="NavBar">
<ul>
 <li><img src={logo} className="App-logo" alt="logo" /> </li>
  <li className="active"><a >Home</a></li>
  <li><a >Novedades</a></li>
  <li><a >Contacto</a></li>
  <li className="rightli"><a >Login</a></li>
</ul>
    </div>

)
}