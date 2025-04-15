import { createFileRoute } from "@tanstack/react-router";

function Index() {
  return (
    <div className="text-black">
      <h3>Welcome Home!</h3>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});
