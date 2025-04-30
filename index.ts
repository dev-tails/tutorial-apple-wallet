import { serve } from "bun";

serve({
  port: 8000,
  fetch(request) {
    return new Response("Hello from Bun!");
  },
});
