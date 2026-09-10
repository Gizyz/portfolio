import BtmBar from "~/components/bar/BtmBar";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Portfolio A'la Karlos" },
    { name: "description", content: "Portfolio!" },
  ];
}

export default function Home() {
  const windowBuffer = [{}]

  return (
    <main className="bg-gray-200 w-full h-full">
      <img src='\xpBackground.jpg'></img>
      <div>
        <h1 className="">Karl-Gustav Thommessen</h1>
        <p>Computer Engineering student and developer based in Bergen, Norway. I build web experiences with React and TypeScript and enjoy solving problems, learning new technologies, and turning ideas into working products.</p>
      </div>
      <BtmBar />
    </main>

  )
}
