import { User } from '@/entities/User';

export type ArticleBlockType = 'CODE' | 'TEXT' | 'IMAGE';

export interface ArticleBlockBase {
  id: number;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'CODE';
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: 'IMAGE';
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: 'TEXT';
  title?: string;
  paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface Article {
  user: User;
  id: number;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export type ArticleView = 'LIST' | 'GRID';
