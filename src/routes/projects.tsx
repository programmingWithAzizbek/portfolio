import { createFileRoute } from "@tanstack/react-router";

function RouteComponent() {
  return <div>Hello from Projects!</div>;
}

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});
