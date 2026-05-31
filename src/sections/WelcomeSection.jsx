import Icon from '../components/Icon'

const loppyImage =
  'https://lh3.googleusercontent.com/aida/ADBb0uiGL5AJA2Q-v4MUIEV7nJrsgnUcOW6n68aG_SYI52TWTZ-3MLvgNBhRObhMpJGdKEgK9xu155d-_OScxXwLHoKDCmgbknKYnkqqiChyHJRdJv7bIbXylLpUkGCSF9tiIr59U0CF1l3cIjy_iguPVLEXYZzwEgGJijOqvXWE3BOrHo5jyl2aM8rQkXjDa3AGcG_Cd865tPxkm-N5DeHq13aotqmqmU9mME5m_uFHKP4aKapQzE9MS82lGx8B'

function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden px-container-padding py-stack-lg"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 h-24 w-24 rounded-full bg-primary-container blur-3xl" />
        <div className="absolute right-20 bottom-40 h-32 w-32 rounded-full bg-secondary-container blur-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-lg text-center">
        <div className="mb-stack-lg flex justify-center">
          <img
            src="/public/images/loppy-4.png"
            alt="em Én"
            className="heart-float h-48 w-48 rounded-full border border-white/50 bg-white/30 p-4 object-contain drop-shadow-xl backdrop-blur-sm"
          />
        </div>
        <div className="rounded-lg border border-white/60 bg-white/40 p-stack-lg shadow-[0_20px_40px_rgba(74,59,62,0.08)] backdrop-blur-lg">
          <h1 className="mb-2 font-headline-xl text-headline-xl text-primary">Chào em Én</h1>
          <p className="mb-stack-lg font-body-lg text-body-lg text-on-surface-variant">
            Câu chuyện nhỏ này anh viết riêng cho em.
          </p>
          <a
            href="#timeline"
            className="pulse-soft inline-flex items-center justify-center rounded-full bg-secondary px-stack-lg py-4 font-label-md text-label-md text-on-secondary transition-transform hover:scale-105 active:scale-95"
          >
            Bắt đầu hành trình
            <Icon name="arrow_downward" className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
