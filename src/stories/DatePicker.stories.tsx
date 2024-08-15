import type { Meta } from '@storybook/react';

import DatePicker from '@/components/date-picker/DatePicker';
import { useState } from 'react';

const meta = {
  title: 'Example/DatePicker',
  component: DatePicker,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

export const DatePickerStory = () => {
  const [selectedDate, setSelectedDate] = useState<number>(0);

  return (
    <DatePicker
      year={2024}
      startMonth={2}
      setSelectedDate={setSelectedDate}
      selectedDate={selectedDate}
    />
  );
};
