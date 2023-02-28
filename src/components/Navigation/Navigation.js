import React from 'react'
import './Navigation.css'
import { useContext } from 'react'
import { ThemeContext } from '../themcolor/ThemeContext'
import { Link } from 'react-router-dom'
import { NavItem,Navbar,Icon } from 'react-materialize'
//export default class Navigation extends Component {
export default function Navigation() {
    //render(){
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div className='header'>
            <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <ul style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                    outline: 'none'
                }}>
                    <li ><a className='active' href='/' style={{ color: theme.color }}><Icon left>home</Icon>Home</a></li>
                    <li ><Link to='/news/user' style={{ color: theme.color }}><Icon left>fiber_new</Icon>News</Link></li>
                    <li ><Link to='/about/user' style={{ color: theme.color }}><Icon left>info_outline</Icon>About</Link></li>
                    <li ><Link to='/contract/user' style={{ color: theme.color }}><Icon left>contacts</Icon>Contact</Link></li>
                    <li style={{ position: 'relative', float: 'right' }}>
                        <a className='switch-mode' href='#mode' onClick={toggle}
                            style={{ color: theme.color }}
                            data-testid="toggle-theme-btn"
                        >
                             {!dark ? <Icon>brightness_1</Icon> : <Icon>brightness_2</Icon>} 
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
//}