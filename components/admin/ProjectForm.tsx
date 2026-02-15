import { useState, useRef } from 'react';
import { IProject } from 'shared/interfaces';
import { cn } from 'lib/utils';
import Image from 'next/image';

export type ProjectFormData = Omit<IProject, 'id'> & { order_index?: number };

interface Props {
  initialData?: Partial<ProjectFormData>;
  isLoading?: boolean;
  onSubmit: (data: ProjectFormData) => Promise<void>;
  submitLabel?: string;
}

const EMPTY: ProjectFormData = {
  name: '',
  url: null,
  description: '',
  image: '',
  stack: '',
  linkText: undefined,
  page: undefined,
  order_index: 0,
};

const inputClass =
  'w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors';

const ProjectForm = ({
  initialData = {},
  isLoading = false,
  onSubmit,
  submitLabel = 'Save',
}: Props) => {
  const [form, setForm] = useState<ProjectFormData>({
    ...EMPTY,
    ...initialData,
  });
  const [imagePreview, setImagePreview] = useState<string>(
    initialData.image ?? '',
  );
  const [uploadError, setUploadError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [formError, setFormError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = (
    field: keyof ProjectFormData,
    value: string | number | null | undefined,
  ) => setForm(prev => ({ ...prev, [field]: value }));

  const handleImageUpload = async (file: File) => {
    setUploadError('');
    setIsUploading(true);
    try {
      const fd = new FormData();
      fd.append('image', file);
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: fd,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Upload failed');
      update('image', json.url);
      setImagePreview(json.url);
    } catch (err: any) {
      setUploadError(err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!form.name.trim()) {
      setFormError('Name is required');
      return;
    }
    if (!form.description.trim()) {
      setFormError('Description is required');
      return;
    }
    if (!form.stack.trim()) {
      setFormError('Stack is required');
      return;
    }
    try {
      await onSubmit(form);
    } catch (err: any) {
      setFormError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {formError && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {formError}
        </div>
      )}

      <div className="space-y-1.5">
        <label className="text-sm font-medium">
          Project Name <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          value={form.name}
          onChange={e => update('name', e.target.value)}
          className={inputClass}
          placeholder="Treesyt Website & Dashboard"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">
          Description <span className="text-destructive">*</span>
        </label>
        <textarea
          value={form.description}
          onChange={e => update('description', e.target.value)}
          rows={4}
          className={cn(inputClass, 'resize-y')}
          placeholder="A brief description of the project..."
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">
          Stack <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          value={form.stack}
          onChange={e => update('stack', e.target.value)}
          className={inputClass}
          placeholder="NextJS | TypeScript | TailwindCSS"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Live URL</label>
        <input
          type="url"
          value={form.url ?? ''}
          onChange={e => update('url', e.target.value || null)}
          className={inputClass}
          placeholder="https://example.com"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">
          Link Text{' '}
          <span className="text-xs text-muted-foreground">(default: "See more")</span>
        </label>
        <input
          type="text"
          value={form.linkText ?? ''}
          onChange={e => update('linkText', e.target.value || undefined)}
          className={inputClass}
          placeholder="See more"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">
          Internal Page Route{' '}
          <span className="text-xs text-muted-foreground">
            (overrides live URL on card)
          </span>
        </label>
        <input
          type="text"
          value={form.page ?? ''}
          onChange={e => update('page', e.target.value || undefined)}
          className={inputClass}
          placeholder="/projects/my-project"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Display Order</label>
        <input
          type="number"
          min={0}
          value={form.order_index ?? 0}
          onChange={e => update('order_index', parseInt(e.target.value, 10))}
          className={cn(inputClass, 'w-28')}
        />
        <p className="text-xs text-muted-foreground">
          Lower numbers appear first.
        </p>
      </div>

      {/* Image */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Project Image</label>
        <input
          type="text"
          value={form.image}
          onChange={e => {
            update('image', e.target.value);
            setImagePreview(e.target.value);
          }}
          className={inputClass}
          placeholder="/imgs/projects/my-project.png or https://..."
        />
        <div className="flex items-center gap-3">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            onChange={e => {
              const f = e.target.files?.[0];
              if (f) handleImageUpload(f);
            }}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="btn btn-outlined text-sm"
          >
            {isUploading ? 'Uploading...' : 'Upload image'}
          </button>
          {isUploading && (
            <span className="text-xs text-muted-foreground">
              Uploading to Supabase Storage…
            </span>
          )}
        </div>
        {uploadError && (
          <p className="text-xs text-destructive">{uploadError}</p>
        )}
        {imagePreview && (
          <div className="relative h-40 w-full max-w-sm overflow-hidden rounded-lg border border-border bg-muted">
            <Image
              src={imagePreview}
              alt="Project image preview"
              fill
              style={{ objectFit: 'cover' }}
              unoptimized={imagePreview.startsWith('http')}
            />
          </div>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading || isUploading}
          className="btn btn-solid"
        >
          {isLoading ? 'Saving…' : submitLabel}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
