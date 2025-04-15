import { createFileRoute } from "@tanstack/react-router";

function About() {
  return <div className="">Hello from About!</div>;
}

export const Route = createFileRoute("/about")({
  component: About,
});
