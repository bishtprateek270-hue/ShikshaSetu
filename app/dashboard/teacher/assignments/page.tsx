'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function TeacherAssignmentsPage() {
  return (
    <RoleProtectedRoute allowedRoles={['teacher', 'admin']}>
      <DashboardRoutePlaceholder
        title="Assignments"
        description="Create, assign, and review tasks for your learners."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/teacher' }, { label: 'Assignments' }]}
        actionItems={[
          { label: 'Create assignment', description: 'Launch a new task for your class.' },
          { label: 'Grade submissions', description: 'Review completed student work.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
