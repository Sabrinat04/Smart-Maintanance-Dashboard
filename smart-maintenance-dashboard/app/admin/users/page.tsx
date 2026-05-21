import { AppShell } from '@/components/AppShell'
import { DataTable, FilterBar, KPIStatCard, PageHeader, StatusBadge, card } from '@/components/ModuleUI'

export default function Page(){const users=[['Alex Morgan','Tenant','Skyline Tower U402','Active','2026-05-21 08:02'],['Sarah Miller','Property Manager','Skyline + Oak','Active','2026-05-21 07:50'],['John Doe','Technician','Building A/B HVAC','Pending','Never']]
return <AppShell role='admin' title='User Management'><PageHeader title='User Management' actions={<button className='rounded-lg bg-[#0B4EDB] px-4 py-2 text-white'>Create User</button>} />
<div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-4'>{[['Total Users','450'],['Active Users','418'],['Pending Users','12'],['Deactivated Users','20']].map(k=><KPIStatCard key={k[0]} label={k[0]} value={k[1]}/>)}</div>
<FilterBar><select><option>Role</option></select><select><option>Status</option></select><select><option>Building</option></select><input placeholder='Search user...' className='rounded-lg border p-2'/></FilterBar>
<DataTable headers={['User','Role','Assigned Scope','Status','Last Login','Actions']} rows={users.map(u=>[u[0],u[1],u[2],<StatusBadge value={u[3]} key='s'/>,u[4],<div key='a' className='flex gap-2 text-blue-700'><button>Edit</button><button>Deactivate</button><button>Reset Password</button></div>])} />
<div className='mt-4 rounded-2xl border bg-white p-4'><h3 className='font-semibold'>Create / Edit User</h3><div className='mt-2 grid gap-2 md:grid-cols-3'>{['Name','Email','Phone','Role','Assigned Building/Unit/Scope','Status'].map(f=><input key={f} placeholder={f} className='rounded border p-2'/>)}</div></div>
</AppShell>}
