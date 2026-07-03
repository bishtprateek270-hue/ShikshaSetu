'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function TeacherProfilePage() {
  return (
    <RoleProtectedRoute allowedRoles={['teacher', 'admin']}>
      <DashboardRoutePlaceholder
        title="Profile"
        description="Manage your teaching profile and personal instructor settings."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/teacher' }, { label: 'Profile' }]}
        actionItems={[
          { label: 'Edit profile', description: 'Update your name, institute, and bio.' },
          { label: 'Privacy settings', description: 'Review how your account is shared.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
