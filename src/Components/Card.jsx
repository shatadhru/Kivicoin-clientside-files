function Card({
  title,
  value,
  Icon,
  color_container = "#fff",
  color_icon_container = "#ff9100",
}) {
  return (
    <div
      className="card_container flex justify-between items-center p-4 rounded-2xl shadow-lg h-[80px] sm:h-[120px] w-[160px] sm:w-[90%] lg:w-[85%] mx-auto"
      style={{ backgroundColor: color_container }}
    >
      <div className="text_box flex flex-col justify-center">
        <h1 className="text-[10px] mt-1 sm:text-[16px] lg:text-[18px] font-bold text-black">
          {title}
        </h1>
        <h1 className="text-[24px] sm:text-[30px] text-white">{value}</h1>
      </div>
      <div
        className="icon_box flex justify-center items-center h-10 sm:h-12 w-10 sm:w-12 rounded-full"
        style={{ backgroundColor: color_icon_container }}
      >
        {Icon && <Icon size={22} color="#CCA049" />}
      </div>
    </div>
  );
}

export default Card;
