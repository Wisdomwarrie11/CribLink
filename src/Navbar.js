const Navbar = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <strong><a style = {{color: 'rgb(5, 4, 66)'}} className="navbar-brand" href="/"><span style={{fontSize: '30px'}}>Crib</span>Link</a></strong>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
       <strong><a style = {{color: 'rgb(5, 4, 66)'}}className="nav-link" href="/login">Login</a></strong>
      </li>
      <li className="nav-item">
        <strong><a style = {{color: 'rgb(5, 4, 66)'}}className="nav-link" href="/register">Register</a></strong>
      </li>
    </ul>
  </div>
</div>
</nav>
        </>
    )
}

export default Navbar;
