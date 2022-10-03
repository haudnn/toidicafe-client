interface Props  {
    name: string,
    slug: string,
    address: any,
    image: string
    id: string
    handleClickShop: Function,
}
const ShopItem = ({name, slug,address, image, id,handleClickShop} : Props) => {
  return (
    <div key={id} className="hover:bg-[#eee]" onClick={() => handleClickShop({id, name, address, image, slug})}>
      <div
        className="flex items-center justify-start px-4 py-[10px] cursor-pointer relative text-black"
      >
        <div className="w-10 h-10 mr-[10px] rounded overflow-hidden">
          <img
            src={image}
            alt=""
            className="object-cover max-w-full max-h-full rounded"
          />
        </div>
        <div>
          <div className="text-lg font-medium">{name}</div>
          <div className="text-sm text-[#6b6b6b]">{address}</div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
