import PropTypes from 'prop-types';
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed top-0 bottom-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
      aria-hidden={!showMenu}
    >
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h2 className="text-sm text-slate-500">Premium user</h2>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data, index) => (
              <li key={index}>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        {/* Optional footer content */}
      </div>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default ResponsiveMenu;
