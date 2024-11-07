import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useActiveState = (): ((path: string,subHref?: string) => boolean) => {
  const [pathname, setPathname] = useState('');
  const routerPathname = usePathname();

  useEffect(() => {
    setPathname(routerPathname);
  }, [routerPathname]);

  return (path: string, subHref?: string) => pathname === path || (subHref ? pathname.includes(subHref) : false);
};
