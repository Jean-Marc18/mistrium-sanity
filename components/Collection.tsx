const Collection = () => {
  return (
    <>
      <div className="flex flex-1 flex-col-reverse items-center justify-center lg:flex-row bg-[#FCEFE9] p-4">
        <div className="flex flex-1 flex-col items-center justify-center lg:gap-[4rem] gap-4 lg:ml-12">
          <h3 className="heading3 text-[#292019]">Residential Furniture</h3>
          <a href="#" className="flex items-center justify-start gap-4 w-full h-full text-[#292019 font-normal">
            Browse Collection 
            {/* <img src="/assets/images/arrow-right.png" alt="vector" /> */}
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center h-full w-full">
          <img
            src="/assets/images/iron-table.png"
            alt="img_collection1"
            className="object-contain h-[17rem] w-[17rem]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col-reverse items-center justify-center lg:flex-row bg-[#FAE2C8] p-4">
        <div className="flex flex-1 flex-col items-center justify-center lg:gap-[4rem] gap-4 lg:ml-12">
          <h3 className="heading3 text-[#292019]">Hospitality Furniture</h3>
          <a href="#" className="w-full h-full text-[#292019 font-normal">
            Browse Collection
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center h-full w-full">
          <img
            src="/assets/images/tabouret1.png"
            alt="img_collection2"
            className="object-contain h-[17rem] w-[17rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Collection;
