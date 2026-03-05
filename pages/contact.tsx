import Hero from 'components/hero';
import Layout from 'components/Layout';
import Section from 'components/section';
import ChannelPill from 'components/ChannelPill';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import {
  FiMail,
  FiTwitter,
  FiGithub,
  FiExternalLink,
} from 'react-icons/fi';

const channels = [
  {
    id: 'email',
    icon: FiMail,
    label: 'Email',
    href: 'mailto:parity_flame_3s@icloud.com',
    defaultExpanded: true,
  },
  {
    id: 'linkedin',
    icon: FiExternalLink,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/XanderSelorm/',
    external: true,
  },
  {
    id: 'twitter',
    icon: FiTwitter,
    label: 'X',
    href: 'https://www.twitter.com/XanderSelorm/',
    external: true,
  },
  {
    id: 'github',
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/XanderSelorm',
    external: true,
  },
];

const contactChannels = [
  {
    label: 'Email',
    value: 'parity_flame_3s@icloud.com',
    href: 'mailto:parity_flame_3s@icloud.com',
    icon: FiMail,
    note: 'Best for project enquiries & opportunities',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/XanderSelorm',
    href: 'https://www.linkedin.com/in/XanderSelorm/',
    icon: FiExternalLink,
    note: 'Connect professionally',
  },
  {
    label: 'X (Twitter)',
    value: '@XanderSelorm',
    href: 'https://www.twitter.com/XanderSelorm/',
    icon: FiTwitter,
    note: 'Quick conversations & announcements',
  },
  {
    label: 'GitHub',
    value: 'github.com/XanderSelorm',
    href: 'https://github.com/XanderSelorm',
    icon: FiGithub,
    note: 'Open-source & side projects',
  },
];

const Contact: NextPage = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <Layout
      title="Contact"
      description="Get in touch with Alexander Selorm Kubi — available for freelance work, collaborations, and engineering opportunities."
      canonicalPath="/contact"
      footerHasBorderTop={false}
    >
      <Hero isFullHeight>
        {/* Label */}
        <p className="text-sm font-medium tracking-widest text-primary mono_font">
          // get in touch
        </p>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
          Let&apos;s build{' '}
          <span className="text-primary">something!</span>
        </h1>

        {/* Sub-copy */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
          Open to freelance projects, full-time roles, and interesting
          collaborations. Based in Accra, Ghana — available remotely.
        </p>

        {/* Channel pill buttons */}
        <div className="flex flex-row items-center gap-2 pt-2 flex-wrap">
          {channels.map((channel) => (
            <ChannelPill
              key={channel.id}
              id={channel.id}
              icon={channel.icon}
              label={channel.label}
              href={channel.href}
              external={channel.external}
              defaultExpanded={channel.defaultExpanded}
              activeId={activeId}
              onHover={setActiveId}
            />
          ))}
        </div>
      </Hero>
    </Layout>
  );
};

export default Contact;
