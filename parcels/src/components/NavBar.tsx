
const NavBar = () =>{
    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    {/* Container wrapper */}
    <div className="container-fluid">
        {/* Toggle button */}
        <button data-mdb-collapse-init className="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
        </button>

        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link text-dark" href="#!">Projects</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-dark" href="#!">About me</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-dark" href="#!">Testimonials</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-dark" href="#!">Contact</a>
            </li>
        </ul>

        <ul className="navbar-nav flex-row">
            {/* Icons */}
            <li className="nav-item">
            <a className="nav-link pe-2" href="#!">
                <i className="fab fa-youtube">ds</i>
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link px-2" href="#!">
                <i className="fab fa-facebook-f">hello</i>
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link px-2" href="#!">
                <i className="fab fa-twitter">hellww</i>
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link ps-2" href="#!">
                <i className="fab fa-instagram">sdsd</i>
            </a>
            </li>
        </ul>
        </div>
        {/* Collapsible wrapper */}

    </div>
    {/* Container wrapper */}
    </nav>
    {/* Navbar */}
    </>
);
};

export default NavBar;