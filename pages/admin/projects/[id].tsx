import { useState } from 'react';
import type { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getProject } from 'lib/data-service';
import { IProject } from 'shared/interfaces';
import AdminLayout from 'components/admin/AdminLayout';
import ProjectForm, { ProjectFormData } from 'components/admin/ProjectForm';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  project: IProject;
}

export default function EditProject({ project }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: ProjectFormData) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/admin/projects/${project.id}`, {
        method: 'PUT',
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
    <AdminLayout title={`Edit: ${project.name}`}>
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href="/admin/projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <span>/</span>
          <span className="text-foreground truncate max-w-xs">
            {project.name}
          </span>
        </div>
        <h1 className="text-2xl font-bold">Edit Project</h1>
        <ProjectForm
          initialData={{
            name: project.name,
            url: project.url,
            description: project.description,
            image: project.image,
            stack: project.stack,
            linkText: project.linkText,
            page: project.page,
          }}
          isLoading={isLoading}
          onSubmit={handleSubmit}
          submitLabel="Save changes"
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

  const id = context.params?.id as string;
  const project = await getProject(id);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
