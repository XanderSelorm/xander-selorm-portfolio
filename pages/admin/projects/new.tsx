import { useState } from 'react';
import type { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import AdminLayout from 'components/admin/AdminLayout';
import ProjectForm, { ProjectFormData } from 'components/admin/ProjectForm';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NewProject() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: ProjectFormData) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      router.push('/admin/projects');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminLayout title="New Project">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href="/admin/projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <span>/</span>
          <span className="text-foreground">New</span>
        </div>
        <h1 className="text-2xl font-bold">New Project</h1>
        <ProjectForm
          isLoading={isLoading}
          onSubmit={handleSubmit}
          submitLabel="Create project"
        />
      </div>
    </AdminLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getServerSession(
    context.req,
    context.res,
    authOptions,
  );
  if (!session) {
    return { redirect: { destination: '/admin/login', permanent: false } };
  }
  return { props: {} };
};
