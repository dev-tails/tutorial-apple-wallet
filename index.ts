import { serve } from "bun";
import homepage from "./index.html";

serve({
  port: 8000,
  routes: {
    "/": homepage,
    "/tickets.pkpasses": () => {
      const tickets = Bun.file("./tickets.pkpasses");
      return new Response(tickets, {
        headers: {
          "Content-Type": "application/vnd.apple.pkpasses",
          "Content-Disposition": "attachment; filename=\"tickets.pkpasses\"",
        },
      });
    },
    "/ticket.pkpass": () => {
      const ticket = Bun.file("./ticket.pkpass");
      return new Response(ticket, {
        headers: {
          "Content-Type": "application/vnd.apple.pkpass",
          "Content-Disposition": "attachment; filename=\"ticket.pkpass\"",
        },
      });
    },
  },
});
