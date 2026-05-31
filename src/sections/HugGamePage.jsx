import { useEffect, useMemo, useState } from 'react'
import BottomNav from '../layout/BottomNav'
import TopBar from '../layout/TopBar'

const teaseTexts = ['Chưa đâu', 'Nghĩ lại đi mà', 'Một cái xíu xiu', 'Bấm đồng ý nha', 'Đồng ý luôn']

const baseNavItems = [
  { href: '#', icon: 'home', label: 'Home' },
  { href: '#', icon: 'auto_stories', label: 'Stories', active: true },
  { href: '#', icon: 'sports_esports', label: 'Game' },
  { href: '#', icon: 'mail', label: 'Letters' },
  { href: '#', icon: 'person', label: 'Profile' },
]

const imageUrl =
  'https://lh3.googleusercontent.com/aida/ADBb0ugY53hVy2sZ-BInU3MLH_wn_WHTe5FfnNVrTftpg19kHn1hL941y87Bya5482Jyho4W_m6a4ppMoATJbJVcWbTGroJsfwGohf4OjuRKinIlafOqdT98R1SfF299_EIVmHHux7_zhg0LCXRGxQQvaJRinsbdaDQ_3JynxkVqAsri7jZTEx8aZYkDgBDpg6uHgfsx1OOc_zFbUN15kYgh8SS4Ym8ULq5p4Rh2BbNUUUgMdkrtLaLAiGSO6DnP'

