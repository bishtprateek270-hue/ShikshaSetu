'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function TeacherStudentsPage() {
  return (
    <RoleProtectedRoute allowedRoles={['teacher', 'admin']}>
      <DashboardRoutePlaceholder
        title="Students"
        description="View and manage your student groups and engagement details."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/teacher' }, { label: 'Students' }]}
        actionItems={[
          { label: 'Review attendance', description: 'See student participation across sessions.' },
          { label: 'Send message', description: 'Communicate directly with your learners.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
