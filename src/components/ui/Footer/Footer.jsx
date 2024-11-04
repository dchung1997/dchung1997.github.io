import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <p className="pb-2 text-center text-sm leading-7 text-gray-500">
            Visualizations aimed at issues facing the world today.
        </p>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500">
          <div>David Chung</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link to="/">3-1-1</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
