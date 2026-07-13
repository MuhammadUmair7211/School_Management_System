import { Wallet, BadgePercent } from "lucide-react";
import { BachelorCap, Peoples, UserBusiness } from "@icon-park/react";
import StatCard from "../components/StatCard";
import QuickActions from "../components/QuickActions";
import FeeCollectionChart from "../components/FeeCollectionChart";
import { useSelector } from "react-redux";
import AttendanceChart from "../components/AttendanceChart";
import RecentActivities from "../components/RecentActivities";
const Dashboard = () => {
  const { teachers } = useSelector((state) => state.teachers);

  const { students } = useSelector((state) => state.students);

  const { exams } = useSelector((state) => state.exams);
  console.log(exams);

  const { classes } = useSelector((state) => state.classes);

  const { fees } = useSelector((state) => state.fees);
  console.log(fees);

  const { subjects } = useSelector((state) => state.subjects);
  console.log(subjects);

  const { attendances } = useSelector((state) => state.attendances);
  console.log(attendances);

  const presentStudents = attendances?.filter(
    (record) => record.status === "Present",
  ).length;

  const attendancePercentage =
    attendances?.length > 0
      ? ((presentStudents / attendances?.length) * 100).toFixed(1)
      : 0;

  const totalRevenue = fees?.reduce((sum, fee) => sum + fee.amount, 0);

  const statistics = [
    {
      icon: <Peoples theme="filled" size="40" className="text-blue-600" />,
      title: "Total Students",
      value: students.length,
      page: "View all students",
      path: "/students",
      bgColor: "bg-blue-200",
      cardBg: "bg-blue-100",
      borderColor: "border-blue-300",
    },
    {
      icon: (
        <UserBusiness theme="outline" size="40" className="text-green-600" />
      ),
      title: "Total Teachers",
      value: teachers.length,
      page: "View all teachers",
      path: "/teachers",
      bgColor: "bg-green-200",
      cardBg: "bg-green-100",
      borderColor: "border-green-300",
    },
    {
      icon: (
        <BachelorCap theme="outline" size="40" className="text-violet-600" />
      ),
      title: "Total Classes",
      value: classes.length,
      page: "View all classes",
      path: "/classes",
      bgColor: "bg-violet-200",
      cardBg: "bg-violet-100",
      borderColor: "border-violet-300",
    },
    {
      icon: <Wallet theme="outline" size="40" className="text-yellow-600" />,
      title: "Monthly Revenue",
      value: "PKR " + totalRevenue,
      page: "View financial report",
      path: "/reports",
      bgColor: "bg-orange-200",
      cardBg: "bg-orange-100",
      borderColor: "border-orange-300",
    },
    {
      icon: <BadgePercent size={40} className="text-red-600" />,
      title: "Attendance Today",
      value: attendancePercentage,
      page: "View attendance",
      path: "/attendance",
      bgColor: "bg-red-200",
      cardBg: "bg-red-100",
      borderColor: "border-red-300",
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 h-full">
      {/* LEFT */}
      <div className="xl:col-span-9 space-y-2">
        <StatCard statistics={statistics} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          <div className="lg:col-span-8">
            <AttendanceChart />
          </div>

          <div className="lg:col-span-4">
            <QuickActions />
          </div>
        </div>

        <div className="hidden md:block overflow-hidden rounded-xl shadow-sm">
          <img
            src="/footer-logo.jpg"
            alt="School Banner"
            className="w-full h-44 object-cover"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="xl:col-span-3 flex flex-col gap-4 border border-slate-200 rounded-xl p-4">
        <div className="">
          <FeeCollectionChart />
        </div>

        <div className="flex-1">
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
