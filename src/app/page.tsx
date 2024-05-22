import { PrismaClient } from "@prisma/client";
import TicketsTable from "./TicketsTable";

const prisma = new PrismaClient();

export type Ticket = {
  id: string;
  title: string;
  status: "Backlog" | "Todo" | "Development" | "Review" | "Done";
  priority: "High" | "Medium" | "Low";
  tag: "Bug" | "Feature" | "Documentation";
};

export default async function Home() {
  const data: Ticket[] = (await prisma.ticket.findMany()) as any;

  return (
    <main className="p-5">
      <TicketsTable data={data} />
    </main>
  );
}
