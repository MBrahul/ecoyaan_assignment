const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-center">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-green-100 shadow-sm">
            <img
              src="https://prod-cdn.ecoyaan.com/pb-cs-app/images/ecoyaan-favicon.ico"
              alt="Ecoyaan"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-bold tracking-widest text-green-700 leading-tight">
              Ecoyaan
            </p>
            <p className="text-[11px] font-light tracking-widest text-gray-400 uppercase leading-tight">
              sustainability made easy
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;