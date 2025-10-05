import { ReactNode, ElementType } from 'react';
import {
  Tooltip,
  TooltipProps,
  Typography,
  TypographyProps,
} from '@mui/material';

export type QSTypographyProps<P extends ElementType> = TypographyProps<
  P,
  {
    children?: ReactNode;
    component?: P;
    tooltipProps?: Omit<TooltipProps, 'children'>;
  }
>;

function A2ZTypography<P extends ElementType = 'span'>({
  sx,
  children,
  component,
  ...props
}: QSTypographyProps<P>) {
  return (
    <Typography
      component={component}
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children ? children : null}
    </Typography>
  );
}

export function A2ZTypographyTooltip<P extends ElementType = 'span'>({
  sx,
  children,
  component,
  tooltipProps,
  ...props
}: QSTypographyProps<P>) {
  return (
    <Tooltip
      placement="top"
      {...tooltipProps}
      title={tooltipProps?.title ? tooltipProps?.title : children}
    >
      <Typography
        component={component}
        sx={{
          ...sx,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        {...props}
      >
        {children ? children : null}
      </Typography>
    </Tooltip>
  );
}

export default A2ZTypography;
