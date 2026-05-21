export type NavItem = { title:string; slug:string; icon:string }
export type NavGroup = { title:string; items:NavItem[] }
export type RoleKey = 'admin'|'tenant'|'property-manager'|'technician'|'management'
export type RoleConfig = { key:RoleKey; name:string; subtitle:string; basePath:string; readOnly?:boolean; groups:NavGroup[] }

export const ROLE_CONFIG: RoleConfig[] = [
{ key:'admin',name:'Admin / Operations',subtitle:'Platform governance and control',basePath:'/admin',groups:[
{title:'Platform Control',items:[{title:'Admin Overview',slug:'overview',icon:'DB'},{title:'White Label Settings',slug:'white-label',icon:'WL'},{title:'Security Policy',slug:'security',icon:'SC'}]},
{title:'People & Access',items:[{title:'User Management',slug:'users',icon:'US'},{title:'Tenant Approval Queue',slug:'tenant-approvals',icon:'TA'},{title:'Property Managers',slug:'property-managers',icon:'PM'},{title:'Technicians',slug:'technicians',icon:'TC'}]},
{title:'Portfolio Data',items:[{title:'Buildings',slug:'buildings',icon:'BL'},{title:'Units',slug:'units',icon:'UN'},{title:'Manual Legacy Request Entry',slug:'legacy-entry',icon:'LG'}]},
{title:'Service Operations',items:[{title:'Service Categories',slug:'service-categories',icon:'SV'},{title:'SLA Settings',slug:'sla-settings',icon:'SLA'},{title:'Notification Providers',slug:'notification-providers',icon:'NT'}]},
{title:'Governance',items:[{title:'Audit Logs',slug:'audit-logs',icon:'AL'},{title:'Report Export Permissions',slug:'export-permissions',icon:'RP'}]}
]},
{ key:'tenant',name:'Tenant',subtitle:'My unit maintenance lifecycle',basePath:'/tenant',groups:[
{title:'Access & Account',items:[{title:'Registration',slug:'registration',icon:'RG'},{title:'Login / Secure Access',slug:'login',icon:'LG'},{title:'Profile & Unit Information',slug:'profile',icon:'PF'}]},
{title:'Maintenance Requests',items:[{title:'Tenant Command Center',slug:'dashboard',icon:'CC'},{title:'My Requests',slug:'requests',icon:'MR'},{title:'Create Maintenance Request',slug:'create-request',icon:'CR'},{title:'Request Details',slug:'request-details',icon:'RD'},{title:'Cancellation Request',slug:'cancellation-request',icon:'CN'},{title:'Reopen Request',slug:'reopen-request',icon:'RO'},{title:'Feedback After Closure',slug:'feedback',icon:'FB'}]},
{title:'Communication',items:[{title:'Notification Center',slug:'notifications',icon:'NT'}]},
{title:'Smart Portal',items:[{title:'Smart Tenant Portal Insights',slug:'smart-insights',icon:'SI'}]}
]},
{ key:'property-manager',name:'Property Manager',subtitle:'Assigned buildings operations',basePath:'/property-manager',groups:[
{title:'Command & Triage',items:[{title:'Operational Dashboard',slug:'dashboard',icon:'OD'},{title:'New Requests Review',slug:'new-requests',icon:'NR'},{title:'Request Details',slug:'request-details',icon:'RD'}]},
{title:'Assignment & Tracking',items:[{title:'Smart Assignment & Dispatch',slug:'assignment',icon:'AS'},{title:'Assigned Requests Tracking',slug:'assigned-tracking',icon:'AT'},{title:'Technician Selection Logic',slug:'technician-selection',icon:'TS'},{title:'Workload Balance',slug:'workload-balance',icon:'WB'}]},
{title:'Exceptions & Decisions',items:[{title:'Cannot Complete Handling',slug:'cannot-complete',icon:'CC'},{title:'Cancellation Decision',slug:'cancellation-decision',icon:'CD'},{title:'Reopen Decision',slug:'reopen-decision',icon:'RD'},{title:'Completed Work Verification',slug:'verification',icon:'VF'}]},
{title:'SLA & Reports',items:[{title:'SLA Breaches',slug:'sla-breaches',icon:'SB'},{title:'Reports & Performance Insights',slug:'reports',icon:'RP'}]}
]},
{ key:'technician',name:'Technician',subtitle:'Assigned field service work',basePath:'/technician',groups:[
{title:'My Work',items:[{title:'Task List',slug:'tasks',icon:'TL'},{title:'Task Details',slug:'task-details',icon:'TD'},{title:'Start Work',slug:'start-work',icon:'SW'}]},
{title:'Execution',items:[{title:'Upload Before Photo',slug:'before-photo',icon:'BP'},{title:'Execution Checklist',slug:'execution',icon:'EX'},{title:'Add Work Notes',slug:'work-notes',icon:'WN'},{title:'Upload After Photo',slug:'after-photo',icon:'AP'},{title:'Mark Completed',slug:'mark-completed',icon:'MC'}]},
{title:'Exceptions',items:[{title:'Mark Cannot Complete',slug:'cannot-complete',icon:'CC'},{title:'Priority & SLA Indicators',slug:'priority-sla',icon:'PS'}]},
{title:'Account',items:[{title:'Allowed Building / Unit Information',slug:'allowed-units',icon:'AU'},{title:'Alerts & Notifications',slug:'alerts',icon:'AN'},{title:'Technician Profile',slug:'profile',icon:'PF'}]}
]},
{ key:'management',name:'Management',subtitle:'Read-only executive performance',basePath:'/management',readOnly:true,groups:[
{title:'Executive View',items:[{title:'Executive Dashboard',slug:'executive',icon:'ED'},{title:'SLA Dashboard',slug:'sla',icon:'SLA'}]},
{title:'Performance Analysis',items:[{title:'Technician Performance',slug:'technician-performance',icon:'TP'},{title:'Building Comparison',slug:'building-comparison',icon:'BC'}]},
{title:'Reporting',items:[{title:'Report Export Screen',slug:'report-export',icon:'RE'},{title:'Audit / Export History',slug:'audit-export-history',icon:'AH'}]}
]}
]

export const buildings=['Al Noor Tower','Palm Residence','Business Bay Complex','Garden Heights']
export const techs=['Ahmed Samir','Omar Khaled','Sara Nabil','Youssef Ali']
export const workflow=['New','Under Review','Assigned','In Progress','Cannot Complete','Completed','Verified','Closed']
