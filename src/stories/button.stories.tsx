import { Meta, StoryFn, StoryObj } from "@storybook/react";

import { Button } from "../components/ui/button";

export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Adicionar",
  },
  argTypes: {
    colors: {
      control: { type: "inline-radio" },
    },
    variant: {
      control: { type: "inline-radio" },
    },
    size: {
      control: { type: "inline-radio" },
    },
    radius: {
      control: { type: "inline-radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    animation: {
      control: { type: "inline-radio" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
    loaderPosition: {
      control: { type: "inline-radio" },
    },
  },
} as Meta<typeof Button>;

export const Custom: StoryObj = {};
type Story = StoryObj<typeof Button>;

const commonArgTypes = {
  colors: {
    table: {
      disable: true,
    },
  },
  variant: {
    table: {
      disable: true,
    },
  },
  radius: {
    table: {
      disable: true,
    },
  },
  size: {
    table: {
      disable: true,
    },
  },
  disabled: {
    table: {
      disable: true,
    },
  },
  animation: {
    table: {
      disable: true,
    },
  },
  isLoading: {
    table: {
      disable: true,
    },
  },
  loaderPosition: {
    table: {
      disable: true,
    },
  },
};

export const Default: Story = {
  args: {
    children: "Default",
  },
  argTypes: {
    ...commonArgTypes,
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
  argTypes: {
    ...commonArgTypes,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "solid",
    disabled: true,
  },
  argTypes: {
    ...commonArgTypes,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    variant: "outline",
    disabled: true,
    isLoading: true,
    loaderPosition: "start",
  },
  argTypes: {
    ...commonArgTypes,
  },
};

const template: StoryFn = () => (
  <div className="flex flex-1 justify-around">
    <Button animation="bounce">Bounce</Button>
    <Button variant="outline" animation="pulse">
      Pulse
    </Button>
  </div>
);

export const Animations: Story = template.bind({});

Animations.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  ...commonArgTypes,
};

Animations.parameters = {
  docs: {
    source: {
      code: ` <Button animation='bounce'>Bounce</Button>\n
<Button variant='outline' animation='pulse'>Pulse</Button>`,
    },
  },
};
