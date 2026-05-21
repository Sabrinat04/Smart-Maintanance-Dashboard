export type RequestStatus =
  | 'New'
  | 'Under Review'
  | 'Rejected'
  | 'Assigned'
  | 'In Progress'
  | 'Cannot Complete'
  | 'Completed'
  | 'Verified'
  | 'Closed'
  | 'Cancellation Requested'
  | 'Cancelled'
  | 'Reopen Requested'

export const brand = { appName: 'Maintenance Pro', primary: '#0B4EDB' }

export const kpiByRole = {
  tenant: [
    { label: 'Open Requests', value: '03' },
    { label: 'Completed', value: '12' },
  ],
  pm: [
    { label: 'New', value: '5' },
    { label: 'Under Review', value: '8' },
    { label: 'Assigned', value: '12' },
    { label: 'In Progress', value: '15' },
    { label: 'Completed', value: '4' },
    { label: 'SLA Breached', value: '2' },
  ],
  tech: [{ label: 'Assigned', value: '3' }, { label: 'In Progress', value: '1' }],
  admin: [{ label: 'Total Users', value: '450' }, { label: 'Pending Approvals', value: '12' }, { label: 'Active Buildings', value: '24' }, { label: 'Open Requests', value: '58' }],
  management: [{ label: 'SLA Compliance', value: '94%' }, { label: 'Avg Response Time', value: '1.2h' }, { label: 'Avg Resolution', value: '18h' }, { label: 'Reopen Rate', value: '2%' }],
}

export const maintenanceRequests = [
  { id: 'WO-8291', title: 'HVAC Failure', tenant: 'Marcus V.', building: 'Skyline Tower', unit: '14B', status: 'In Progress' as RequestStatus, priority: 'Critical', sla: '15m remaining', category: 'HVAC' },
  { id: 'WO-8294', title: 'Broken Window', tenant: 'Sarah L.', building: 'Green Valley', unit: '402', status: 'Assigned' as RequestStatus, priority: 'High', sla: 'On Track (3.5h)', category: 'Carpentry' },
  { id: 'WO-8288', title: 'Elevator Inspection', tenant: 'Building Mgmt', building: 'Skyline Tower', unit: 'Main Hall', status: 'Closed' as RequestStatus, priority: 'Medium', sla: 'Breached 2h', category: 'Safety' },
]

export const notifications = [
  { id: 1, title: 'Task assigned to technician', read: false, channel: 'In-app', time: '2h ago' },
  { id: 2, title: 'SLA near breach alert', read: false, channel: 'Email', time: '1h ago' },
  { id: 3, title: 'Reopen request approved', read: true, channel: 'WhatsApp', time: 'Yesterday' },
]

export const auditLogs = [
  { ts: '2026-05-21 09:00', actor: 'Admin User', action: 'White label publish', target: 'Branding', status: 'Success' },
  { ts: '2026-05-21 08:30', actor: 'PM Sarah', action: 'Assign request', target: 'WO-8291', status: 'Success' },
  { ts: '2026-05-21 08:15', actor: 'Tech John', action: 'Cannot complete', target: 'WO-8201', status: 'Warning' },
]

export const roleMenus = {
  tenant: [
    { group: 'Main', items: [{ label: 'Dashboard', href: '/tenant/dashboard' }, { label: 'Create Request', href: '/tenant/requests/new' }] },
    { group: 'Maintenance Requests', items: [{ label: 'My Requests', href: '/tenant/requests' }, { label: 'Request Details', href: '/tenant/requests/WO-8291' }] },
    { group: 'Communication', items: [{ label: 'Notifications', href: '/tenant/notifications' }, { label: 'Profile', href: '/tenant/profile' }] },
  ],
  pm: [
    { group: 'Overview', items: [{ label: 'Dashboard', href: '/pm/dashboard' }] },
    { group: 'Request Review', items: [{ label: 'New Requests', href: '/pm/new-requests' }, { label: 'Approve/Reject', href: '/pm/approve-reject' }] },
    { group: 'Assignment', items: [{ label: 'Board', href: '/pm/assignment' }, { label: 'Assigned', href: '/pm/assigned' }, { label: 'Verification', href: '/pm/verification' }] },
    { group: 'Exceptions', items: [{ label: 'Cancellations', href: '/pm/cancellations' }, { label: 'Reopens', href: '/pm/reopens' }, { label: 'Cannot Complete', href: '/pm/cannot-complete' }, { label: 'SLA Breaches', href: '/pm/sla-breaches' }] },
  ],
  tech: [
    { group: 'Work', items: [{ label: 'My Tasks', href: '/tech/tasks' }, { label: 'Work Orders', href: '/tech/work-orders' }] },
    { group: 'Execution', items: [{ label: 'Start Task', href: '/tech/start-task' }, { label: 'Upload Before', href: '/tech/upload-before' }, { label: 'Add Notes', href: '/tech/add-notes' }, { label: 'Upload After', href: '/tech/upload-after' }, { label: 'Complete', href: '/tech/complete' }, { label: 'Cannot Complete', href: '/tech/cannot-complete' }] },
  ],
  admin: [
    { group: 'Overview', items: [{ label: 'Dashboard', href: '/admin/dashboard' }] },
    { group: 'Users & Access', items: [{ label: 'User Mgmt', href: '/admin/users' }, { label: 'Tenant Approval', href: '/admin/tenant-approvals' }, { label: 'PM Mgmt', href: '/admin/property-managers' }, { label: 'Tech Mgmt', href: '/admin/technicians' }] },
    { group: 'Property Data', items: [{ label: 'Buildings', href: '/admin/buildings' }, { label: 'Units', href: '/admin/units' }, { label: 'Categories', href: '/admin/categories' }] },
    { group: 'Operations', items: [{ label: 'SLA Settings', href: '/admin/sla-settings' }, { label: 'Notifications', href: '/admin/notifications' }, { label: 'White Label', href: '/admin/white-label' }, { label: 'Audit Logs', href: '/admin/audit-logs' }, { label: 'Legacy Entry', href: '/admin/legacy-entry' }, { label: 'Report Permissions', href: '/admin/report-permissions' }] },
  ],
  management: [
    { group: 'Executive', items: [{ label: 'Dashboard', href: '/management/dashboard' }] },
    { group: 'Performance', items: [{ label: 'SLA Compliance', href: '/management/sla' }, { label: 'Tech Performance', href: '/management/technicians' }, { label: 'Building Comparison', href: '/management/buildings' }] },
    { group: 'Analysis', items: [{ label: 'Export', href: '/management/reports' }] },
  ],
}

export const kpis = kpiByRole.pm.map((x) => ({ label: x.label, value: x.value, trend: "" }))
export const requests = maintenanceRequests.map((r) => ({ id: r.id, tenant: r.tenant, issue: r.title, priority: r.priority, status: r.status, technician: "John D." }))
