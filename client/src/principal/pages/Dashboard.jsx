import { Wallet, BadgePercent } from "lucide-react";
import { BachelorCap, Peoples, UserBusiness } from "@icon-park/react";
import StatCard from "../components/StatCard";
import QuickActions from "../components/QuickActions";
import FeeCollectionChart from "../components/FeeCollectionChart";
import { useSelector } from "react-redux";
import AttendanceChart from "../components/AttendanceChart";
import RecentActivities from "../components/RecentActivities";
import TitleBar from "../components/TitleBar";

const Dashboard = () => {
  const { teachers } = useSelector((state) => state.teachers);
  const { students } = useSelector((state) => state.students);
  const { classes } = useSelector((state) => state.classes);
  const { fees } = useSelector((state) => state.fees);
  const { attendances } = useSelector((state) => state.attendances);

  // Attendance
  const presentStudents =
    attendances?.filter((record) => record.status === "Present").length || 0;

  const attendancePercentage =
    attendances?.length > 0
      ? ((presentStudents / attendances.length) * 100).toFixed(1)
      : 0;

  // Revenue
  const totalRevenue =
    fees?.reduce((sum, fee) => sum + Number(fee.amount || 0), 0) || 0;

  const statistics = [
    {
      icon: <Peoples className="text-blue-600 text-2xl md:text-3xl" />,
      title: "Total Students",
      value: students?.length || 0,
      page: "View all students",
      path: "/students",
      bgColor: "bg-blue-100",
      cardBg: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      icon: <UserBusiness className="text-emerald-600 text-2xl md:text-3xl" />,
      title: "Total Teachers",
      value: teachers?.length || 0,
      page: "View all teachers",
      path: "/teachers",
      bgColor: "bg-emerald-100",
      cardBg: "bg-emerald-50",
      borderColor: "border-emerald-100",
    },
    {
      icon: <BachelorCap className="text-violet-600 text-2xl md:text-3xl" />,
      title: "Total Classes",
      value: classes?.length || 0,
      page: "View all classes",
      path: "/classes",
      bgColor: "bg-violet-100",
      cardBg: "bg-violet-50",
      borderColor: "border-violet-100",
    },
    {
      icon: <Wallet className="text-orange-600 text-2xl md:text-3xl" />,
      title: "Monthly Revenue",
      value: `PKR ${totalRevenue.toLocaleString("en-GB")}`,
      page: "View financial report",
      path: "/reports",
      bgColor: "bg-orange-100",
      cardBg: "bg-orange-50",
      borderColor: "border-orange-100",
    },
    {
      icon: <BadgePercent className="text-rose-600 text-2xl md:text-3xl" />,
      title: "Attendance Today",
      value: `${attendancePercentage}%`,
      page: "View attendance",
      path: "/attendance",
      bgColor: "bg-rose-100",
      cardBg: "bg-rose-50",
      borderColor: "border-rose-100",
    },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      {/* Page Header */}
      <div className="shrink-0">
        <TitleBar />
      </div>

      {/* Dashboard Content */}
      <div className="mt-2 min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
        <div className="grid grid-cols-1 gap-2 xl:grid-cols-12">
          {/* ================================= */}
          {/* LEFT CONTENT */}
          {/* ================================= */}
          <div className="space-y-2 xl:col-span-9">
            {/* Statistics */}
            <section>
              <StatCard statistics={statistics} />
            </section>

            {/* Attendance + Quick Actions */}
            <section className="grid grid-cols-1 gap-2 lg:grid-cols-12">
              {/* Attendance Chart */}
              <div className="min-w-0 lg:col-span-8">
                <div className="h-full overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-md">
                  <AttendanceChart />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="min-w-0 lg:col-span-4">
                <div className="h-full overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-md">
                  <QuickActions />
                </div>
              </div>
            </section>

            {/* School Banner */}
            <section className="hidden overflow-hidden rounded-xl border border-slate-200 p-1 shadow-sm md:block">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/footer-logo.jpg"
                  alt="Green Valley High School"
                  className="h-50 w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-5 text-white">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                    Green Valley High School
                  </p>

                  <h2 className="mt-1 text-lg font-bold">
                    Building brighter futures
                  </h2>
                </div>
              </div>
            </section>
          </div>

          {/* ================================= */}
          {/* RIGHT SIDEBAR */}
          {/* ================================= */}
          <aside className="flex min-w-0 flex-col gap-2 xl:col-span-3">
            {/* Fee Collection */}
            <div className="overflow-hidden rounded-xl border border-slate-200 p-3 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <FeeCollectionChart />
            </div>

            {/* Recent Activities */}
            <div className="flex-1 overflow-hidden rounded-xl border border-slate-200 p-3 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <RecentActivities />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
