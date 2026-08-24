'use client';

import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import Text from '@/components/design-system/Text';
import { Flex } from 'antd';

export default function MaintenanceNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Modal
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      onOk={() => setIsOpen(false)}
      okText="확인"
      cancelButtonProps={{ style: { display: 'none' } }}
      centered
      closable={false}
      maskClosable={false}
      title="서비스 일시 중지 안내"
    >
      <Flex vertical gap={12}>
        <Text type="regular-16" colorType="gray950">
          현재 열차 데이터 제공자 서버 유지 보수 작업으로 서비스를 잠시 중지합니다.
        </Text>
        <Text type="regular-16" colorType="gray950">
          추석 1주일 전인 9월 18일에 다시 뵙겠습니다.
        </Text>
      </Flex>
    </Modal>
  );
}
