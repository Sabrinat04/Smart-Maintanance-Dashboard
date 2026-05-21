import { DashboardShell } from '@/components/DashboardShell'
import { KpiCards, RequestsTable, SectionList } from '@/components/UI'
import { kpis, requests } from '@/data/mockData'

export default function PropertyManagerDashboard() {
  return <DashboardShell title="Property Manager Dashboard"><KpiCards items={kpis} /><RequestsTable rows={requests} /><div className="mt-6"><SectionList title="Property Manager Scope" items={["Operational command center","New request review","Request details","Smart technician assignment","Assigned request tracking","Exception handling","SLA monitor","Reports"]} /></div></DashboardShell>
}
