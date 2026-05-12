import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex justify-start items-center pt-20 px-8 gap-25">
      <div className="w-1/3 flex flex-col justify-between self-stretch">
        <div className="flex flex-col gap-10">
          <p className="text-4xl">
            Frontend engineer and music producer crafting digital experiences
            that feel alive.
          </p>
          <div className="flex flex-col gap-6 w-75">
            <Button className="gap-4 text-2xl font-medium px-6 py-8 rounded-full">
              Engineering Projects
            </Button>
            <Button
              variant="secondary"
              className="gap-4 text-2xl font-medium px-6 py-8 rounded-full"
            >
              Music Portfolio
            </Button>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 cursor-pointer">
            <ArrowDownIcon className="w-8 h-8" />
            <span className="text-2xl font-medium">Learn more about me</span>
          </div>
        </div>
      </div>
      <div className="w-2/3">
        <Image
          src="/images/hero/devon-hero.png"
          alt="Devon Lewis"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}
