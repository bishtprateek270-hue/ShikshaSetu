'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function AssignmentsPage() {
  return (
    <RoleProtectedRoute allowedRoles={['student']}>
      <DashboardRoutePlaceholder
        title="Assignments"
        description="View all current assignments and submission deadlines."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/student' }, { label: 'Assignments' }]}
        actionItems={[
          { label: 'Submit work', description: 'Open the submission flow for your current task.' },
          { label: 'Review feedback', description: 'Check comments from your instructor.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
