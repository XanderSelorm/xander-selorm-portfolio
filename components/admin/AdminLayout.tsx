import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { ReactNode } from 'react';
import { cn } from 'lib/utils';
import { ThemeToggle } from 'components/ThemeToggle';

interface Props {
  children: ReactNode;
  title?: string;
}

const navItems = [
  { label: 'Projects', href: '/admin/projects' },
  { label: 'About Me', href: '/admin/about' },
];

const AdminLayout = ({ children, title = 'Admin' }: Props) => {
  const router = useRouter();

  return (
    <div className="inter_font min-h-screen bg-background text-foreground flex flex-col">
      <Head>
        <title>{`Admin — ${title} | Xander Selorm`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Top header */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <Link
              href="/admin/projects"
              className="text-sm font-semibold text-primary mono_font tracking-widest uppercase"
            >
              Admin CMS
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                    router.asPath.startsWith(item.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:block text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              View site ↗
            </Link>
            <ThemeToggle />
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sub-nav */}
      <div className="fixed top-14 z-40 w-full border-b border-border bg-background md:hidden">
        <nav className="flex gap-1 px-4 py-2">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                router.asPath.startsWith(item.href)
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Page content */}
      <main className="flex-1 pt-14 md:pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
