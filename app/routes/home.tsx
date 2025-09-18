import type { Route } from "./+types/home";
import { Index } from "../Index/index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Portfolio A'la Karlos" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Index />;
}
