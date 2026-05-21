import { notFound } from 'next/navigation'
import { AppShell } from '@/components/AppShell'
import { ROLE_CONFIG } from '@/lib/dashboardData'

export default function Page({params}:{params:{page:string}}){
 const role=ROLE_CONFIG.find(r=>r.key==='property-manager')
 if(!role) return notFound()
 const exists=role.groups.some(g=>g.items.some(i=>i.slug===params.page))
 if(!exists) return notFound()
 return <AppShell role={role} slug={params.page} />
}
