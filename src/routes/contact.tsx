import { createFileRoute } from "@tanstack/react-router";

function RouteComponent() {
  return <div>Hello from Contact!</div>;
}

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});
