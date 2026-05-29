import Icon from '../components/Icon'

const finalImage =
  'https://lh3.googleusercontent.com/aida/ADBb0uhvj_Pv1ssAnbCF4xJoQYC9ZY8zOAnKvCYYBKW9ltP8sd4qLAE41Fk6ZlItCw3AlcyvZFFkw58kghMBBbnLBGBMny4prFWYG2u6f4Rga61h8BQscSCIUuoA6k3IHJ9SUA5ID28pXBXa5ZZxHgxui-vEFZWVa5S6_zA6Y5YvkI3QS_FatPTr5x7Gy1VaNLY2AU4xlQuqvK-ZjAIw4SXPE3QsorL56bYrVNTwolgjlKo_BNAPBYPtzHH124ry'

function FinalSection() {
  return (
    <section className="flex min-h-[50vh] items-center justify-center bg-surface-container-highest px-container-padding py-stack-lg">
      <div className="w-full max-w-md text-center">
        <div className="mb-stack-lg rounded-lg border-2 border-white bg-white p-6 shadow-xl">
          <img src={finalImage} alt="em Én Happy" className="mb-stack-md h-64 w-full object-contain" />
          <h2 className="mb-2 font-headline-xl text-headline-xl text-primary">Cảm ơn em đã bên anh</h2>
          <p className="mb-stack-lg text-on-surface-variant">Mọi câu chuyện đều đẹp hơn vì có em.</p>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-stack-lg py-3 font-label-md text-label-md text-on-primary transition-transform hover:scale-105 active:scale-95"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Icon name="replay" />
            Xem lại câu chuyện
          </button>
        </div>
      </div>
    </section>
  )
}

export default FinalSection
