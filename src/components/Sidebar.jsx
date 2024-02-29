function Sidebar({ isOpen, menuItems }) {
  return (
    <aside
      id="default-sidebar"
      aria-label="Sidebar"
      className={`w-64 md:w-1/4 md:hidden fixed inset-y-0 left-0 z-10 bg-gray-200 transform transition-transform duration-300 ease-in-out ${isOpen ? '' : '-translate-x-full'}`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-secondary">
        <div className="mx-3 mb-5 flex items-center flex-shrink-0 text-white mr-6">
          <img src="/logo.svg" />
        </div>

        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg group"
              >
                <span className="ms-3">{ item.name }</span>
              </a>
            </li>
          ))}
        </ul>

        <button className="mx-3 mt-5 bg-transparent font-bold text-white hover:text-primary py-2 px-4 border border-white hover:border-primary tracking-widest">
          CONTACT US &nbsp; &rarr;
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
