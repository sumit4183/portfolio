import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { projects } from '@/constants';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter(path => path);

  // Function to get the project name based on the read_more value
  const getProjectName = (read_more) => {
    const project = projects.find(proj => proj.read_more === read_more);
    return project ? project.name : read_more;
  };

  return (
    <nav aria-label="breadcrumb" className="my-6">
      <ol className="breadcrumb flex space-x-2 breadcrumbText">
        <li>
          <Link href="/" className="hover:text-white">
            Home
          </Link>
        </li>
        {pathArray.map((path, index) => {
          const href = '/' + pathArray.slice(0, index + 1).join('/');
          const isLast = index === pathArray.length - 1;
          const title = isLast ? getProjectName(path) : path.replace(/-/g, ' '); // replace hyphens with spaces

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">{'>'}</span>
              {isLast ? (
                <span className="text-white capitalize">{title}</span>
              ) : (
                <Link href={href} className="hover:text-white capitalize">
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
