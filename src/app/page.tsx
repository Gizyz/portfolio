import BtmBar from "@/components/bar/BtmBar";
import Image from "next/image";

export default function Home() {

    return (
        <main className="bg-gray-200 w-full h-full">
            <Image
                src='/bg.jpg'
                alt=""
                width={1920}
                height={1080}
                priority
            />
            <div>
                <h1 className="">Karl-Gustav Thommessen</h1>
                <p>Computer Engineering student and developer based in Bergen, Norway. I build web experiences with React and TypeScript and enjoy solving problems, learning new technologies, and turning ideas into working products.</p>
            </div>
            <BtmBar />
        </main>
    )
}