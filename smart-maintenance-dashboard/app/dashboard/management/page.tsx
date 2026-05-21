import { DashboardShell } from '@/components/DashboardShell'
import { KpiCards, RequestsTable, SectionList } from '@/components/UI'
import { kpis, requests } from '@/data/mockData'

export default function ManagementDashboard() {
  return <DashboardShell title="Management Dashboard"><KpiCards items={kpis} /><RequestsTable rows={requests} /><div className="mt-6"><SectionList title="Management Scope" items={["Executive overview","SLA performance","Technician performance","Building comparison","Request drill-down","Reports and export","Portfolio insights","Work verification overview"]} /></div></DashboardShell>
}
