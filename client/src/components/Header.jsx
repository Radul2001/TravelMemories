import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-gray-900">
      <div className="justify-between flex items-center max-w-6xl mx-auto p-3">
        {/* web site name */}
        <Link to="/landing-page">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap justify-start flex-1">
            <span className="text-slate-100">TRAVE</span>
            <span className="text-slate-700">RSE</span>
          </h1>
        </Link>

        {/* Search bar */}
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        {/* Navigation bar */}
        <ul className="flex gap-6">
          <Link to="/">
            <li className="hidden sm:inline text-white font-semibold hover:underline">
              Home
            </li>
          </Link>
          <Link to="/display-tours">
            <li className="hidden sm:inline text-white font-semibold hover:underline">
              Tour Packages
            </li>
          </Link>
          <Link to="/list-your-trip">
            <li className="hidden sm:inline text-white font-semibold hover:underline">
              List Your Trip
            </li>
          </Link>
          <Link to="/user-profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-white hover:underline"> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
