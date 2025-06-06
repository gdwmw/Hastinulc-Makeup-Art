import { FC, ReactElement } from "react";

interface I {
  errorMessage: string;
}

export const ErrorMessage: FC<I> = (props): ReactElement => (
  <span className="ml-1 block text-xs font-semibold text-red-600" data-testid="error-message">
    {props.errorMessage}
  </span>
);
