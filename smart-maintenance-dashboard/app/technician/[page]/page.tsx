import { notFound } from 'next/navigation'
import { ModulePageView } from '@/components/DashboardUI'
import { getModule } from '@/lib/dashboardData'

export default function Page({params}:{params:{page:string}}){
  const mod=getModule('/technician')
  if(!mod) return notFound()
  const page=mod.pages.find(p=>p.slug===params.page)
  if(!page) return notFound()
  return <ModulePageView mod={mod} page={page}/>
}
