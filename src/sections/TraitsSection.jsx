import Icon from '../components/Icon'

function TraitsSection({ traits }) {
  return (
    <section className="bg-surface-container px-container-padding py-stack-lg">
      <div className="mx-auto max-w-md">
        <h2 className="mb-stack-lg text-center font-headline-lg text-headline-lg text-primary">
          Điều anh yêu ở em
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {traits.map((trait) => (
            <div
              key={trait.label}
              className="flex flex-col items-center rounded-lg border border-primary-container/20 bg-surface-container-lowest p-stack-md text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon name={trait.icon} className="mb-2 text-3xl text-secondary" />
              <h4 className="font-label-md text-label-md text-on-surface">{trait.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TraitsSection
