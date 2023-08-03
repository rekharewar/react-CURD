import React from 'react'

const Navbar = () => {
  return (
                <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/About"}>About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"ContactUs"}>ContactUs</a>
                </li>
                </ul>
            </div>
            </nav>
                </div>
  )
}

export default Navbar
