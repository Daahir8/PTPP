import './Header.css';

interface HeaderProps {
  currentPage: 'home' | 'contact';
  setCurrentPage: (page: 'home' | 'contact') => void;
}

const Header = ({ currentPage, setCurrentPage }: HeaderProps) => {
  return (
    <header className="header">
      <nav className="nav">
        <button
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          Home
        </button>
        <button
          className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={() => setCurrentPage('contact')}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
