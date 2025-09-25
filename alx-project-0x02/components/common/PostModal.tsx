import { PostModalProps } from '@/interfaces';
import React, { useState } from 'react';

export default function PostModal({
  isOpen,
  onClose,
  onSubmit,
}: PostModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div>
      <div>
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit} className=''>
          <input
            type='text'
            placeholder='Enter Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=''
            required
          />
          <textarea
            placeholder=''
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className=''
            required
          />

          <div>
            <button type='button' onClick={onClose} className=''>
              Cancel
            </button>
            <button className='' type='submit'>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
