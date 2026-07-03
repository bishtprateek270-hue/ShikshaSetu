'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function TeacherSettingsPage() {
  return (
    <RoleProtectedRoute allowedRoles={['teacher', 'admin']}>
      <DashboardRoutePlaceholder
        title="Settings"
        description="Adjust your classroom preferences and notification behaviors."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/teacher' }, { label: 'Settings' }]}
        actionItems={[
          { label: 'Manage notifications', description: 'Control alerts for student updates.' },
          { label: 'Set preferences', description: 'Customize your teaching experience.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
