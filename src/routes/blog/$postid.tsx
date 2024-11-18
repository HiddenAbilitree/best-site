import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Header";
export const Route = createFileRoute("/blog/$postid")({
  component: PostComponent,
});

function PostComponent() {
  return (
    <>
      <Header />
      <div>post</div>
      {/* <Article mdx={mdx}></Article> */}
    </>
  );
}
