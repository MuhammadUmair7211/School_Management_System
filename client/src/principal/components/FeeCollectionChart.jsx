import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowUpRight, CircleDollarSign } from "lucide-react";

export default function FeeCollectionChart() {
  const { fees = [] } = useSelector((state) => state.fees);

  const today = new Date();

  const paidFee = fees
    .filter((fee) => fee.status === "paid")
    .reduce((sum, fee) => sum + Number(fee.amount || 0), 0);

  const pendingFee = fees
    .filter((fee) => fee.status === "unpaid" && new Date(fee.dueDate) >= today)
    .reduce((sum, fee) => sum + Number(fee.amount || 0), 0);

  const overdueFee = fees
    .filter((fee) => fee.status === "unpaid" && new Date(fee.dueDate) < today)
    .reduce((sum, fee) => sum + Number(fee.amount || 0), 0);

  const data = [
    {
      name: "Collected",
      value: paidFee,
      color: "#22c55e",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      name: "Pending",
      value: pendingFee,
      color: "#f59e0b",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      name: "Overdue",
      value: overdueFee,
      color: "#ef4444",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const getPercentage = (value) => {
    return total > 0 ? Math.round((value / total) * 100) : 0;
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-800">
            Fees Collection
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">
            Overview of current fee status
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <CircleDollarSign size={19} />
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-2 flex items-center gap-5">
        {/* Donut Chart */}
        <div className="relative h-52 w-52">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={68}
                outerRadius={92}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) =>
                  `PKR ${Number(value).toLocaleString("en-GB")}`
                }
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
                  fontSize: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Content */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xs font-medium text-slate-400">Total Fees</p>

            <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-800">
              PKR {total.toLocaleString("en-GB")}
            </h3>
          </div>
        </div>

        {/* Summary */}
        <div className="grid max-w-35 w-full gap-2">
          {data.map((item) => (
            <div
              key={item.name}
              className={`rounded-xl ${item.bgColor} p-2 text-center`}
            >
              <div className="mb-1 flex items-center justify-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <span className="text-[10px] font-semibold text-slate-500">
                  {item.name}
                </span>
              </div>
              <p className="text-xs font-bold text-slate-700">
                PKR {item.value.toLocaleString("en-GB")}
              </p>

              <p className={`text-sm font-bold ${item.textColor}`}>
                {getPercentage(item.value)}% of total
              </p>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/reports"
        className="group mt-2 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-600 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600"
      >
        <span>View Full Fee Report</span>
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
