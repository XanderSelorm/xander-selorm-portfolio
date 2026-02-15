import { useState } from 'react';
import type { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getAboutBrief } from 'lib/data-service';
import AdminLayout from 'components/admin/AdminLayout';

interface Props {
  initialBrief: string[];
}

export default function AdminAbout({ initialBrief }: Props) {
  const [paragraphs, setParagraphs] = useState<string[]>(initialBrief);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved' | 'error'>(
    'idle',
  );
  const [errorMsg, setErrorMsg] = useState('');

  const updateParagraph = (index: number, value: string) => {
    setParagraphs(prev => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
    setSaveStatus('idle');
  };

  const addParagraph = () => {
    setParagraphs(prev => [...prev, '']);
    setSaveStatus('idle');
  };

  const removeParagraph = (index: number) => {
    setParagraphs(prev => prev.filter((_, i) => i !== index));
    setSaveStatus('idle');
  };

  const moveParagraph = (index: number, direction: 'up' | 'down') => {
    setParagraphs(prev => {
      const next = [...prev];
      const swapIdx = direction === 'up' ? index - 1 : index + 1;
      if (swapIdx < 0 || swapIdx >= next.length) return prev;
      [next[index], next[swapIdx]] = [next[swapIdx], next[index]];
      return next;
    });
    setSaveStatus('idle');
  };

  const handleSave = async () => {
    const filtered = paragraphs.filter(p => p.trim());
    setIsSaving(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/admin/about', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brief: filtered }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setParagraphs(json.brief);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (err: any) {
      setErrorMsg(err.message);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  const textareaClass =
    'w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background resize-y transition-colors';

  return (
    <AdminLayout title="About Me">
      <div className="space-y-6 max-w-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">About Me — Bio</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Edit the bio paragraphs shown on the About page. Each non-empty
              paragraph renders as a separate{' '}
              <code className="mono_font text-xs bg-muted px-1 py-0.5 rounded">
                &lt;p&gt;
              </code>{' '}
              tag.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {saveStatus === 'saved' && (
              <span className="text-xs text-primary">Saved ✓</span>
            )}
            {saveStatus === 'error' && (
              <span className="text-xs text-destructive">{errorMsg}</span>
            )}
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="btn btn-solid"
            >
              {isSaving ? 'Saving…' : 'Save changes'}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {paragraphs.map((para, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground mono_font">
                  Paragraph {idx + 1}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => moveParagraph(idx, 'up')}
                    disabled={idx === 0}
                    className="rounded p-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-30"
                    title="Move up"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveParagraph(idx, 'down')}
                    disabled={idx === paragraphs.length - 1}
                    className="rounded p-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-30"
                    title="Move down"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeParagraph(idx)}
                    className="rounded p-1 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                    title="Remove paragraph"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <textarea
                value={para}
                onChange={e => updateParagraph(idx, e.target.value)}
                rows={4}
                className={textareaClass}
                placeholder="Write a paragraph…"
              />
            </div>
          ))}
        </div>

        {paragraphs.length === 0 && (
          <p className="text-sm text-muted-foreground py-4 text-center">
            No paragraphs yet. Add one below.
          </p>
        )}

        <button
          type="button"
          onClick={addParagraph}
          className="btn btn-outlined w-full"
        >
          + Add paragraph
        </button>
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
  const brief = await getAboutBrief();
  return { props: { initialBrief: brief } };
};
