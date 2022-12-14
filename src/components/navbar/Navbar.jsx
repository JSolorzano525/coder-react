import CartWidget from "../cart-widget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = [
    { label: "Home", link: "/" },
    // { label: "Checkout", link: "/checkout" },
    // { label: "Contacto", link: "/contacto" },
    { label: "Alimento", link: "/category/alimento" },
    { label: "Cuidado", link: "/category/cuidado" },
  ];

  return (
    <div>
      <nav className="bg-green-600 dark:bg-gray-800  ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between md:justify-center h-16">
            <div className="-mr-2 flex md:hidden">
              <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className=" flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {pages.map((page) => (
                    <Link
                      className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to={page.link}
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <CartWidget itemCount={5}></CartWidget>
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {pages.map((page) => (
              <Link
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to={page.link}
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
