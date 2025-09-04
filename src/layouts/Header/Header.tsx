import { useAppDispatch } from '@redux/hook';
import { resetSubmitForm } from '@redux/slices/A2/formSlice';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    return (
        <div className="bg-white flex justify-between border-b border-gray-200">
            <div className=" p-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">FE-ASSIGNMENTS</span>
            </div>
            <div className="flex justify-center  items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Link
                    to={'/a2'}
                    className={`block py-3 px-4 hover:text-blue-700 ${
                        location.pathname === '/a2' ? 'text-blue-700' : 'text-black'
                    }`}
                >
                    Assignment 2
                </Link>
                <Link
                    to={'/a3'}
                    onClick={() => {
                        dispatch(resetSubmitForm());
                    }}
                    className={`block py-3 px-4 hover:text-blue-700 ${
                        location.pathname === '/a3' ? 'text-blue-700' : 'text-black'
                    }`}
                >
                    Assignment 3
                </Link>
            </div>
            <div></div>
        </div>
    );
}

export default Header;
