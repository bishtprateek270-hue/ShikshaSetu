'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function StudentProfilePage() {
  return (
    <RoleProtectedRoute allowedRoles={['student']}>
      <DashboardRoutePlaceholder
        title="Profile"
        description="Manage your student profile and personal learning settings."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/student' }, { label: 'Profile' }]}
        actionItems={[
          { label: 'Update profile', description: 'Change your name, institute, or role settings.' },
          { label: 'Review privacy', description: 'See your account and data preferences.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
