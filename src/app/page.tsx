import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getMessageLog } from "@/lib/db";

export default async function Home() {
  const messages = await getMessageLog();
  if (!messages) return <div>No messages</div>;
  return (
    <div className="w-fit p-10">
      <Table>
        <TableCaption>MY messages</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Created At</TableHead>
            <TableHead>Lobby</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{message.createdAt.toDateString()}</TableCell>
              <TableCell>{message.lobby}</TableCell>
              <TableCell>{message.name}</TableCell>
              <TableCell className="max-w-[600px]">{message.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
