import './index.css'

const NavBar = props => {
  const {count, time} = props
  return (
    <nav className="Nav_container p-3 fixed-top">
      <div className="Nav_image_Container">
        <img
          className="nav_logo m-0"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <ul className="Score_container text-light list-unstyled">
        <li className="m-0 h5">
          <p className="m-0">
            Score: <span className="text-warning h5 m-0">{count}</span>
          </p>
        </li>
        <li className="timer_image_container">
          <img
            className="timer_image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="m-0 h5 text-warning">{time} Sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
