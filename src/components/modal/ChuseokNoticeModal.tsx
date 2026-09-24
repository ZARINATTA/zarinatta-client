'use client';

import { Flex } from 'antd';
import { useModalStore } from '@/hooks/use-modal-store';
import Text from '@/components/design-system/Text';
import { color } from '@/components/design-system/Color';

export default function ChuseokNoticeModal() {
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <Flex
      vertical
      gap={20}
      style={{
        width: 600,
        borderRadius: 20,
        backgroundColor: 'white',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 999,
        padding: 24,
        boxSizing: 'border-box',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <Text type="semiBold-24">[안내] 추석 연휴 기간 알림 서비스 일부 제한</Text>
      <Text style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>
        {`안녕하세요, 자리나따입니다.

현재 열차 정보 제공처의 데이터 송신이 원활하지 않아, 추석 연휴 기간(9/23 ~ 9/27) 열차 데이터를 제한적으로 수신하고 있습니다.
이에 따라 해당 기간에는 수신된 열차에 한해서만 알림이 발송되며, 일부 열차는 알림이 제공되지 않을 수 있습니다.

9월 28일(월) 이후 출발 열차는 정상적으로 알림이 제공됩니다.

귀성길로 가장 바쁘신 시기에 불편을 드려 진심으로 죄송합니다. 빠르게 정상화될 수 있도록 최선을 다하겠습니다.`}
      </Text>
      <Flex
        justify="center"
        align="center"
        style={{
          width: '100%',
          height: 48,
          borderRadius: 8,
          backgroundColor: color.primary500,
          cursor: 'pointer',
        }}
        onClick={closeModal}
      >
        <Text type="semiBold-16" colorType="white">
          확인
        </Text>
      </Flex>
    </Flex>
  );
}
