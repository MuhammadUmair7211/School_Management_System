import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "1 May", students: 58, teachers: 35 },
  { day: "4 May", students: 66, teachers: 40 },
  { day: "7 May", students: 71, teachers: 46 },
  { day: "10 May", students: 78, teachers: 50 },
  { day: "13 May", students: 79, teachers: 48 },
  { day: "16 May", students: 71, teachers: 43 },
  { day: "19 May", students: 77, teachers: 49 },
  { day: "22 May", students: 81, teachers: 51 },
  { day: "25 May", students: 80, teachers: 52 },
  { day: "28 May", students: 87, teachers: 58 },
  { day: "31 May", students: 89, teachers: 62 },
];

export default function AttendanceChart() {
  return (
    <div className="p-2 border border-slate-200 rounded-xl shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-slate-600">Attendance Overview</h2>

        <select className="max-w-72 w-full border border-slate-300 p-2 text-sm">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="flex items-center justify-center gap-4 my-2">
        <div className="w-8 h-1 block bg-[#2563eb] rounded-full"></div>
        <p className="font-semibold text-slate-500">Students</p>
        <div className="w-8 h-1 block bg-[#16a34a] rounded-full"></div>
        <p className="font-semibold text-slate-500">Teachers</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -15,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={true}
            stroke="#e2e8f0"
          />

          <XAxis
            dataKey="day"
            axisLine={true}
            tickLine={true}
            tick={{
              fontSize: 12,
              fill: "#94a3b8",
            }}
            dy={10}
          />

          <YAxis
            domain={[0, 100]}
            axisLine={true}
            tickLine={true}
            tickFormatter={(value) => `${value}%`}
            tick={{
              fontSize: 12,
              fill: "#94a3b8",
            }}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
              padding: "10px 12px",
            }}
            labelStyle={{
              color: "#475569",
              fontWeight: 600,
              marginBottom: "4px",
            }}
            formatter={(value, name) => [`${value}%`, name]}
          />

          <Line
            type="monotone"
            dataKey="students"
            name="Students"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{
              r: 3,
              strokeWidth: 2,
              fill: "#ffffff",
            }}
            activeDot={{
              r: 6,
              strokeWidth: 3,
            }}
          />

          <Line
            type="monotone"
            dataKey="teachers"
            name="Teachers"
            stroke="#10b981"
            strokeWidth={3}
            dot={{
              r: 3,
              strokeWidth: 2,
              fill: "#ffffff",
            }}
            activeDot={{
              r: 6,
              strokeWidth: 3,
            }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="grid md:grid-cols-2 gap-2 mt-2">
        <div className="border border-slate-100 rounded-xl p-3">
          <h4 className="text-gray-500">Average Student Attendance</h4>
          <h2 className="text-3xl font-bold text-blue-600">92.4%</h2>
        </div>
        <div className="border border-slate-100 rounded-xl p-3">
          <h4 className="text-gray-500">Average Teacher Attendance</h4>
          <h2 className="text-3xl font-bold text-green-600">87.6%</h2>
        </div>
      </div>
    </div>
  );
}
