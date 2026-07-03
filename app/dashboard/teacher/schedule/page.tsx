'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function TeacherSchedulePage() {
  return (
    <RoleProtectedRoute allowedRoles={['teacher', 'admin']}>
      <DashboardRoutePlaceholder
        title="Schedule"
        description="Plan your teaching sessions and upcoming class events."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/teacher' }, { label: 'Schedule' }]}
        actionItems={[
          { label: 'Add event', description: 'Schedule a new class or office hour.' },
          { label: 'Review timetable', description: 'See your weekly teaching plan.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