function HugGamePage({ onGoHome, onOpenStories, onOpenLetters, onOpenGame }) {
  const [teaseIndex, setTeaseIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [secondaryOffset, setSecondaryOffset] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])
  const navItems = useMemo(
    () =>
      baseNavItems.map((item) =>
        item.label === 'Home'
          ? { ...item, onClick: onGoHome }
          : item.label === 'Stories'
            ? { ...item, onClick: onOpenStories }
          : item.label === 'Game'
            ? { ...item, onClick: onOpenGame }
          : item.label === 'Letters'
            ? { ...item, onClick: onOpenLetters }
            : item,
      ),
    [onGoHome, onOpenStories, onOpenGame, onOpenLetters],
  )

  const isFinalSecondaryState = teaseIndex >= teaseTexts.length - 1

  const secondaryBtnText = useMemo(() => teaseTexts[Math.min(teaseIndex, teaseTexts.length - 1)], [teaseIndex])

  const spawnParticle = (variant = 'heart') => {
    const id = `${Date.now()}-${Math.random()}`
    const isHeart = variant === 'heart' ? true : Math.random() > 0.5
    const particle = {
      id,
      icon: isHeart ? 'favorite' : 'auto_awesome',
      left: `${Math.random() * 100}vw`,
      top: '110vh',
      fontSize: `${Math.random() * (variant === 'heart' ? 20 : 15) + (variant === 'heart' ? 20 : 10)}px`,
      duration: `${Math.random() * (variant === 'heart' ? 2 : 10) + (variant === 'heart' ? 2 : 10)}s`,
      opacity: variant === 'heart' ? Math.random() * 0.8 + 0.2 : 0.35,
      colorClass: variant === 'heart' ? 'text-secondary' : 'text-primary-fixed-dim/40',
    }

    setParticles((prev) => [...prev, particle])

    setTimeout(() => {
      setParticles((prev) => prev.filter((item) => item.id !== id))
    }, variant === 'heart' ? 4000 : 20000)
  }

  const createHeartBurst = () => {
    for (let i = 0; i < 30; i += 1) {
      setTimeout(() => spawnParticle('heart'), i * 80)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => spawnParticle('bg'), 1500)
    return () => clearInterval(timer)
  }, [])

  const moveButton = () => {
    if (isFinalSecondaryState) return

    const maxX = 90
    const maxY = 60
    const randomX = (Math.random() - 0.5) * maxX * 2
    const randomY = (Math.random() - 0.5) * maxY

    setSecondaryOffset({ x: randomX, y: randomY })
  }

  const handleSecondaryClick = () => {
    if (isFinalSecondaryState) {
      setShowModal(true)
      createHeartBurst()
      return
    }

    setTeaseIndex((prev) => prev + 1)
    setSecondaryOffset({ x: 0, y: 0 })
  }

  const celebrate = () => {
    setShowModal(true)
    createHeartBurst()
  }

  const closeModal = () => {
    setShowModal(false)
    setTeaseIndex(0)
    setSecondaryOffset({ x: 0, y: 0 })
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-24 font-body-md text-on-surface">
      <TopBar />

      <div className="pointer-events-none fixed inset-0 z-0">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={`material-symbols-outlined heart-particle ${particle.colorClass}`}
            style={{
              left: particle.left,
              top: particle.top,
              fontSize: particle.fontSize,
              animationDuration: particle.duration,
              opacity: particle.opacity,
            }}
          >
            {particle.icon}
          </span>
        ))}
      </div>

      <main className="relative z-10 mx-auto max-w-lg px-container-padding pt-24 pb-32">
        <div className="space-y-stack-lg">
          <div id="game-view" className="flex flex-col items-center space-y-stack-md text-center">
            <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-xl border border-primary-fixed-dim bg-surface-container-low shadow-[0_20px_40px_rgba(74,59,62,0.1)]">
              <img
                src="/images/loppy-3.png"
                alt="em Én ôm trái tim"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-base">
              <h2 className="px-4 font-headline-xl text-headline-xl text-primary">Én ơi, cho anh ôm một cái được không?</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Chỉ là một cái ôm nhẹ nhàng và ấm áp thôi nè.</p>
            </div>

            <div id="interactive-area" className="relative flex min-h-[160px] w-full flex-col items-center gap-stack-sm pt-base">
              <button
                type="button"
                onClick={celebrate}
                className="btn-squish animate-pulse-soft w-full max-w-xs rounded-full bg-secondary py-4 font-headline-lg text-white shadow-lg shadow-secondary/20 transition-all"
              >
                Đồng ý
              </button>

              <button
                type="button"
                onMouseEnter={moveButton}
                onClick={handleSecondaryClick}
                style={{ transform: `translate(${secondaryOffset.x}px, ${secondaryOffset.y}px)` }}
                className={`btn-squish relative z-10 rounded-full border px-8 py-3 font-label-md transition-all ${
                  isFinalSecondaryState
                    ? 'bg-secondary text-white border-secondary'
                    : 'bg-surface-container-high text-primary border-primary-fixed-dim'
                }`}
              >
                {secondaryBtnText}
              </button>
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-container-padding">
          <button type="button" aria-label="close" className="absolute inset-0 bg-primary/20 backdrop-blur-sm" onClick={closeModal} />
          <div className="glass-modal modal-enter relative flex w-full max-w-sm flex-col items-center rounded-lg p-stack-lg text-center shadow-2xl">
            <div className="mb-stack-md flex h-24 w-24 items-center justify-center rounded-full bg-primary-container shadow-inner">
              <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                favorite
              </span>
            </div>
            <h3 className="mb-2 font-headline-xl text-headline-xl text-primary">Cảm ơn em Én</h3>
            <p className="mb-stack-lg font-body-md text-body-md text-on-surface-variant">
              Cảm ơn em vì đã đồng ý nhận một cái ôm nhỏ này. Mong là cái ôm này làm ngày của em dịu dàng và ấm áp hơn một chút.
            </p>
            <div className="w-full space-y-3">
              <button
                type="button"
                className="btn-squish w-full rounded-full bg-secondary py-4 font-label-md text-white shadow-md"
                onClick={createHeartBurst}
              >
                Ôm thêm lần nữa
              </button>
              <button type="button" className="w-full py-3 font-label-md text-secondary hover:underline" onClick={closeModal}>
                Tiếp tục câu chuyện
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav items={navItems} />
    </div>
  )
}

export default HugGamePage
