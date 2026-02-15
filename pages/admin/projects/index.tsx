import { useState } from 'react';
import type { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getProjects } from 'lib/data-service';
import { IProject } from 'shared/interfaces';
import AdminLayout from 'components/admin/AdminLayout';
import Link from 'next/link';

interface Props {
  projects: IProject[];
}

export default function AdminProjects({ projects: initialProjects }: Props) {
  const [projects, setProjects] = useState(initialProjects);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete project "${name}"? This cannot be undone.`)) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        const json = await res.json();
        alert(`Delete failed: ${json.error}`);
        return;
      }
      setProjects(prev => prev.filter(p => p.id !== id));
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <AdminLayout title="Projects">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              {projects.length} project{projects.length !== 1 ? 's' : ''}
            </p>
          </div>
          <Link href="/admin/projects/new" className="btn btn-solid">
            New project
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="rounded-xl border border-border bg-card px-6 py-12 text-center space-y-4">
            <p className="text-muted-foreground text-sm">No projects yet.</p>
            <Link href="/admin/projects/new" className="btn btn-outlined">
              Add your first project
            </Link>
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                    Stack
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {projects.map(project => (
                  <tr
                    key={project.id}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium">{project.name}</p>
                        <p className="text-xs text-muted-foreground mono_font">
                          {project.id}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                      {project.stack}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/projects/${project.id}`}
                          className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() =>
                            handleDelete(project.id, project.name)
                          }
                          disabled={deletingId === project.id}
                          className="rounded-lg border border-destructive/30 px-3 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10 transition-colors disabled:opacity-50"
                        >
                          {deletingId === project.id ? 'Deleting…' : 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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
  const projects = await getProjects();
  return { props: { projects } };
};
