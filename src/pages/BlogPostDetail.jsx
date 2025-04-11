import React from 'react';
import styles from './BlogPostDetail.module.scss';
import { useParams } from 'react-router-dom';
import { posts } from '../assets/dummy-data';

const BlogPostDetail = () => {
  const { postId } = useParams();
  const foundPost = posts.find((p) => p.id === +postId);

  const post = {
    ...foundPost,
    comments: [
      { id: 1, author: '김춘식', content: '좋은 글 이네요' },
      { id: 2, author: '홍길동', content: '잘 배웠습니다~~' },
    ],
  };

  return (
    <article className={styles.post}>
      <h1>{post.title}</h1>
      <div className={styles.meta}>
        <span>{post.date}</span>
        <span>{post.category}</span>
      </div>
      <div className={styles.content}>{post.excerpt}</div>
      <div className={styles.comments}>
        <h2>댓글</h2>
        {post.comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <strong>{comment.author}</strong>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default BlogPostDetail;
