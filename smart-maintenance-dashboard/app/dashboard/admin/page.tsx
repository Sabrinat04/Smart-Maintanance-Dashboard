import { DashboardShell } from '@/components/DashboardShell'
import { KpiCards, SectionList } from '@/components/UI'
import { kpis } from '@/data/mockData'

export default function AdminDashboard() {
  return <DashboardShell title="Admin Dashboard"><KpiCards items={kpis} /><SectionList title="Admin Scope" items={["Admin overview","User management","Tenant approval","Property manager management","Technician management","Building management","Unit management","Service categories","SLA settings","Notification settings","Branding settings","Security settings","Audit logs","Export permissions"]} /></DashboardShell>
}
