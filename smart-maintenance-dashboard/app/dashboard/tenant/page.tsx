import { DashboardShell } from '@/components/DashboardShell'
import { KpiCards, RequestsTable, SectionList } from '@/components/UI'
import { kpis, requests } from '@/data/mockData'

export default function TenantDashboard() {
  return <DashboardShell title="Tenant Dashboard"><KpiCards items={kpis.slice(0,3)} /><RequestsTable rows={requests} /><div className="mt-6"><SectionList title="Tenant Scope" items={["Overview","My maintenance requests","Create maintenance request","Request details","Notifications","Profile"]} /></div></DashboardShell>
}
