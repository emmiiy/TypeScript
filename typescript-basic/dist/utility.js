"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edtingTask = {
    title: "TypeScriptの基礎を学ぼうの学習",
};
const summaryTask = {
    id: 1,
    title: "TODOアプリの開発",
};
const completedTask = {
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
