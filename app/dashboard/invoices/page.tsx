import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

interface PageProps {
  searchParams: Promise<{ query?: string; page?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  // Unwrap the Promise
  const { query = '', page = '1' } = await searchParams;
  const currentPage = parseInt(page, 10);
  const totalPages = 5; // Replace with dynamic value if available

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>

      {/* Suspense for async Table */}
      <Suspense
        key={`${query}-${currentPage}`}
        fallback={<InvoicesTableSkeleton />}
      >
        <Table query={query} currentPage={currentPage} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
}
