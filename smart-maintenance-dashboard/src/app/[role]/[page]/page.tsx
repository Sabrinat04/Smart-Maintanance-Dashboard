import { notFound, redirect } from 'next/navigation';
import { GenericPage } from '@/components/AppShell';
import { ROLE_CONFIG, RoleKey } from '@/lib/role-config';
import AdminOverviewPage from '@/components/admin/AdminOverviewPage';

export default function Page({params}:{params:{role:string;page:string}}){
  const role=params.role as RoleKey;
  const cfg=ROLE_CONFIG[role];
  if(!cfg) return notFound();
  if(role==='admin' && params.page==='dashboard') redirect('/admin/overview');
  const full=`/${params.role}/${params.page}`;
  const valid=cfg.groups.some(g=>g.items.some(i=>i.path===full));
  if(!valid) return notFound();
  if(role==='admin' && params.page==='overview') return <AdminOverviewPage/>;
  return <GenericPage role={role} slug={params.page}/>;
}
