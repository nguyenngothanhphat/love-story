import { useRef } from 'react'

const heartImage =
  'https://lh3.googleusercontent.com/aida/ADBb0ugY53hVy2sZ-BInU3MLH_wn_WHTe5FfnNVrTftpg19kHn1hL941y87Bya5482Jyho4W_m6a4ppMoATJbJVcWbTGroJsfwGohf4OjuRKinIlafOqdT98R1SfF299_EIVmHHux7_zhg0LCXRGxQQvaJRinsbdaDQ_3JynxkVqAsri7jZTEx8aZYkDgBDpg6uHgfsx1OOc_zFbUN15kYgh8SS4Ym8ULq5p4Rh2BbNUUUgMdkrtLaLAiGSO6DnP'

const confettiColors = ['#fd8ca0', '#ffb7c5', '#864e5a']

function SurpriseSection({ hearts, poppedHearts, onPop }) {
  const containerRef = useRef(null)

  const createConfetti = (event) => {
    const container = containerRef.current
    if (!container) return

    const buttonRect = event.currentTarget.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const startX = buttonRect.left - containerRect.left + buttonRect.width / 2
    const startY = buttonRect.top - containerRect.top + buttonRect.height / 2

    for (let i = 0; i < 10; i += 1) {
      const piece = document.createElement('div')
      piece.className = 'confetti-piece'
      piece.style.left = `${startX}px`
      piece.style.top = `${startY}px`
      piece.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)]
      container.appendChild(piece)

      const angle = Math.random() * Math.PI * 2
      const distance = 50 + Math.random() * 50
      const tx = Math.cos(angle) * distance
      const ty = Math.sin(angle) * distance

      piece.animate(
        [
          { opacity: 1, transform: 'translate(0, 0) scale(1)' },
          { opacity: 0, transform: `translate(${tx}px, ${ty}px) scale(0)` },
        ],
        {
          duration: 1000,
          easing: 'cubic-bezier(0, 0, 0.2, 1)',
          fill: 'forwards',
        },
      )

      setTimeout(() => piece.remove(), 1000)
    }
  }

  return (
    <section className="relative flex min-h-[300px] flex-col items-center justify-center bg-secondary/5 px-container-padding py-stack-lg">
      <h2 className="mb-stack-md text-center font-headline-lg text-headline-lg text-primary">Một bất ngờ nho nhỏ</h2>
      <p className="mb-stack-lg text-center text-on-surface-variant">Chạm vào trái tim để mở món quà ngọt ngào.</p>

      <div ref={containerRef} className="relative h-48 w-full max-w-sm">
        {hearts.map((heart, index) => {
          const isPopped = poppedHearts.includes(index)
          return (
            <button
              key={heart.delay}
              type="button"
              className={`heart-float absolute cursor-pointer transition-transform hover:scale-125 ${heart.className}`}
              style={{ animationDelay: heart.delay, opacity: isPopped ? 0 : 1, transform: isPopped ? 'scale(2)' : undefined }}
              onClick={(event) => {
                if (isPopped) return
                onPop(index)
                createConfetti(event)
              }}
            >
              <img src="/images/loppy-3.png" alt="Trái tim ngọt ngào" className={`pointer-events-none object-contain ${heart.sizeClass}`} />
            </button>
          )
        })}
      </div>

      <div
        className={`mt-stack-md rounded-lg border border-secondary bg-white p-4 font-headline-lg-mobile text-secondary shadow-sm ${
          poppedHearts.length >= 3 ? 'animate-bounce' : 'hidden'
        }`}
      >
        Em là điều ngọt ngào nhất trên đời này!
      </div>
    </section>
  )
}

export default SurpriseSection
