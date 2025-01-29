import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, adminLogout } from '../../redux/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import UserOne from '../../images/user/user-01.png';
import { RootState, AppDispatch } from '../../redux/store';
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { logoutLoading, logoutError } = useSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    setDropdownOpen(false); // Close the dropdown
    const userType = localStorage.getItem('user_type');
    let result;
    if (userType == 'user') {
      result = await dispatch(logout()); // Dispatch the logout action
    } else {
      result = await dispatch(adminLogout());
    }
    if ((userType == 'user' ? logout : adminLogout).fulfilled.match(result)) {
      navigate('/sign-in'); // Redirect only if logout is successful
    } else {
      console.error('Logout failed:', result.payload || logoutError);
    }
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        aria-expanded={dropdownOpen}
        aria-label="User menu"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Thomas Anree
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User Avatar" />
        </span>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link to="/profile" className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                <span><FaRegUser /></span>
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/settings" className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                <span><IoSettingsOutline /></span>
                Settings
              </Link>
            </li>
          </ul>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium text-danger duration-300 ease-in-out hover:text-red-600 lg:text-base"
            disabled={logoutLoading}
          >
            <span><FaPowerOff /></span>
            {logoutLoading ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
