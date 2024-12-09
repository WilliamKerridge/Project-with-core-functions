import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
}

function StatCard({ title, value, change, changeLabel }: StatCardProps) {
  const isPositive = change >= 0;
  
  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <dt className="truncate text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1">
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <p className={`ml-2 flex items-baseline text-sm font-semibold ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {isPositive ? (
              <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
            ) : (
              <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
            )}
            <span className="sr-only">{isPositive ? 'Increased' : 'Decreased'} by</span>
            {Math.abs(change)}%
          </p>
          <div className="ml-1 text-sm text-gray-500">{changeLabel}</div>
        </div>
      </dd>
    </div>
  );
}

export default function Dashboard() {
  const stats = [
    { title: 'Open RMAs', value: '12', change: 8, changeLabel: 'vs last month' },
    { title: 'Pending Service Orders', value: '8', change: -3, changeLabel: 'vs last month' },
    { title: 'Average Resolution Time', value: '3.2 days', change: 12, changeLabel: 'vs last month' },
    { title: 'Customer Satisfaction', value: '98%', change: 2, changeLabel: 'vs last month' },
  ];

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">Dashboard</h1>
          <p className="mt-2 text-sm text-gray-700">
            A high-level overview of your RMA and service order metrics.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Recent RMAs</h3>
          <div className="mt-4">
            <div className="rounded-lg border">
              <div className="divide-y">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium text-gray-900">RMA-{2023100 + item}</p>
                      <p className="text-sm text-gray-500">Product repair request</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      Pending
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Service Order Status</h3>
          <div className="mt-4">
            <div className="rounded-lg border">
              <div className="divide-y">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium text-gray-900">SO-{2023200 + item}</p>
                      <p className="text-sm text-gray-500">Repair in progress</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      In Progress
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}