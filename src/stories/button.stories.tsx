import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/ui/button";

export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Adicionar",
  },
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
    },
    size: {
      control: { type: "inline-radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    animation: {
      control: { type: "inline-radio" },
    },
    isLoading: {
      control: { type: "inline-radio" },
    },
  },
} as Meta<typeof Button>;

export const Custom: StoryObj = {};
type Story = StoryObj<typeof Button>;

const commonArgTypes = {
  variant: {
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
    variant: "default",
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
    isLoading: "none",
  },
  argTypes: {
    ...commonArgTypes,
  },
};

export const Template: Story = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    ...commonArgTypes,
  },
  render: () => (
    <div className="flex flex-1 justify-around">
      <Button variant="outline" animation="bounce">
        Bounce
      </Button>
      <Button variant="default" animation="pulse">
        Pulse
      </Button>
    </div>
  ),
};
