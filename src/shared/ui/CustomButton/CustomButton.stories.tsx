import { Meta, StoryObj } from "@storybook/react";
import s from "./CustomButton.module.css";
import { CustomButton } from "./index";
import { CustomButtonProps } from "./types";

const meta: Meta<typeof CustomButton> = {
  title: "Components/CustomButton",
  component: CustomButton,
  argTypes: {
    className: {
      control: false,
    },
    label: {
      control: "text", 
      
    },
    onClick: {
      action: "clicked", 
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<CustomButtonProps>;

export const Primary: Story = {
  args: {
    label: "Click Me",
  },
};

export const ExtraClassName: Story = {
    args: {
      label: "Click Me",
      className: s.exampleButton,
    },
  };