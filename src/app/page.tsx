"use client";

import { Flex } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ChuseokNoticeModal from "@/components/modal/ChuseokNoticeModal";
import { useModalStore } from "@/hooks/use-modal-store";

export default function Home() {
  const router = useRouter();
  const openModal = useModalStore((state) => state.openModal);

  useEffect(() => {
    openModal(<ChuseokNoticeModal />);
  }, [openModal]);

  return (
    <main>
      <Flex vertical align="center">
        <Image
          src={"/landing-page.svg"}
          alt="랜딩 페이지 이미지"
          width={1280}
          height={4462}
          layout="responsive"
          style={{ width: "100vw", height: "auto", cursor: "pointer" }}
          onClick={() =>
            router.push(`/search?departDate=${dayjs().format("YYYYMMDD")}`)
          }
        />
      </Flex>
    </main>
  );
}
