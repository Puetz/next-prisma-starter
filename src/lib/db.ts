import { prisma } from "./prismaClient";

interface Message {
  id: number;
  createdAt: Date;
  lobby: string;
  name: string;
  message: string;
}

export async function getMessageLog(): Promise<Message[] | undefined> {
  try {
    const messages = await prisma.chatLog.findMany();
    if (messages) return messages;
  } catch (error) {
    console.log("Error retrieving messages");
  }
}
