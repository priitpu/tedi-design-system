import { Meta, Story } from '@storybook/react';
import Link from 'next/link';
import React from 'react';

import useBreakpoint from '../../../helpers/hooks/use-breakpoint';
import { LinkBehaviour } from '../../anchor/anchor-helpers';
import Footer, { FooterProps } from './footer';

export default {
  title: 'components/Layout/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps<typeof Link>> = (args) => {
  const breakpoint = useBreakpoint();
  const isMobileLayout = ['xs', 'sm'].includes(breakpoint || '');

  const logo: FooterProps['logo'] = {
    src: isMobileLayout ? '/sf_logod.jpg' : '/sf_logod_vertikaalne.jpg',
    alt: 'logo',
    style: isMobileLayout
      ? {
          width: '9rem',
          height: '5.25rem',
          borderRadius: '0.25rem',
        }
      : {
          width: '3.75rem',
          height: '7rem',
          borderRadius: '0.25rem',
        },
  };
  return <Footer {...args} logo={logo} />;
};

export const Default = Template.bind({});
Default.args = {
  categories: [
    {
      heading: 'Category',
      icon: 'call_made',
      links: [
        { children: 'Text link', href: '#' },
        { children: 'Text link', href: '#' },
        { children: 'Text link', href: '#' },
      ],
    },
    {
      heading: 'Category',
      icon: 'call_made',
      links: [
        { children: 'Text link', href: '#' },
        { children: 'Text link', href: '#' },
        { children: 'Text link', href: '#' },
      ],
    },
    {
      heading: 'Category',
      icon: 'call_made',
      links: [
        { children: 'Text link', href: '#' },
        { children: 'Text link', href: '#' },
        { children: 'Text link', href: '#' },
      ],
    },
  ],
};

export const Laeh = Template.bind({});
Laeh.args = {
  ...Default.args,
  linkAs: LinkBehaviour,
  categories: [
    {
      heading: 'STAR kasutajatugi',
      icon: 'call_made',
      links: [
        {
          children: 'starteenusetugi@sotsiaalkindlustusamet.ee',
          href: 'mailto:starteenusetugi@sotsiaalkindlustusamet.ee',
        },
        { children: '+372 794 3906', href: 'tel:+3727943906' },
      ],
    },
  ],
};