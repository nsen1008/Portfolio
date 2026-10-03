import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { vi, en } from './messages';

export type Locale = 'vi' | 'en';
export function useLanguage() {
  const { pathname } = useLocation();
  const locale: Locale = /^\/en(?:\/|$)/.test(pathname) ? 'en' : 'vi';
  const t = useCallback((text: string) => (locale === 'vi' ? vi : en)[text] ?? text, [locale]);
  const path = useCallback((value: string) => `/${locale}${value === '/' ? '' : value}`, [locale]);
  return { locale, t, path };
}
