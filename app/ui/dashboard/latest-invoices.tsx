import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';

interface LatestInvoicesProps {
  latestInvoices: LatestInvoice[];
}

export default function LatestInvoices({ latestInvoices }: LatestInvoicesProps) {
  if (!latestInvoices || latestInvoices.length === 0) {
    return <p className="mt-4 text-gray-400">No invoices available.</p>;
  }

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>

      <div className="flex flex-col justify-between rounded-xl bg-gray-50 p-4 grow">
        <div className="bg-white rounded-md">
          {latestInvoices.map((invoice, i) => (
            <div
              key={invoice.id}
              className={clsx(
                'flex items-center justify-between py-4 px-6',
                { 'border-t': i !== 0 }
              )}
            >
              <div className="flex items-center min-w-0">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  width={32}
                  height={32}
                  className="mr-4 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {invoice.name}
                  </p>
                  <p className="hidden sm:block truncate text-sm text-gray-500">
                    {invoice.email}
                  </p>
                </div>
              </div>

              <p
                className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
              >
                {invoice.amount}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center mt-6 text-gray-500">
          <ArrowPathIcon className="h-5 w-5" />
          <span className="ml-2 text-sm">Updated just now</span>
        </div>
      </div>
    </div>
  );
}
