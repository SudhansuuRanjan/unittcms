import { getTranslations } from 'next-intl/server';
import { LocaleCodeType } from '@/types/locale';

export async function generateMetadata({ params: { locale } }: { params: { locale: LocaleCodeType } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });
  return {
    title: `${t('project_list')} | UnitTCMS`,
    robots: { index: false, follow: false },
  };
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
