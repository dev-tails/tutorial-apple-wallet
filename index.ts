import { serve } from "bun";
import homepage from "./index.html";

serve({
  port: 8000,
  routes: {
    "/": () => homepage,
    "/ticket.pkpass": () => {
      const ticket = Bun.file("./examples/ticket/pass.json");
      return new Response(ticket, {
        headers: {
          "Content-Type": "application/vnd.apple.pkpass",
        },
      });
    },
  },
});
