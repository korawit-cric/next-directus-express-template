'use client';

import { CustomBreadcrumb } from '@/components/custom/custom-breadcrumb';
import { getTitleFromPath } from '@/hooks/utils/get-title';
import { usePathname } from '@/libs/next-intl';

type ContentHeaderProps = {
  children?: React.ReactNode; // Accept any JSX as children
}

export const ContentHeader = ({ children }: ContentHeaderProps) => {
  const pathname = usePathname();

  return (
    <div className='flex flex-col gap-2'>
      <CustomBreadcrumb />
      <div className='flex flex-1 flex-col gap-3 sm:flex-row justify-between'>
        <p className='text-2xl font-extrabold tracking-tight'>
          {getTitleFromPath(pathname)}
        </p>
        {children}
      </div>
    </div>
  );
};
