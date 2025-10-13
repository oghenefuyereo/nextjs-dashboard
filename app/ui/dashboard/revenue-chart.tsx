import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';

export default async function RevenueChart() {
  const revenue = await fetchRevenue(); // Fetch data inside the component

  const chartHeight = 350;

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>

      <div className="rounded-xl bg-gray-50 p-4">
        {/* Chart Grid */}
        <div className="grid grid-cols-12 gap-2 rounded-md bg-white p-4 md:gap-4 sm:grid-cols-13 items-end">
          {/* Y-axis labels */}
          <div
            className="hidden sm:flex flex-col justify-between mb-6 text-sm text-gray-400"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {/* Revenue bars */}
          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300 transition-all duration-300"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              />
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center text-gray-500">
          <CalendarIcon className="h-5 w-5" />
          <span className="ml-2 text-sm">Last 12 months</span>
        </div>
      </div>
    </div>
  );
}
