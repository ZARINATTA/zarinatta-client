import Link from 'next/link';
import { Flex } from 'antd';

export default function Home() {
  return (
    <main>
      <Flex vertical gap={10}>
        <Link href={'/search'}>열차조회 페이지로 이동</Link>
        <Link href={'/bookmark'}>즐겨찾기 페이지로 이동</Link>
        <Link href={'/help'}>고객센터 페이지로 이동</Link>
      </Flex>
    </main>
  );
}
