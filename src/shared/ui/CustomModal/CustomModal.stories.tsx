import { Meta, StoryObj } from "@storybook/react";
import ThemeProvider from "../../../app/providers/theme/MantineThemeProvider";
import { CustomModal } from "./index";

import s from "./CustomModal.module.css";

const meta: Meta<typeof CustomModal> = {
  title: "Components/CustomModal",
  component: CustomModal,
  argTypes: {
    opened: {
      control: {
        type: "boolean",
      },
    },
    onClose: {
      action: "closed",
    },
    children: {
        control: false
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomModal>;

export const Primary: Story = {
  args: {
    title: "Title",
    children: <div className={s.content}>The content of the modal window</div>,
    opened: true,
  },
  decorators: [
    (Story) => {
      return <ThemeProvider>{Story()}</ThemeProvider>;
    },
  ],
};
