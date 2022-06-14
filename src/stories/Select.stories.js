import Select from "./Select.vue";

export default {
  title: "Example/Selector",
  component: Select,
  argTypes: {
    label: {
      defaultValue: "Languages",
      control: { type: "text" }
    },
    hint: {
      defaultValue: "Select application language",
      control: { type: "text" }
    },
    size: {
      defaultValue: "small",
      options: ["small", "medium", "large"],
      control: { type: "select" }
    },
    options: {
      defaultValue: [
        {
          id: 0,
          name: "French - Francais",
          value: "fr"
        },
        {
          id: 1,
          name: "English - English",
          value: "en"
        },
        {
          id: 2,
          name: "Spanish - Espanol",
          value: "es"
        }
      ]
    }
  }
};

const Template = (args) => ({
  components: { Select },
  setup() {
    return { args };
  },
  template:
    '<Select :options="options" :label="label" :size="size" :hint="hint" v-model="selected" />'
});

export const Primary = Template.bind({});
