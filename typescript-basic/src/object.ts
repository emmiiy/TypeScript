const user: { readonly name: string; age?: number; email: string } = {
  name: "侍太郎",
  email: "saknakano@example.com",
};

user.age = 30;
console.log(user);
