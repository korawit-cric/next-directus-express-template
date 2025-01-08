import type { Meta, StoryObj } from "@storybook/react";
import { FormButton } from "@repo/cric-form/components/form/form-button.tsx";
import {
  FormWrapper,
  useCustomForm,
} from "@repo/cric-form/components/form/form-wrapper.jsx";
import { z } from "zod";
import { FormInput } from "@repo/cric-form/components/form/form-input.jsx";

const meta: Meta<typeof FormWrapper> = {
  component: FormWrapper,
};

export default meta;

type Story = StoryObj<typeof FormWrapper>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    const formSchema = z.object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    });

    type FormType = z.infer<typeof formSchema>;

    const form = useCustomForm<FormType>({
      defaultValues: {
        email: "demo@devvianto605.info",
        password: "12345678",
      },
      schema: formSchema,
    });
    return (
      <FormWrapper<FormType>
        formInstance={form}
        onSubmit={(formValue) => {
          alert(JSON.stringify(formValue));
        }}
      >
        <FormInput
          label="Email"
          name="email"
          placeholder={"m@example.com"}
          type="email"
        />
        <FormInput label="Password" name="password" type="password" />
        <FormButton className="w-full" type="submit">
          Login
        </FormButton>
      </FormWrapper>
    );
  },
  name: "FormWrapper",
};
