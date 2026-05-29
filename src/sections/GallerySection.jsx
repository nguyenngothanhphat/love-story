function GallerySection({ memories }) {
  return (
    <section className="overflow-hidden px-container-padding py-stack-lg">
      <h2 className="mb-stack-lg text-center font-headline-lg text-headline-lg text-primary">
        Kỷ niệm nho nhỏ
      </h2>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-gutter">
        {memories.map((item) => (
          <div key={item.caption} className={`polaroid bg-white p-3 pt-3 pb-8 ${item.rotateClass}`}>
            <div className="relative mb-4">
              <div
                className={`absolute -top-4 left-1/2 z-10 h-8 w-16 -translate-x-1/2 ${item.tapeClass}`}
              />
              <img src={item.image} alt="em Én memory" className="aspect-square w-full rounded-sm object-cover" />
            </div>
            <p className="text-center font-headline-lg-mobile text-headline-lg-mobile text-secondary">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
