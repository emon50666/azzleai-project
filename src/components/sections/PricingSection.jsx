import bgimg from"../../assets/images/bg.png"
import card_1 from"../../assets/images/card_1.png"
import card_2 from"../../assets/images/card_2.png"
import card_3 from"../../assets/images/card_3.png"
import card_4 from"../../assets/images/card_4.png"




  const cardData = [
  {
    category: "Past",
    title: "Builder House Singapore 2024",
    buttonText: "Watch recap",
    image: card_1,
  },
  {
    category: "Past",
    title: "Korean Blockchain Week 2024",
    buttonText: "Watch recap",
    image: card_2,
  },
  {
    category: "Past",
    title: "Singapore",
    buttonText: "Read recap",
    image: card_3,
  },
  {
    category: "Past",
    title: "Kyoto",
    buttonText: "Read recap",
    image: card_4,
  }
];


function PricingSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white py-16"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl text-gray-300 font-semibold">Connect with Sui builders</h2>
          <p className="mt-4 text-xl max-w-md mx-auto text-gray-400">
            Sui community events provide opportunities to connect, network, and share ideas
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {cardData.map((card, idx) => (
  <div
  key={idx}
  className="relative overflow-hidden rounded-xl h-48 w-full group"
>
  {/* Zoomable Background */}
  <div
    className="absolute inset-0 bg-center bg-cover transition-transform duration-500 scale-100 group-hover:scale-110"
    style={{ backgroundImage: `url(${card.image})` }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10" />

  {/* Content Layer */}
  <div className="absolute inset-0 flex flex-col justify-between z-20 p-4 text-white">
    <span className="text-xs bg-white/20 px-2 py-1 rounded-full w-fit uppercase">
      {card.category}
    </span>
    <h3 className="text-xl font-semibold">{card.title}</h3>
    <button className="text-gray-200 font-bold text-mg text-start cursor-pointer">
      {card.buttonText} →
    </button>
  </div>
</div>



          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
