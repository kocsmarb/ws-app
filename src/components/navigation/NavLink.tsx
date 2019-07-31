import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const CustomNavLink: React.FC<NavLinkProps> = (props) => (
  <NavLink
    className={['nav-link d-inline-block'].join(' ')}
    style={{ color: 'inherit', textDecoration: 'none' }}
    activeClassName="active"
    {...props}
  >
    {props.children}
  </NavLink>
);

export default CustomNavLink;
