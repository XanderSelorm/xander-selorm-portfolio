import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About Me', href: '/about-me' },
  { label: 'Blog', href: 'https://dev.to/xanderselorm', external: true },
  { label: 'Contact', href: '/contact' },
];

const onlineLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/XanderSelorm/' },
  { label: 'X (Twitter)', href: 'https://www.twitter.com/XanderSelorm/' },
  { label: 'GitHub', href: 'https://github.com/XanderSelorm' },
  { label: 'dev.to', href: 'https://dev.to/xanderselorm' },
];

const Footer = ({ hasBorderTop = true }: { hasBorderTop?: boolean }) => {
  return (
    <footer
      className={`${
        hasBorderTop ? 'border-t border-border' : ''
        } mt-16 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10`}
    >
      {/* 3-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pb-12">

        {/* --- Contact --- */}
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mono_font">
            Contact
          </p>
          <div className="space-y-2">
            <p className="text-sm text-foreground font-medium">Alexander Selorm Kubi</p>
            <Link
              href="mailto:parity_flame_3s@icloud.com"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </Link>
            <p className="text-sm text-muted-foreground">Accra, Ghana 🇬🇭</p>
          </div>
        </div>

        {/* --- Navigation --- */}
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mono_font">
            Navigation
          </p>
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Online --- */}
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mono_font">
            Online
          </p>
          <ul className="space-y-2">
            {onlineLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Xander Selorm. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
