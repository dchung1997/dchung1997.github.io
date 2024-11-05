import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="mt-8 flex flex-col items-center">
        <p className="pb-2 text-center text-sm leading-7 text-gray-500">
          Visualizations aimed at issues facing the world today.
        </p>
        <div className="pb-8 flex space-x-2 text-sm text-gray-500">
          <Link to="/">3-1-1</Link>
          <div>{` • `}</div>
          <div>{`Creative Commons`}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
