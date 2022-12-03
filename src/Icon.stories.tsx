import "./style.css";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon } from "./Icon";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    status: {
      control: "select",
      options: ["success", "fail", "unknown"],
      defaultValue: "success",
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <div>
      <svg width="50" height="50">
        <g transform="translate(25,25)">
          <g className="icon">
            <circle cx="0" cy="0" r="12" className={`icon-${args.status}`} />
            <Icon {...args} />
          </g>
        </g>
      </svg>
    </div>
  );
};

export const Primary = Template.bind({});
