import { Link } from "react-router-dom";

const StatCard = ({ statistics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-2">
      {statistics.map((item) => (
        <div
          key={item.title}
          className={`${item.cardBg} border ${item.borderColor} rounded-2xl p-3 flex items-center gap-2 hover:shadow-lg transition duration-300 cursor-pointer`}
        >
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-full ${item.bgColor} flex items-center justify-center shadow-md`}
          >
            {item.icon}
          </div>

          {/* Content */}
          <div>
            <p className="text-sm text-slate-500">{item.title}</p>

            <h2 className="md:text-2xl font-bold text-slate-800">
              {item.value}
            </h2>

            <Link
              to={item.path}
              className="text-xs text-slate-500 font-semibold hover:text-violet-600 hover:underline"
            >
              {item.page}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCard;
