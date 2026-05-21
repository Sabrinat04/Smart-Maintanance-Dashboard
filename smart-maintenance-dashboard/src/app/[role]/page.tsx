import { redirect, notFound } from 'next/navigation';
import { ROLE_CONFIG, RoleKey } from '@/lib/role-config';

export default function RoleIndex({params}:{params:{role:string}}){
  const cfg=ROLE_CONFIG[params.role as RoleKey];
  if(!cfg) return notFound();
  redirect(cfg.groups[0].items[0].path);
}
