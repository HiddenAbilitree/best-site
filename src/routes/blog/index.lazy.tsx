import { createLazyFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
export const Route = createLazyFileRoute("/blog/")({
  component: Blog,
});

function Blog() {
  return (
    <>
      <Header />
    </>
  );
}
