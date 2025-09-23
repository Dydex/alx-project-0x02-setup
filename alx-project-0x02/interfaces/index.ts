export interface ButtonProps {
  type?: 'reset' | 'button' | 'submit';
  label: string;
  onClick: () => void;
}
