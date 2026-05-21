export function KpiCards({ items }: { items: { label: string; value: string; trend: string }[] }) {
  return <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{items.map((i) => <div key={i.label} className="rounded-xl bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">{i.label}</p><p className="mt-2 text-2xl font-bold">{i.value}</p><p className="text-sm text-green-600">{i.trend}</p></div>)}</div>
}

export function Badge({ value, type }: { value: string; type: 'status' | 'priority' }) {
  const classes = type === 'status' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${classes}`}>{value}</span>
}

export function RequestsTable({ rows }: { rows: { id: string; tenant: string; issue: string; priority: string; status: string; technician: string }[] }) {
  return <div className="overflow-hidden rounded-xl bg-white shadow-sm"><table className="min-w-full text-left text-sm"><thead className="bg-slate-50 text-slate-500"><tr><th className="px-4 py-3">Request</th><th className="px-4 py-3">Tenant</th><th className="px-4 py-3">Issue</th><th className="px-4 py-3">Priority</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Technician</th></tr></thead><tbody>{rows.map((row) => <tr key={row.id} className="border-t"><td className="px-4 py-3 font-medium">{row.id}</td><td className="px-4 py-3">{row.tenant}</td><td className="px-4 py-3">{row.issue}</td><td className="px-4 py-3"><Badge value={row.priority} type="priority" /></td><td className="px-4 py-3"><Badge value={row.status} type="status" /></td><td className="px-4 py-3">{row.technician}</td></tr>)}</tbody></table></div>
}

export function SectionList({ title, items }: { title: string; items: string[] }) {
  return <div className="rounded-xl bg-white p-5 shadow-sm"><h3 className="mb-3 text-lg font-semibold">{title}</h3><ul className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">{items.map((item) => <li key={item} className="rounded-md bg-slate-50 px-3 py-2">{item}</li>)}</ul></div>
}
