import type { Meta, StoryObj } from "@storybook/react";
import { Mail } from "lucide-react";
import { Field } from "../Field";
import { Input } from "./Input";
import { Select } from "../Select";

const meta: Meta = { title: "Components/Input" };
export default meta;
type Story = StoryObj;

export const FormFields: Story = {
  render: () => (
    <div style={{ padding: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px 28px", maxWidth: 720 }}>
      <Field label="Email" required help="We'll never share it.">
        <Input type="email" placeholder="you@studio.com" leadingIcon={<Mail />} />
      </Field>
      <Field label="Project name" error="Names can't end in punctuation.">
        <Input defaultValue="Hearth." invalid />
      </Field>
      <Field label="Domain" help="✓ Available · $14/yr">
        <Input defaultValue="hearth.studio" success />
      </Field>
      <Field label="Plan">
        <Select defaultValue="studio">
          <option value="starter">Starter — $390 / page</option>
          <option value="studio">Studio — $890 / page</option>
          <option value="custom">Custom — let's talk</option>
        </Select>
      </Field>
    </div>
  ),
};
