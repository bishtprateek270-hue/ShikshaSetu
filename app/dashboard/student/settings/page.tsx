'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function StudentSettingsPage() {
  return (
    <RoleProtectedRoute allowedRoles={['student']}>
      <DashboardRoutePlaceholder
        title="Settings"
        description="Configure notifications, privacy, and learning preferences." 
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/student' }, { label: 'Settings' }]}
        actionItems={[
          { label: 'Manage notifications', description: 'Turn alerts on or off for activities.' },
          { label: 'Set preferences', description: 'Choose your preferred learning experience.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
