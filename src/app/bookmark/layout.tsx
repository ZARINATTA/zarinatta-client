import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '즐겨찾기',
  description: '자리나따 즐겨찾기 페이지입니다.',
};

export default function BookmarkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
