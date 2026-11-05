"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notify = (appNotification) => {
    // appNotification.sendEmail(); // エラー
    if ("sendEmail" in appNotification) {
        appNotification.sendEmail();
    }
    else {
        appNotification.sendPush();
    }
};
const emailNotification = {
    type: "email",
    emailAddress: "taro.samurai@example.com",
    sendEmail: () => {
        console.log("メール通知を送信しました。");
    },
};
const pushNotification = {
    type: "push",
    deviceToken: "abc123xyz",
    sendPush: () => {
        console.log("プッシュ通知を送信しました。");
    },
};
notify(emailNotification);
notify(pushNotification);
