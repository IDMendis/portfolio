import Image from "next/image";
import Animate from "./Animate";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 px-6">
      <Animate>
        <div className="text-center">
          <div className="relative inline-block">
            <div className="
              absolute inset-0 rounded-full
              bg-gradient-to-r from-blue-500 to-purple-500
              blur-xl opacity-30
            " />
            <Image
              src="/me.jpg"
              alt="Portrait of Dinushi Mendis"
              width={160}
              height={160}
              className="rounded-full relative"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-8  text-neutral-900 dark:text-white">
            Dinushi Mendis
          </h1>

          <p className="mt-3  text-neutral-600 dark:text-neutral-400">
            Software Engineering Undergraduate
          </p>

          <p className="mt-2 text-sm font-medium text-blue-500">
            Actively seeking a Software Engineering Internship
          </p>
        </div>
      </Animate>
    </section>
  );
}
