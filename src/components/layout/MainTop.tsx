import React from 'react';
import logoCompany from '../../assets/images/logo-company.webp';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the icons you need
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface MainTopProps {
  pageTitle: string;
}
const MainTop: React.FC<MainTopProps> = ({ pageTitle }) => (
  <header className="main-top">
    <div className="top-wrapper">
      <div>
        <img src={logoCompany} width={'125px'} height={'70px'} className="logo" alt="Vite logo" />
      </div>
      <nav className="main-nav">
        <div className="nav-collapsed-menu">
          <FontAwesomeIcon icon={faBars} className="text-center" />
        </div>
        <div className="nav-options">
          <a href="/">Home</a>
          <a href="/">Usuários</a>
          <a href="/">Produtos</a>
        </div>
      </nav>
      <div className="main-search">
        <FontAwesomeIcon icon={faSearch} className="text-center" />
      </div>
    </div>
    <h1 className="page-title">{pageTitle}</h1>
  </header>
);

export default MainTop;
