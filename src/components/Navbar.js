import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];
  return (
    <nav className="navBar bg-light">
      <div className="container-fluid">
        <div className="row py-3">
          <div className="col-6 w-50 d-flex align-items-center">
            <h1>Math Magicians</h1>
          </div>
          <div className="col-6 w-50 d-flex justify-content-end align-items-center">
            <ul className="list-group list-group-horizontal d-flex pe-2">
              {links.map((link) => (
                <li key={link.id} className="list-group-item px-2">
                  <NavLink to={link.path} activeClassName="active-link" exact className="text-decoration-none">
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
