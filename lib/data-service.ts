import { IProject } from 'shared/interfaces';
import projectsDataFallback from 'resources/projects-data';
import aboutMeDataFallback from 'resources/about-me-data';
import { supabase, supabaseAdmin, isSupabaseConfigured } from 'lib/supabase';

// ─────────────────────────────────────────────────────────────────────────────
// Internal types
// ─────────────────────────────────────────────────────────────────────────────

interface SupabaseProject {
  id: string;
  name: string;
  url: string | null;
  description: string;
  image: string;
  stack: string;
  link_text: string | null;
  page: string | null;
  order_index: number;
}

function mapRow(row: SupabaseProject): IProject {
  return {
    id: row.id,
    name: row.name,
    url: row.url,
    description: row.description,
    image: row.image,
    stack: row.stack,
    linkText: row.link_text ?? undefined,
    page: row.page ?? undefined,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// READ — safe to call in getStaticProps / getServerSideProps
// ─────────────────────────────────────────────────────────────────────────────

export async function getProjects(): Promise<IProject[]> {
  if (!isSupabaseConfigured()) return projectsDataFallback;

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order_index', { ascending: true });

  if (error || !data) {
    console.error('[data-service] getProjects:', error?.message);
    return projectsDataFallback;
  }
  return (data as SupabaseProject[]).map(mapRow);
}

export async function getProject(id: string): Promise<IProject | null> {
  if (!isSupabaseConfigured()) {
    return projectsDataFallback.find(p => p.id === id) ?? null;
  }

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) return null;
  return mapRow(data as SupabaseProject);
}

export async function getAboutBrief(): Promise<string[]> {
  if (!isSupabaseConfigured()) return aboutMeDataFallback.brief;

  const { data, error } = await supabase
    .from('about_me')
    .select('brief')
    .eq('id', 1)
    .single();

  if (error || !data) {
    console.error('[data-service] getAboutBrief:', error?.message);
    return aboutMeDataFallback.brief;
  }
  return (data.brief as string[]) ?? [];
}

// ─────────────────────────────────────────────────────────────────────────────
// WRITE — API routes only (uses supabaseAdmin / service role key)
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectInput = Omit<IProject, 'id'> & { order_index?: number };

export async function upsertProject(
  id: string,
  input: ProjectInput,
): Promise<IProject> {
  const { data, error } = await supabaseAdmin
    .from('projects')
    .upsert(
      {
        id,
        name: input.name,
        url: input.url ?? null,
        description: input.description,
        image: input.image,
        stack: input.stack,
        link_text: input.linkText ?? null,
        page: input.page ?? null,
        order_index: input.order_index ?? 0,
      },
      { onConflict: 'id' },
    )
    .select()
    .single();

  if (error || !data) {
    throw new Error(error?.message ?? 'Failed to upsert project');
  }
  return mapRow(data as SupabaseProject);
}

export async function deleteProject(id: string): Promise<void> {
  const { error } = await supabaseAdmin.from('projects').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

export async function updateAboutBrief(brief: string[]): Promise<string[]> {
  const { data, error } = await supabaseAdmin
    .from('about_me')
    .update({ brief })
    .eq('id', 1)
    .select('brief')
    .single();

  if (error || !data) {
    throw new Error(error?.message ?? 'Failed to update about brief');
  }
  return data.brief as string[];
}
