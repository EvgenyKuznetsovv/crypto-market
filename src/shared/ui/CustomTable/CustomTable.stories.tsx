import { Meta, StoryObj } from "@storybook/react";
import ThemeProvider from "../../../app/providers/theme/MantineThemeProvider";
import { CustomTable } from "./index";

const meta: Meta<typeof CustomTable> = {
  title: "Components/CustomTable",
  component: CustomTable,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    headerTitles: {
      control: false,
    },
    tableData: {
      control: false,
    },
    isLoading: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomTable>;

export const Primary: Story = {
  args: {
    headerTitles: [{ title: "Name" }, { title: "Age" }, { title: "City" }],
    tableData: [
      <tr key="1">
        <td>Max</td>
        <td>30</td>
        <td>Minsk</td>
      </tr>,
      <tr key="2">
        <td>Eugene</td>
        <td>25</td>
        <td>Paris</td>
      </tr>,
    ],
  },
  decorators: [
    (Story) => {
      return <ThemeProvider>{Story()}</ThemeProvider>;
    },
  ],
};
