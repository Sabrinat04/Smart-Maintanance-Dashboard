import { DashboardShell } from '@/components/DashboardShell'
import { KpiCards, RequestsTable } from '@/components/UI'
import { kpis, requests } from '@/data/mockData'

export default function DashboardPage() {
  return <DashboardShell title="Operational Overview"><KpiCards items={kpis} /><RequestsTable rows={requests} /></DashboardShell>
}
