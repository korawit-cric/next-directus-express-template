import Home  from '@/assets/icons/home.svg';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from '../shadcn/ui/breadcrumb';

export const CustomBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Home />
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <p className='text-watermark'> / </p>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <p className='text-watermark'> Current path</p>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
