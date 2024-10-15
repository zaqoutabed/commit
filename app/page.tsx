import Image from "next/image";
import bgFull from "./public/images/bgFull.png";

export default function Home() {
  return (
    <div className="grid grid-rows-1 items-center justify-items-center min-h-screen gap-8 p-10 font-[family-name:var(--font-geist-sans)] overflow-hidden bg-black">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start overflow-hidden">
        <Image
          className="dark:invert"
          src={bgFull}
          alt="Commit Logo"
          priority
        />
        <p className="text-white m-auto text-[3rem]">Coming Soon....</p>
      </main>
    </div>
  );
}
