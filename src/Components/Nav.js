
import logo from '../assets/LOGO.png'
import '../styles/Nav.css'

function Nav() {
	// const title = 'Kasa'
	return (
	<nav className='main-nav'>
		<img src={logo} alt = 'kasa' className = 'kasa-logo' />
		<ul className='tabs'>
			<li className='tab-link'>Home</li>
			<li className='tab-link'>About</li>
		</ul>
	</nav>
	)
}

export default Nav