import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function InvoicesSection() {
  const latestInvoices = await fetchLatestInvoices();
  return <LatestInvoices latestInvoices={latestInvoices} />;
}
