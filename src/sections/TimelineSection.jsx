import Icon from '../components/Icon'

function TimelineSection({ items }) {
  return (
    <section id="timeline" className="bg-surface-container-low px-container-padding py-stack-lg">
      <div className="mx-auto max-w-md">
        <h2 className="mb-stack-lg text-center font-headline-lg text-headline-lg text-primary">
          Cột mốc của chúng mình
        </h2>
        <div className="relative ml-4 space-y-stack-lg border-l-2 border-primary-container pl-10">
          {items.map((item) => (
            <div key={item.title} className="relative">
              <div className="absolute -left-[57px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-secondary-container shadow-sm">
                <Icon name="favorite" className="text-[18px] text-white" filled />
              </div>
              <div className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-stack-md shadow-sm">
                <span className="mb-1 block font-label-sm text-label-sm text-secondary">{item.chapter}</span>
                <h3 className="mb-2 font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
