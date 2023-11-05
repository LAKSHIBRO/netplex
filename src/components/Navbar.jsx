import Navbar_link_data from "../data/Navbar_link";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  console.log("Navbar render");

  window.scrollTo({ top: 0, behavior: "smooth" })
  document.body.style = '';

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand p-1 ms-1" to="/">
            <img src="/img/Logo.png" alt="logo" height={27} width={116} />
          </Link>
          <div>
            <button
              type="button"
              className="btn border-0 d-md-none"
              data-bs-toggle="modal"
              data-bs-target="#searchModel"
            >
              <i className="bi bi-search"></i>
            </button>

            <button
              className="navbar-toggler shadow-none border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNav"
              aria-controls="offcanvasNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className="offcanvas offcanvas-start"
            id="offcanvasNav"
            aria-labelledby="offcanvasNav"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
              <button
                type="button"
                className="btn-close border-0 shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto nav-underline">
                {Navbar_link_data.map((item) => {
                  return <Nav_li_items key={item._id} item={item} />;
                })}
              </ul>

              <form className="d-md-flex d-none" role="search">
                <input
                  className="form-control me-2 rounded-pill"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="searchModel"
        aria-labelledby="searchModel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex  align-items-center">
                <input
                  className="form-control"
                  placeholder="Search"
                  type="search"
                  aria-label="Search"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

function Nav_li_items({ item }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive =
    currentPath === item.link || currentPath.startsWith(item.link);

  return (
    <li className="nav-item">
      <Link
        to={item.link}
        className={
          isActive && item.link !== "/" ? "nav-link active" : "nav-link"
        }
        aria-current="page"
      >
        {item.logo && <i className={item.logo}></i>} {item.name}
      </Link>
    </li>
  );
}
