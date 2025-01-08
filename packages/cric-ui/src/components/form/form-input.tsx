import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '../shadcn/ui/form';
import { Input, type InputProps } from '../shadcn/ui/input';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
  name: string;
  placeholder?: string;
  label?: string;
  description?: string;
} & InputProps;

export const FormInput = ({
  name,
  placeholder,
  label,
  description,
  ...rest
}: FormInputProps): JSX.Element => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...rest}
              {...field}
              disabled={isSubmitting || rest.disabled}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
