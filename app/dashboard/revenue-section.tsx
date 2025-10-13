import RevenueChart from '@/app/ui/dashboard/revenue-chart';

export default function RevenueSection() {
  // RevenueChart is now async and fetches its own data internally
  return <RevenueChart />;
}
