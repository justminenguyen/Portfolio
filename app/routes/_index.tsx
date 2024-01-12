import type { MetaFunction } from "@remix-run/node";
import Logo from "~/components/common/Logo";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <section>
      <Logo animate={true} />
    </section>
  );
}
