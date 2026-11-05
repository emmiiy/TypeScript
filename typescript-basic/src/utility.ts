type Task = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
};

// 編集中のタスクを表す
type EditingTask = Partial<Task>;

// 一覧用のタスクを表す
type SummaryTask = Pick<Task, "id" | "title">;

//完了済みのタスクを表す
type CompletedTask = Readonly<Task>;

const edtingTask: EditingTask = {
  title: "TypeScriptの基礎を学ぼうの学習",
};

const summaryTask: SummaryTask = {
  id: 1,
  title: "TODOアプリの開発",
};

const completedTask: CompletedTask = {
  id: 2,
  title: "JavaScriptの基礎を学ぼうの学習",
  completed: true,
};

edtingTask.completed = false;

console.log("---- 編集中のタスク ----");
console.log(edtingTask);
console.log("---- 一覧表示用のタスク ----");
console.log(summaryTask);
console.log("---- 完了済みのタスク ----");
console.log(completedTask);
