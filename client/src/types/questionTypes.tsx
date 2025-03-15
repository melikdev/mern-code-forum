import type { Icon } from 'lucide-react';

export type questionTypes = {
  _id: string;
  slug: string;
  question: string;
  code: string;
  tag: string;
  likes: number;
  comments: number;
  date: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
  user: {
    username: string;
    userImageUrl: string | typeof Icon;
  };
};
