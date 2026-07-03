'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function AdminSettingsPage() {
  return (
    <RoleProtectedRoute allowedRoles={['admin']}>
      <DashboardRoutePlaceholder
        title="Settings"
        description="Configure global platform settings and administration options."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/admin' }, { label: 'Settings' }]}
        actionItems={[
          { label: 'Update settings', description: 'Change platform preferences and defaults.' },
          { label: 'Manage policies', description: 'Review usage and access controls.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
