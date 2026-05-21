import Link from 'next/link';
import { ROLE_CONFIG } from '@/lib/role-config';

export default function Home(){
  const links=[['Tenant','/tenant/dashboard'],['Property Manager','/property-manager/dashboard'],['Technician','/technician/tasks'],['Admin','/admin/overview'],['Management','/management/executive']] as const;
  return <main className="min-h-screen bg-slate-50 p-10"><h1 className="text-5xl font-bold">Smart Maintenance Platform</h1><p className="mt-3 text-slate-600">SRS v0.3 aligned multi-role maintenance request prototype.</p><div className="grid grid-cols-5 gap-4 mt-10">{links.map(([n,p])=><Link key={p} href={p} className="bg-white rounded-2xl border p-5 shadow-sm hover:shadow"><h3 className="font-semibold text-xl">{n}</h3><p className="text-sm text-slate-500 mt-2">{Object.values(ROLE_CONFIG).find(r=>p.startsWith('/'+r.basePath))?.description}</p><p className="mt-6 text-blue-700">Open workspace →</p></Link>)}</div></main>
}
