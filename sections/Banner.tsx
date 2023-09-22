"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";

const Banner = () => {
  

  return (
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
              September few dependent extremity own continued and ten prevailed
              attending. Early to weeks we could. Do commanded an shameless we
              disposing do. Indulgence ten remarkably nor are impression out.
              Power is lived means oh every in we quiet.
            </p>
            <div className="flex w-full items-center gap-4 mt-7">
              <Button variant="default" size="lg" className="rounded-none py-7">
                Request a Quote
              </Button>

              <Button variant="outline" size="lg" className="rounded-none py-7">
                Watch Video
              </Button>
            </div>
          </div>

          <div className="absolute right-0 lg:flex justify-end items-end w-[75%] hidden z">
            <img
              src="/assets/images/fauteuil-lg.jpg"
              alt="fauteuil banner"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
