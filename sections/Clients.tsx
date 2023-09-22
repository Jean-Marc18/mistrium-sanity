import { ClientsItems } from "@/constants"

const Clients = () => {
  return (
    <div className="flex flex-col h-full w-full gap-10">
        <div className="flex items-center justify-center w-full mb-[4rem]">
            <span className="font-semibold text-[#292019]">SOME OF OUR TRUSTED CLIENTS</span>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
          { ClientsItems.map((client) => (
            <div key={client.name} className="w-full py-4 px-3 flex items-center justify-center">
              <img src={client?.img.src} alt={client.name} className="w-40 h-40 object-cover" />
            </div>
          )) }
        </div>
    </div>
  )
}

export default Clients