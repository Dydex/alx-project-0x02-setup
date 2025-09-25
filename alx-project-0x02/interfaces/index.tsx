export interface ButtonProps {
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  size?: 'small' | 'medium' | 'large';
  title: string;
  onClick?: () => void;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface Post {
  title: string;
  content: string;
}
