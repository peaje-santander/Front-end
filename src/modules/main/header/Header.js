import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Languages from './languages-dropdown/LanguagesDropdown';
import User from './user-dropdown/UserDropdown';

const Header = ({toggleMenuSidebar}) => {
    const [t] = useTranslation();
    return (
        <nav className="main-header navbar navbar-expand bg-warning text-dark">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button
                        onClick={() => toggleMenuSidebar()}
                        type="button"
                        className="nav-link "
                    >
                        <i className="fas fa-bars" />
                    </button>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/home" className="nav-link text-dark">
                        {t('header.label.home')}
                    </Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/" className="nav-link text-dark">
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/pago" className="nav-link text-dark">
                        {t('header.label.payment')}
                    </Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/admin" className="nav-link text-dark">
                        Admin
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                    <button className="nav-link" type="button">
                        <i className="fas fa-search" />
                    </button>
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input
                                    className="form-control form-control-navbar"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-navbar"
                                        type="submit"
                                    >
                                        <i className="fas fa-search" />
                                    </button>
                                    <button
                                        className="btn btn-navbar"
                                        type="button"
                                        data-widget="navbar-search"
                                    >
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li> */}
                <Languages />
                <User />
            </ul>
        </nav>
    );
};

export default Header;
