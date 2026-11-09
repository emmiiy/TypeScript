type Post = {
  id: number; // id
  title: string; // タイトル
  body: string; // 本文
  published: boolean; // 公開済みかどうか
};

// 編集中の投稿データを表す型
type Editing = Partial<Post>;

// 一覧表示用の投稿データを表す型
type ViewData = Pick<Post, "id" | "title">;

// 公開済みの投稿データを表す型
type Published = Readonly<Post>;
