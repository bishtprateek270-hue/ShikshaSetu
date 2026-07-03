'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function AdminUsersPage() {
  return (
    <RoleProtectedRoute allowedRoles={['admin']}>
      <DashboardRoutePlaceholder
        title="Manage Users"
        description="View and manage platform user accounts and access roles."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/admin' }, { label: 'Manage Users' }]}
        actionItems={[
          { label: 'Review approvals', description: 'Approve or update user roles.' },
          { label: 'Search accounts', description: 'Find users by name or email.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
