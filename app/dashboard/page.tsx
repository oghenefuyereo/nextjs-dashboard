import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import CardsSection from './cards-section';
import RevenueSection from './revenue-section';
import InvoicesSection from './invoices-section';
import {
  CardsSkeleton,
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
} from '@/app/ui/skeletons';

export default function Page() {
  return (
    <main className="p-4 md:p-8">
      <h1 className={`${lusitana.className} mb-6 text-2xl md:text-3xl font-semibold`}>
        Dashboard
      </h1>

      {/* Dashboard Cards */}
      <Suspense fallback={<CardsSkeleton />}>
        <CardsSection />
      </Suspense>

      {/* Revenue Chart and Latest Invoices */}
      <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueSection />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <InvoicesSection />
        </Suspense>
      </div>
    </main>
  );
}
