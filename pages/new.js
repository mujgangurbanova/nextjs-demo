import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
// import '../styles/example.less'

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/posts', { title, content });
      console.log('New post created:', response.data);

      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
   
      <Image src="/icons/heart.svg" alt="My Icon" width={24} height={24} />
  
      <form className='example__wrapper' onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
