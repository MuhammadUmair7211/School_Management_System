import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const { pathname } = useLocation();

  const breadcrumbs = [
    "Home",
    ...pathname
      .split("/")
      .filter(Boolean)
      .map((item) =>
        item.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
      ),
  ];

  return (
    <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className={
              index === breadcrumbs.length - 1
                ? "font-semibold text-slate-900"
                : ""
            }
          >
            {item}
          </span>

          {index !== breadcrumbs.length - 1 && <ChevronRight size={16} />}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
