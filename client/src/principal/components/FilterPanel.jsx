import { RotateCcw } from "lucide-react";

const FilterPanel = ({
  sections = [],
  activeFilters = {},
  onFilterChange,
  onClearFilters,
  title = "Filters",
}) => {
  return (
    <div className="rounded-xl border border-slate-200 p-2 shadow-sm">
      {/* Header */}
      <h2 className="mb-4 text-xl font-semibold text-slate-800">{title}</h2>

      {/* Filter Sections */}
      <div className="space-y-8">
        {sections.map((section) => {
          const activeValue = activeFilters[section.key];

          return (
            <div key={section.key}>
              {/* Section Title */}
              <h3 className="mb-3 text-sm font-semibold text-slate-700">
                {section.title}
              </h3>

              {/* Options */}
              <div className="space-y-1">
                {section.options.map((option) => {
                  const Icon = option.icon;

                  const isActive = activeValue === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => onFilterChange?.(section.key, option.id)}
                      className={`flex w-full items-center justify-between p-3 cursor-pointer duration-300 ${
                        isActive
                          ? "bg-blue-100 text-blue-600"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {/* Left Side */}
                      <div className="flex items-center gap-3">
                        {/* Icon */}
                        {Icon && <Icon size={18} strokeWidth={2} />}

                        {/* Color Dot */}
                        {option.color && (
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${option.color}`}
                          />
                        )}

                        {/* Label */}
                        <span className="text-sm font-medium">
                          {option.label}
                        </span>
                      </div>

                      {/* Count */}
                      {option.count !== undefined && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            isActive
                              ? "bg-indigo-100 text-indigo-600"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {option.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Clear Filters */}
      <button
        type="button"
        onClick={onClearFilters}
        className="mt-8 flex w-full items-center justify-center gap-2 py-3 text-sm font-medium bg-blue-500 hover:bg-blue-600 hover:text-white cursor-pointer duration-300"
      >
        <RotateCcw size={17} />
        Clear Filters
      </button>
    </div>
  );
};

export default FilterPanel;
