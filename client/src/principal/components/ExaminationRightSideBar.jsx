import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ExaminationRightSideBar() {
  const navigate = useNavigate();
  const { exams } = useSelector((state) => state.exams);
  const upcomingExams = exams.filter((exam) => exam?.status === "upcoming");

  return (
    <div className="space-y-2 rounded-xl font-sans text-slate-800">
      {/* 1. EXAMINATION CALENDAR CARD */}
      <div className="rounded-xl p-3 shadow-sm border border-slate-100">
        {/* Card Header */}
        <div className="flex items-center gap-3 mb-2">
          <CalendarIcon className="w-6 h-6 text-indigo-600" />
          <h2 className="font-bold text-slate-900">Examination Calendar</h2>
        </div>

        {/* Month Selector */}
        <div className="flex items-center justify-between mb-2">
          <button className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-bold text-slate-800 text-sm">July 2026</span>
          <button className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 text-center text-xs">
          {/* Days Header */}
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div key={day} className="font-bold text-slate-500 py-1">
              {day}
            </div>
          ))}

          {/* Calendar Days */}
          {/* Row 1 */}
          <span className="text-slate-300 py-1.5">28</span>
          <span className="text-slate-300 py-1.5">29</span>
          <span className="text-slate-300 py-1.5">30</span>
          <span className="text-slate-700 font-medium py-1.5">1</span>
          <span className="text-slate-700 font-medium py-1.5">2</span>
          <span className="text-slate-700 font-medium py-1.5">3</span>
          <span className="text-slate-700 font-medium py-1.5">4</span>

          {/* Row 2 */}
          <span className="text-slate-700 font-medium py-1.5">5</span>
          <span className="text-slate-700 font-medium py-1.5">6</span>
          <span className="text-slate-700 font-medium py-1.5">7</span>
          <span className="text-slate-700 font-medium py-1.5">8</span>
          <span className="text-slate-700 font-medium py-1.5">9</span>
          <div className="flex flex-col items-center justify-center">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-600 text-white font-medium text-xs">
              10
            </span>
            <span className="w-1 h-1 bg-emerald-500 rounded-full mt-0.5"></span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-slate-700 font-medium py-0.5">11</span>
            <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
          </div>

          {/* Row 3 */}
          <span className="text-slate-700 font-medium py-1.5">12</span>
          <span className="text-slate-700 font-medium py-1.5">13</span>
          <span className="text-slate-700 font-medium py-1.5">14</span>
          <div className="flex flex-col items-center justify-center">
            <span className="text-slate-700 font-medium py-0.5">15</span>
            <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-slate-700 font-medium py-0.5">16</span>
            <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-slate-700 font-medium py-0.5">17</span>
            <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
          </div>
          <span className="text-slate-700 font-medium py-1.5">18</span>

          {/* Row 4 */}
          <span className="text-slate-700 font-medium py-1.5">19</span>
          <span className="text-slate-700 font-medium py-1.5">20</span>
          <span className="text-slate-700 font-medium py-1.5">21</span>
          <span className="text-slate-700 font-medium py-1.5">22</span>
          <span className="text-slate-700 font-medium py-1.5">23</span>
          <span className="text-slate-700 font-medium py-1.5">24</span>
          <span className="text-slate-700 font-medium py-1.5">25</span>

          {/* Row 5 */}
          <span className="text-slate-700 font-medium py-1.5">26</span>
          <span className="text-slate-700 font-medium py-1.5">27</span>
          <span className="text-slate-700 font-medium py-1.5">28</span>
          <span className="text-slate-700 font-medium py-1.5">29</span>
          <span className="text-slate-700 font-medium py-1.5">30</span>
          <span className="text-slate-700 font-medium py-1.5">31</span>
          <span className="text-slate-300 py-1.5">1</span>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mt-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Ongoing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span>Upcoming</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span>Completed</span>
          </div>
        </div>
      </div>

      {/* 2. UPCOMING EXAMINATIONS CARD */}
      <div className="rounded-xl p-3 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-slate-900">
            Upcoming Examinations
          </h2>
          <button
            onClick={() => navigate("/examinations/upcoming-examinations")}
            className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
          >
            View All
          </button>
        </div>

        <div className="space-y-3">
          {upcomingExams
            ?.slice(upcomingExams?.length - 3, upcomingExams?.length)
            .map((examination) => {
              return (
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center justify-center w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                    <span className="text-base font-bold leading-tight">
                      {new Date(examination.startDate).getDate()}
                    </span>

                    <span className="text-[10px] font-semibold uppercase">
                      {new Date(examination.startDate).toLocaleString("en-US", {
                        month: "short",
                      })}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800">
                      {examination.examinationName} {examination.academicYear}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Class {examination.class} - {examination.section}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {new Date(examination.startDate).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                      {" - "}
                      {new Date(examination.endDate).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* 3. RECENT RESULTS CARD */}
      <div className=" rounded-xl p-3 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-slate-900">Recent Results</h2>
          <button
            onClick={() => navigate("/results")}
            className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
          >
            View All
          </button>
        </div>

        <div className="space-y-3">
          {/* Result 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-800">
                  Mid Term Examination 2026
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Class 8 - A</p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 font-bold text-xs rounded-md">
              82.4%
            </span>
          </div>

          {/* Result 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-800">
                  Science Practical Exam 2026
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Class 8 - A</p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-blue-50 text-blue-600 font-bold text-xs rounded-md">
              75.6%
            </span>
          </div>

          {/* Result 3 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-orange-50 text-orange-500 rounded-xl">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-800">
                  Unit Test - 2 (2026)
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Class 9 - A</p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-orange-50 text-orange-500 font-bold text-xs rounded-md">
              68.3%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
