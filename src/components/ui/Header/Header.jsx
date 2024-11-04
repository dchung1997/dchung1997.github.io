import { Link } from 'react-router-dom';
import NewsletterSignup from '../../forms/Newsletter';

import './Header.css';

const Header = () => {
  return (
    <header className='flex items-center w-full justify-between sm:py-1 md:py-3 '>
      <Link to="/">
        <div className="mr-3">
          <div className="flex items-center justify-between">
            <img src="/src/assets/images/logo.svg" alt="Logo" />
          </div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          <NewsletterSignup/>
        </div>   
      </div>   
    </header>
  )
}

export default Header;
