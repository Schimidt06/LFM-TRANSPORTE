import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
}