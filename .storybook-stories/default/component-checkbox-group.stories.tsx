import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useState } from 'react';
import 'styled-components';

import {
  CheckboxGroup as CheckboxGroupComponent,
  CheckboxGroupProps,
  CheckboxGroupValueProps,
} from '@local/components/checkbox-group/export';

const meta: Meta<typeof CheckboxGroupComponent> = {
  component: CheckboxGroupComponent,
  title: 'Component/CheckboxGroup',
};

export default meta;
type Story = StoryObj<typeof CheckboxGroupComponent>;

const defaultArgs: Partial<CheckboxGroupProps<CheckboxGroupValueProps>> = {
  checkboxGenre: 'gray',
  checkBoxView: {
    true: { type: 'checkbox', name: 'Square-true' },
    false: { type: 'checkbox', name: 'Square-false' },
  },
  checkboxIsHiddenBorder: false,
  multiple: true,
  size: 'medium',
  labelField: 'label',
  valueField: 'value',
  sx: {
    default: {
      width: '300px',
    },
  },
  checkboxSX: {
    default: {
      width: '100%',
    },
  },
};

const CheckboxGroupWrapper: FC<CheckboxGroupProps<CheckboxGroupValueProps>> = (props) => {
  const [value, setValue] = useState<CheckboxGroupValueProps[]>([]);
  const [options] = useState<CheckboxGroupValueProps[]>([
    { value: 0, label: 'First' },
    { value: 1, label: 'Second' },
  ]);

  return <CheckboxGroupComponent {...props} value={value} options={options} onChange={(value) => setValue(value)} />;
};

export const CheckboxGroup: Story = {
  render: (args) => <CheckboxGroupWrapper {...args} />,
  args: {
    ...defaultArgs,
  },
};
