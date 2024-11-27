import { NextPage } from 'next';

interface LayoutProps {
  children: React.ReactNode;
  searchParams?: { [key: string]: string | undefined };
}

const RootLayout: NextPage<LayoutProps> = ({ children, searchParams }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
