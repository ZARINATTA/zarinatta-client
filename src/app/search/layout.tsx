import { Flex } from 'antd';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '열차조회',
  description: '자리나따 열차조회 페이지입니다.',
};

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex vertical align="center">
      <Image src="/banner.svg" alt="자리나따 배너 이미지" width={1280} height={387} />
      <div>{children}</div>
    </Flex>
  );
}
