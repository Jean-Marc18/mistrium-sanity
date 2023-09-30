"use client";

import { Button } from "@/components/ui/button";

import Clients from "@/sections/Clients";
import Collection from "@/components/Collection";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="flex-center flex-col paddings mx-auto w-full max-w-screen-2xl gap-2">
      <section className="nav-padding w-full">
        <div className="w-full flex flex-col gap-4">
          <h1 className="sm:heading1 heading2 mb-6 text-start text-[#292019]">
            Modern Furniture For <br /> Modern Living Style
          </h1>
          <div className="flex flex-col items-center lg:flex-row">
            <div className="flex lg:w-[32%] w-full flex-col gap-3">
              <p className="text-[#72696A] font-normal leading-7">
                In unfeeling existence objection immediate repulsive on he in.
                Imprudence comparison uncommonly me he difficulty diminution
                resolution. Likewise proposal differed scarcely dwelling as on
                raillery.
              </p>
              <p className="text-[#72696A] font-normal leading-7">
                September few dependent extremity own continued and ten
                prevailed attending. Early to weeks we could. Do commanded an
                shameless we disposing do. Indulgence ten remarkably nor are
                impression out. Power is lived means oh every in we quiet.
              </p>
              <div className="flex w-full items-center gap-4 mt-7">
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-none py-7"
                >
                  Request a Quote
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-none py-7"
                >
                  Watch Video
                </Button>
              </div>
            </div>

            <div className="absolute right-0 lg:flex justify-end items-end w-[75%] hidden z">
              <Image
                src="/assets/images/fauteuil-lg_.jpg"
                alt="fauteuil banner"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 w-full mt-20">
        <Clients />
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center my-[2rem] w-full h-full">
        <Collection />
      </section>
    </main>
  );
};

export default HomePage;
