import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function FeeCollectionChart() {
  const { fees } = useSelector((state) => state.fees);
  const today = new Date();

  const paidFee = fees
    .filter((fee) => fee.status === "paid")
    .reduce((sum, fee) => sum + fee.amount, 0);

  const pendingFee = fees
    .filter((fee) => fee.status === "unpaid" && new Date(fee.dueDate) >= today)
    .reduce((sum, fee) => sum + fee.amount, 0);

  const overDueFee = fees
    .filter((fee) => fee.status === "unpaid" && new Date(fee.dueDate) < today)
    .reduce((sum, fee) => sum + fee.amount, 0);
  const data = [
    {
      name: "Collected",
      value: paidFee,
      color: "#22c55e",
    },
    {
      name: "Pending",
      value: pendingFee,
      color: "#f59e0b",
    },
    {
      name: "Overdue",
      value: overDueFee,
      color: "#ef4444",
    },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex flex-col items-start p-2">
      <h2 className="font-semibold text-slate-600 mb-2">
        Fees Collection Overview
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
        {/* Chart */}
        <div className="relative w-52 h-52">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={95}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((item, index) => (
                  <Cell key={index} fill={item.color} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h2 className="text-lg font-bold">PKR {total.toLocaleString()}</h2>
            <p className="text-gray-500">Total</p>
          </div>
        </div>

        {/* Legend */}

        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  background: item.color,
                }}
              />

              <div>
                <h4 className="font-medium text-xs text-slate-600">
                  {item.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  PKR {item.value.toLocaleString()} (
                  {Math.round((item.value / total) * 100)}%)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="/fee-management"
        className="ml-2 mt-2 text-xs md:text-sm bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100"
      >
        View Full Report →
      </Link>
    </div>
  );
}
