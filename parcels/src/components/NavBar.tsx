
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <h5 className="text-success">Mineral Parcel Project</h5>
                            </li>
                        </ul>
                    </div>
                </div>

                <ul className="navbar-nav flex-row">
                    {/* Icons */}
                    <li className="nav-item">
                        <a className="nav-link pe-2" href="#!">
                            <i className="fab fa-youtube">NJ 2024</i>
                        </a>
                    </li>
                 
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
