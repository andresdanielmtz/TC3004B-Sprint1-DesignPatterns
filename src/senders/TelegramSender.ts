import { MessageSender } from "./MessageSenders";

export class TelegramSender implements MessageSender {
    sendMessage(content: string): void {
        console.log(`Enviando mensaje por Telegram: ${content}`);
    }
}