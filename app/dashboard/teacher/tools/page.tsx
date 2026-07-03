'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function TeacherToolsPage() {
  return (
    <RoleProtectedRoute allowedRoles={['teacher', 'admin']}>
      <DashboardRoutePlaceholder
        title="Study Tools"
        description="Access tools that help you manage lessons and student learning."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/teacher' }, { label: 'Study Tools' }]}
        actionItems={[
          { label: 'Open planner', description: 'Organize lesson content and activities.' },
          { label: 'Review resources', description: 'Access materials for your classes.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
