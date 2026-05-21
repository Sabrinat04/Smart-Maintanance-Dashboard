import { DashboardShell } from '@/components/DashboardShell'
import { KpiCards, RequestsTable, SectionList } from '@/components/UI'
import { kpis, requests } from '@/data/mockData'

export default function TechnicianDashboard() {
  return <DashboardShell title="Technician Dashboard"><KpiCards items={kpis} /><RequestsTable rows={requests} /><div className="mt-6"><SectionList title="Technician Scope" items={["Overview","Assigned work orders","Task details","Start work","Before/after photo placeholders","Work notes","Cannot complete / blocker report","Alerts","Profile"]} /></div></DashboardShell>
}
