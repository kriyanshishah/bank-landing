// import logo from 'public\logo.svg'

function Navbar() {
  return (
    <div className="navbar-div">
      <img className="logo-img" src="" alt="" />
    <div className="dropdown">
      <img className="hamburger-icon" onclick="dropdown(this , 'show')" src="public\icon-hamburger.svg" alt="" />
      <img className="close-icon" onclick="dropdown(this , 'close')" src="public\icon-close.svg" alt="" />
      <div className="dropdown-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </div>
    </div>
    <button type="button" name="button"> Request Invite</button>
    </div>
  )
}

export default Navbar