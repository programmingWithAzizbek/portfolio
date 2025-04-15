import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";

function RootComponent() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <>
      <header className="bg-backgroundAll fixed z-50 w-full text-white py-2 px-3.5 border-b border-b-line">
        <Header toggleAside={() => setIsAsideOpen(!isAsideOpen)} />
      </header>
      <div className="flex">
        {isAsideOpen && (
          <aside
            className={`bg-backgroundAll w-72 -z-10 border-r border-r-line transition-transform duration-300 ${
              isAsideOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Aside />
          </aside>
        )}
        <main className="mt-12">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
