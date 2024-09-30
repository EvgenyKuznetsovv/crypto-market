import { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./index";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader", 
  component: Loader,        
  argTypes: {
    className: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<{ className?: string }>;

export const Primary: Story = {
  args: {
    className: "default", // Значение класса по умолчанию
  },
};
