import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="h-[80px] bg-blue-700/80 flex flex-col justify-center px-4 text-white">
        <header className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
          <div>
            <Image width={60} height={60} className="rounded-2xl object-cover" src='/logo.png' alt="" />
          </div>
          <div>
            <p className="text-lg font-semibold">Zoom Meeting Lists</p>
          </div>
          <div></div>
        </header>
      </div>
      {/*  */}
      <div className="max-w-[1200px] mx-auto mt-10">
        <h1 className="font-semibold text-lg">Meeting Lists</h1>
        {/* fetch api and create ui */}
        {/*  */}
      </div>
    </main>
  );
}
