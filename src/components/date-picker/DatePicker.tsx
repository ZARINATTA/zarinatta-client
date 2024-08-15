import { Flex } from 'antd';
import dayjs from 'dayjs';
import Text from '../design-system/Text';
import Margin from '../design-system/Margin';
import { useMemo, useState } from 'react';
import { color } from '../design-system/Color';

const DaysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

type Range<N extends number, Result extends Array<unknown> = []> = Result['length'] extends N
  ? Result[number] | N
  : Range<N, [...Result, Result['length']]>;

type Date = Range<31> extends infer R ? Exclude<R, 0> : never;
type Month = Range<12> extends infer R ? Exclude<R, 0> : never;

interface DatePickerProps {
  year: number;
  startMonth?: Month;
  startDate?: Date;
  endMonth?: Month;
  endDate?: Date;
  setSelectedDate: (selectedDate: number) => void;
  selectedDate: number;
}

export default function DatePicker({
  year = dayjs().year(),
  endMonth,
  startMonth = dayjs().month() as Month,
  startDate = dayjs().date() as Date,
  endDate,
  setSelectedDate,
  selectedDate,
}: DatePickerProps) {
  const endDateOfMonth = useMemo(
    () => dayjs(`${year}-${startMonth}-${startDate}`).endOf('month').date(),
    [year, startMonth, startDate]
  );
  const startDayOfMonth = useMemo(() => dayjs(`${year}-${startMonth}-1`).day(), []);
  const datesOfMonth = useMemo(
    () => Array.from({ length: endDateOfMonth }).map((_, i) => i + 1),
    [endDateOfMonth]
  );

  return (
    <Flex vertical>
      <Flex vertical>
        <Text type="bold-24">
          {year}년 {startMonth}월
        </Text>
        <Margin vertical size={24} />
        <Flex vertical>
          <Flex>
            {DaysOfWeek.map((date) => (
              <DateCell disabled blue={date === '일' || date === '토'} key={date}>
                {date}
              </DateCell>
            ))}
          </Flex>
          {[...Array.from({ length: startDayOfMonth }).map(() => 0), ...datesOfMonth]
            .reduce((prev, cur, i) => {
              const index = Math.floor(i / 7);
              if (Array.isArray(prev[index])) prev[index].push(cur);
              else prev[index] = [cur];
              return prev;
            }, [] as number[][])
            .map((row, i) => (
              <Flex key={`date-picker-row-${i}`}>
                {row.map((col, j) => {
                  return (
                    <DateCell
                      key={`date-picker-row-${i}-col-${j}`}
                      onClick={() => col !== 0 && setSelectedDate(col)}
                      selected={selectedDate === col}
                      empty={col === 0}
                      disabled={col === 0}
                    >
                      {col}
                    </DateCell>
                  );
                })}
              </Flex>
            ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

const DateCell = ({
  children,
  gray,
  blue,
  selected,
  empty,
  disabled,
  onClick,
}: {
  children?: string | number;
  blue?: boolean;
  gray?: boolean;
  selected?: boolean;
  empty?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        width: 60,
        height: 60,
        borderRadius: selected ? 60 : 0,
        backgroundColor: selected ? color['primary500'] : 'white',
        cursor: disabled ? 'initial' : 'pointer',
      }}
      onMouseEnter={() => disabled || setHovered(true)}
      onMouseLeave={() => disabled || setHovered(false)}
      onClick={onClick}
    >
      <Text
        type="medium-20"
        colorType={
          blue
            ? 'primary500'
            : gray
              ? 'gray300'
              : selected
                ? 'white'
                : hovered
                  ? 'primary500'
                  : 'gray950'
        }
      >
        {empty ? '' : children}
      </Text>
    </Flex>
  );
};
