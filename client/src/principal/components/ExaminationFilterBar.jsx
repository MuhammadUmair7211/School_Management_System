import { Search, ChevronDown } from "lucide-react";

export default function ExaminationFilterBar() {
  return (
    <div className="mt-2">
      <div className="flex flex-col md:flex-row items-center gap-2">
        {/* Search Input (Left Side) */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search examination..."
            className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder-gray-400 font-medium"
          />
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Dropdown 1: All Classes */}
        <div className="relative w-full md:w-44">
          <select
            defaultValue=""
            className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-sm font-semibold rounded-lg pl-4 pr-10 py-2.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          >
            <option value="">All Classes</option>
            <option value="class-10">Class 10</option>
            <option value="class-11">Class 11</option>
            <option value="class-12">Class 12</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>

        {/* Dropdown 2: All Terms */}
        <div className="relative w-full md:w-44">
          <select
            defaultValue=""
            className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-sm font-semibold rounded-lg pl-4 pr-10 py-2.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          >
            <option value="">All Terms</option>
            <option value="term-1">Term 1</option>
            <option value="term-2">Term 2</option>
            <option value="term-3">Term 3</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>

        {/* Dropdown 3: All Types */}
        <div className="relative w-full md:w-44">
          <select
            defaultValue=""
            className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-sm font-semibold rounded-lg pl-4 pr-10 py-2.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          >
            <option value="">All Types</option>
            <option value="quiz">Quiz</option>
            <option value="midterm">Midterm</option>
            <option value="final">Final</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>

        {/* Dropdown 4: All Status */}
        <div className="relative w-full md:w-44">
          <select
            defaultValue=""
            className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-sm font-semibold rounded-lg pl-4 pr-10 py-2.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          >
            <option value="">All Status</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            <option value="upcoming">Upcoming</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
