const Navbar = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <strong><a style = {{color: 'rgb(5, 4, 66)'}} className="navbar-brand" href="/"><span style={{fontSize: '30px'}}>Crib</span>link</a></strong>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
    <li className="nav-item">
        <strong><a style = {{color: 'rgb(5, 4, 66)'}}className="nav-link" href="/"><span style={{paddingLeft: '5px'}}>Home</span></a></strong>
      </li>
      <li className="nav-item">
       <strong><a style = {{color: 'rgb(5, 4, 66)'}}className="nav-link" href="/login"><span style={{paddingLeft: '5px'}}> Login</span></a></strong>
      </li>
      <li className="nav-item">
        <strong><a style = {{color: 'rgb(5, 4, 66)'}}className="nav-link" href="/register"> <span style={{paddingLeft: '5px'}}> Register</span></a></strong>
      </li>
    </ul>
  </div>
</div>
</nav>
        </>
    )
}

export default Navbar;
