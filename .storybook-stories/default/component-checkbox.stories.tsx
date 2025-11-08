import { Checkbox as CheckboxComponent, CheckboxProps } from '@local/components/checkbox/export';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useEffect, useState } from 'react';

const meta: Meta<typeof CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'Component/Checkbox',
};

export default meta;
type Story = StoryObj<typeof CheckboxComponent>;

const CheckboxWrapper: FC<CheckboxProps> = (props) => {
  const [value, setValue] = useState<boolean>(props.checked ?? false);

  useEffect(() => {
    setValue(props.checked ?? false);
  }, [props.checked]);

  return <CheckboxComponent {...props} checked={value} onChange={(checked) => setValue(checked)} />;
};

export const Checkbox: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    genre: 'gray',
    view: {
      true: { type: 'checkbox', name: 'Square-true' },
      false: { type: 'checkbox', name: 'Square-false' },
    },
    checked: true,
    children: 'First',
    size: 'medium',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isHiddenBorder: false,
  },
};
