import { Interface } from 'readline';

export interface ButtonProps {
  type?: 'reset' | 'button' | 'submit';
  label: string;
  onClick: () => void;
}

export interface CardProps {
  title: string;
  content: string;
}
