import { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./index";
import s from "./SearchInput.module.css";
import { SearchInputProps } from "./types";

const meta: Meta<typeof SearchInput> = {
  title: "Components/SearchInput",
  component: SearchInput,
  argTypes: {
    value: {
      control: "text",
    },
    onChange: {
      action: "changed",
    },
    className: {
      control: false,
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<SearchInputProps>;

export const Primary: Story = {
  args: {
    value: "Initial value",
  },
};

export const ExtraClassName: Story = {
  args: {
    value: "Click Me",
    className: s.searchInputExample,
  },
};
