import BreadCrumb from "./BreadCrumb";

const Header = ({ heading, buttonText, onClick, details, icon }) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">{heading}</h1>
        <p className="text-sm text-slate-400 my-1">{details}</p>
        <BreadCrumb />
      </div>

      {/* Right */}
      {buttonText && (
        <button
          onClick={onClick}
          className="inline-flex items-center justify-center gap-2 bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 duration-300 cursor-pointer"
        >
          {icon}
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Header;
