import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContex";
const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Product", to: "/product", current: false },
];
const leftnav = [{ name: "Dashboard", to: "/dashboard", current: false }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { loggedIn, login, logout } = useAuth();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        to={item.to}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                  {!loggedIn && (
                    <button
                      onClick={() => {
                        login();
                      }}
                      className={classNames(
                        false
                          ? "bg-indigo-700 text-white"
                          : "bg-indigo-600 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={false ? "page" : undefined}
                    >
                      login
                    </button>
                  )}
                  {loggedIn && (
                    <>
                      <button
                        onClick={() => {
                          logout();
                        }}
                        className={classNames(
                          false
                            ? "bg-indigo-700 text-white"
                            : "bg-indigo-600 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 mr-2 rounded-md text-sm font-medium"
                        )}
                      >
                        logout
                      </button>
                      <>
                        {leftnav.map((item) => (
                          <Link
                            to={item.to}
                            key={item.name}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "bg-indigo-600 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}{" "}
                      </>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div>
                {navigation.map((item) => (
                  <Disclosure.Button>
                    <Link
                      to={item.to}
                      key={item.name}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </Disclosure.Button>
                ))}
              </div>

              {!loggedIn && (
                <button
                  onClick={() => {
                    login();
                  }}
                  className={classNames(
                    false
                      ? "bg-indigo-700 text-white"
                      : "bg-indigo-600 hover:bg-gray-700 hover:text-white",
                    "px-3 py-2 rounded-md text-sm font-medium"
                  )}
                  aria-current={false ? "page" : undefined}
                >
                  login
                </button>
              )}
              {loggedIn && (
                <>
                  <button
                    onClick={() => {
                      logout();
                    }}
                    className={classNames(
                      false
                        ? "bg-indigo-700 text-white"
                        : "bg-indigo-600 hover:bg-gray-700 hover:text-white",
                      "px-3 py-2 mr-2 rounded-md text-sm font-medium"
                    )}
                  >
                    logout
                  </button>
                  <>
                    {leftnav.map((item) => (
                      <Link
                        to={item.to}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "bg-indigo-600 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}{" "}
                  </>
                </>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
