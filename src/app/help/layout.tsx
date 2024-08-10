import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고객센터',
  description: '자리나따 고객센터 페이지입니다.',
};

export default function HelpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
