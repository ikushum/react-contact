function Navbar({ toggleSidebar, menuItems = [] }) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-secondary py-6 px-12">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="/logo.svg" />
      </div>

      <div className="block hidden lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {menuItems.map((item) => (
            <a
              key={item.name}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 px-4"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <button className="bg-transparent font-bold text-white hover:text-primary py-2 px-4 border border-white hover:border-primary tracking-widest">
          CONTACT US &nbsp; &rarr;
        </button>
      </div>

      <div className="block lg:hidden" >
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-primary hover:border-primary"
          onClick={toggleSidebar}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
