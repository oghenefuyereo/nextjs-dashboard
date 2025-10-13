import { Card } from '@/app/ui/dashboard/cards';
import { fetchCardData } from '@/app/lib/data';

export default async function CardsSection() {
  const cardData = await fetchCardData();
  const { numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices } = cardData;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card title="Total Customers" value={numberOfCustomers} type="customers" />
    </div>
  );
}
