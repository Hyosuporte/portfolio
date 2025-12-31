import type { PropsWithChildren } from 'react';

type PropsButton = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'default';
  size?: 'small' | 'medium' | 'large';
};

const Button = ({
  color = 'default',
  size = 'small',
  children,
}: PropsWithChildren<PropsButton>) => {
  let padding;
  let style;

  switch (size) {
    case 'small':
      padding = 'px-2 py-1.5';
      break;
    case 'medium':
      padding = 'px-7 py-1.5';
      break;
    case 'large':
      break;
  }

  switch (color) {
    case 'primary':
      style = 'text-foreground hover:text-primary';
      break;
    case 'secondary':
      style =
        'bg-background  border-primary text-primary hover:bg-primary hover:text-foreground border-2 ';
      break;
    case 'default':
      style = 'bg-primary hover:bg-accent';
      break;
  }

  return (
    <button className={`rounded-md transition-colors ${padding} ${style}`}>
      {children}
    </button>
  );
};

export default Button;
