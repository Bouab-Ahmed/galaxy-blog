'use client';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';

function ClientSideRoute({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return (
    <Link href={route}>
      <>
        {children}
        <Button
          size='sm'
          className='hidden lg:inline-block bg-gradient-to-br from-[#F7AB0A] via-yellow-400 to-[#E7AA56] text-black hover:shadow-amber-300'>
          <span>Read More</span>
        </Button>
      </>
    </Link>
  );
}

export default ClientSideRoute;
