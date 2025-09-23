export interface ButtonProps {
  type?: 'reset' | 'button' | 'submit';
  label: string;
  onClick: () => void;
}

export type CardProps = {
  title: string;
  content: string;
};
