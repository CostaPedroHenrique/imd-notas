import { Control } from "react-hook-form";

interface INumberInputProps {
  control: Control<any, object>
  name: string;
  label: string;
  placeholder?: string | undefined;
}

export type { INumberInputProps };