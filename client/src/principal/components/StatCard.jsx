import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const StatCard = ({ statistics }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
      {statistics.map((item) => (
        <div
          key={item.title}
          className={`group relative overflow-hidden rounded-xl border ${item.borderColor} ${item.cardBg} p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
        >
          {/* Decorative Background */}
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/30 transition-transform duration-500 group-hover:scale-180" />

          <div className="relative flex items-center justify-between gap-2">
            {/* Content */}
            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-500">{item.title}</p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-800">
                {item.value}
              </h2>

              <Link
                to={item.path}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 transition-colors duration-200 hover:text-violet-600"
              >
                {item.page}

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Icon */}
            <div
              className={`flex h-10 w-10 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl ${item.bgColor} shadow-sm transition-transform duration-300 group-hover:scale-105`}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCard;
