import Link from 'next/link'

const roleLinks = [
  { label: 'Tenant', href: '/tenant/dashboard' },
  { label: 'Property Manager', href: '/pm/dashboard' },
  { label: 'Technician', href: '/technician/tasks' },
  { label: 'Admin / Ops', href: '/admin/dashboard' },
  { label: 'Management', href: '/management/dashboard' },
]

export default function Home() {
  return (
    <main className='min-h-screen bg-[#EEF2F8] p-10'>
      <div className='mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
        <h1 className='text-4xl font-bold text-[#0B4EDB]'>Maintenance Pro</h1>
        <p className='mt-2 text-slate-600'>Development role switcher for full workflow preview.</p>
        <div className='mt-6 flex flex-wrap gap-3'>
          <Link className='rounded-xl bg-[#0B4EDB] px-4 py-2 text-white' href='/login'>Login</Link>
          <Link className='rounded-xl border border-slate-300 px-4 py-2' href='/register'>Register</Link>
          <Link className='rounded-xl border border-slate-300 px-4 py-2' href='/pending-approval'>Pending Approval</Link>
        </div>
        <h2 className='mt-8 text-lg font-semibold'>Switch Role</h2>
        <div className='mt-3 grid gap-3 md:grid-cols-2'>
          {roleLinks.map((role) => (
            <Link key={role.href} href={role.href} className='rounded-xl border border-slate-200 bg-[#F7F9FD] px-4 py-3 font-medium hover:bg-blue-50 hover:text-[#0B4EDB]'>
              Open {role.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
