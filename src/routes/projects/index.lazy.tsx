import { createLazyFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";

export const Route = createLazyFileRoute("/projects/")({
  component: Projects,
});

function Projects() {
  return (
    <>
      <Header />
    </>
  );
}
