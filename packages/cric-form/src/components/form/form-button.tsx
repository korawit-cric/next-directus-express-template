import type { ReactNode } from 'react';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@repo/cric-ui/components/shadcn/ui/button.tsx';

type FormButtonProps = {
  children: ReactNode;
  onClick?: () => void; // Optional onClick handler
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const FormButton = ({
  children,
  onClick,
  ...rest
}: FormButtonProps): JSX.Element => {
  const {
    formState: { isValid, isSubmitting },
  } = useFormContext();

  return (
    <Button
      disabled={!isValid || isSubmitting}
      type="button"
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};
