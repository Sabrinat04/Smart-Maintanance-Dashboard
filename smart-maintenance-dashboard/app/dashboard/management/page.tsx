import { DashboardShell } from '@/components/DashboardShell'

const executiveStats = [
  { label: 'Open Work Orders', value: '1,284', delta: '+6.4% vs last week' },
  { label: 'Portfolio SLA Compliance', value: '93.7%', delta: '+1.8% trend' },
  { label: 'Active Technicians', value: '146', delta: '12 on urgent queue' },
  { label: 'Average Resolution Time', value: '18.2 hrs', delta: '-2.9 hrs improvement' },
]

const slaBreakdown = [
  { tier: 'Within SLA', count: 961, percent: 75, color: 'bg-emerald-500' },
  { tier: 'Warning < 4h', count: 214, percent: 17, color: 'bg-amber-500' },
  { tier: 'Breached', count: 109, percent: 8, color: 'bg-rose-500' },
]

const technicians = [
  { name: 'Maya Rodriguez', assigned: 42, firstTimeFix: '94%', rework: '3%', avgClose: '11.5h' },
  { name: 'Liam Carter', assigned: 37, firstTimeFix: '91%', rework: '5%', avgClose: '13.1h' },
  { name: 'Noah Bennett', assigned: 34, firstTimeFix: '89%', rework: '6%', avgClose: '14.8h' },
  { name: 'Ava Simmons', assigned: 33, firstTimeFix: '96%', rework: '2%', avgClose: '10.7h' },
]

const buildings = [
  { name: 'Harbor Point Towers', score: 97, req: 164, sla: '96.4%', trend: 'Improving' },
  { name: 'Parkline Commons', score: 91, req: 143, sla: '92.0%', trend: 'Stable' },
  { name: 'Riverside Exchange', score: 88, req: 129, sla: '89.2%', trend: 'At Risk' },
  { name: 'Summit Heights', score: 95, req: 120, sla: '95.1%', trend: 'Improving' },
]

const requests = [
  { id: 'SR-42091', building: 'Riverside Exchange', category: 'HVAC', priority: 'Urgent', sla: 'Breached by 2h 18m', owner: 'Liam Carter' },
  { id: 'SR-42077', building: 'Parkline Commons', category: 'Electrical', priority: 'High', sla: '00h 42m remaining', owner: 'Maya Rodriguez' },
  { id: 'SR-42058', building: 'Harbor Point Towers', category: 'Plumbing', priority: 'Medium', sla: '03h 10m remaining', owner: 'Ava Simmons' },
  { id: 'SR-42041', building: 'Summit Heights', category: 'Safety', priority: 'Urgent', sla: 'Breached by 0h 35m', owner: 'Noah Bennett' },
]

const reports = ['Executive SLA Compliance Pack', 'Building Risk Heatmap', 'Technician Utilization Ledger', 'Recurring Failure Root-Cause Summary']

export default function ManagementDashboard() {
  return (
    <DashboardShell title="Management Dashboard">
      <div className="space-y-6 text-slate-800">
        <section className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-700 p-6 text-white shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">Executive Operational Overview</p>
          <h3 className="mt-2 text-3xl font-bold">Portfolio Command Center</h3>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">Real-time operational visibility across facilities, SLA posture, workforce throughput, and closure governance.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {executiveStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-500/40 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-300">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs text-emerald-300">{stat.delta}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
            <h4 className="text-lg font-semibold">SLA Performance and Breach Analysis</h4>
            <p className="mt-1 text-sm text-slate-500">Distribution of requests by SLA risk with immediate breach visibility.</p>
            <div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-100">
              {slaBreakdown.map((item) => (
                <div key={item.tier} className={`float-left h-full ${item.color}`} style={{ width: `${item.percent}%` }} />
              ))}
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {slaBreakdown.map((item) => (
                <div key={item.tier} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.tier}</p>
                  <p className="mt-1 text-2xl font-bold text-slate-800">{item.count}</p>
                  <p className="text-xs text-slate-500">{item.percent}% of active volume</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-lg font-semibold">Portfolio Insights</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="rounded-lg bg-emerald-50 p-3 text-emerald-900">2 buildings improved SLA compliance &gt; 3% this week.</li>
              <li className="rounded-lg bg-amber-50 p-3 text-amber-900">Riverside Exchange has the highest warning queue density.</li>
              <li className="rounded-lg bg-rose-50 p-3 text-rose-900">Safety tickets account for 41% of breached requests.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h4 className="text-lg font-semibold">Technician Performance Metrics</h4>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-3 py-2">Technician</th><th className="px-3 py-2">Assigned</th><th className="px-3 py-2">First-Time Fix</th><th className="px-3 py-2">Rework</th><th className="px-3 py-2">Avg Closure</th>
                </tr>
              </thead>
              <tbody>
                {technicians.map((tech) => (
                  <tr key={tech.name} className="border-t border-slate-100 even:bg-slate-50/70">
                    <td className="px-3 py-2 font-medium">{tech.name}</td><td className="px-3 py-2">{tech.assigned}</td><td className="px-3 py-2 text-emerald-700">{tech.firstTimeFix}</td><td className="px-3 py-2">{tech.rework}</td><td className="px-3 py-2">{tech.avgClose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-lg font-semibold">Portfolio / Building Performance Comparison</h4>
            <div className="mt-4 space-y-3">
              {buildings.map((b) => (
                <div key={b.name} className="rounded-xl border border-slate-100 p-3">
                  <div className="flex items-center justify-between text-sm"><p className="font-semibold">{b.name}</p><span className="rounded-full bg-slate-900 px-2 py-1 text-xs text-white">Score {b.score}</span></div>
                  <p className="mt-2 text-xs text-slate-500">Requests: {b.req} · SLA: {b.sla} · Trend: {b.trend}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-lg font-semibold">Work Verification and Closure Governance</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs uppercase tracking-wider text-slate-500">Pending Verification</p><p className="mt-2 text-2xl font-bold">73</p></div>
              <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs uppercase tracking-wider text-slate-500">Rejected Closures</p><p className="mt-2 text-2xl font-bold text-rose-600">9</p></div>
              <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs uppercase tracking-wider text-slate-500">Evidence Completion</p><p className="mt-2 text-2xl font-bold text-emerald-600">96%</p></div>
              <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs uppercase tracking-wider text-slate-500">Audit-Ready Closures</p><p className="mt-2 text-2xl font-bold">88%</p></div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h4 className="text-lg font-semibold">Request Drill-down</h4>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-3 py-2">Request ID</th><th className="px-3 py-2">Building</th><th className="px-3 py-2">Category</th><th className="px-3 py-2">Priority</th><th className="px-3 py-2">SLA Status</th><th className="px-3 py-2">Owner</th></tr></thead>
              <tbody>{requests.map((r) => <tr key={r.id} className="border-t border-slate-100 even:bg-slate-50/70"><td className="px-3 py-2 font-semibold text-slate-700">{r.id}</td><td className="px-3 py-2">{r.building}</td><td className="px-3 py-2">{r.category}</td><td className="px-3 py-2">{r.priority}</td><td className="px-3 py-2">{r.sla}</td><td className="px-3 py-2">{r.owner}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h4 className="text-lg font-semibold">Reports and Export</h4>
          <div className="mt-4 flex flex-wrap gap-3">
            {reports.map((report) => (
              <button key={report} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Export {report}
              </button>
            ))}
          </div>
        </section>
      </div>
    </DashboardShell>
  )
}
