import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  span: string; // Tailwind grid span class
}

export interface ContactInfo {
  phone: string;
  expert: string;
  address: string;
}

export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}