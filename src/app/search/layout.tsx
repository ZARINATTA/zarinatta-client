import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '열차조회',
  description: '자리나따 열차조회 페이지입니다.',
};

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
