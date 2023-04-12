import React from 'react';
import logoCompany from '../../assets/images/logo-company.webp';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the icons you need
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
        <a href="/">Home</a>
        <a href="/">Usuários</a>
        <a href="/">Produtos</a>
        <a href="/">
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: 16, color: '#e4e4e4' }} className="text-center" />
          {/* <FontAwesomeIcon icon="fas fa-search" /> */}
          {/* <FontAwesomeIcon icon="fa fa-facebook" /> */}
        </a>
      </nav>
    </div>
    <h1 className="page-title">{pageTitle}</h1>
  </header>
);

export default MainTop;
