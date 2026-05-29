import { useMemo, useState } from 'react'
import BottomNav from '../layout/BottomNav'
import Icon from '../components/Icon'

// const heartImage =
//   'https://lh3.googleusercontent.com/aida/ADBb0ugY53hVy2sZ-BInU3MLH_wn_WHTe5FfnNVrTftpg19kHn1hL941y87Bya5482Jyho4W_m6a4ppMoATJbJVcWbTGroJsfwGohf4OjuRKinIlafOqdT98R1SfF299_EIVmHHux7_zhg0LCXRGxQQvaJRinsbdaDQ_3JynxkVqAsri7jZTEx8aZYkDgBDpg6uHgfsx1OOc_zFbUN15kYgh8SS4Ym8ULq5p4Rh2BbNUUUgMdkrtLaLAiGSO6DnP'

const milestones = {
  10: 'Ấm hơn một chút rồi đó ✨',
  25: 'em Én nhận được nhiều yêu thương quá 🎀',
  50: 'Trái tim sắp đầy rồi 💖',
  75: 'Gần đầy yêu thương rồi nè 🌸',
  100: 'Hoan hô! em Én đã nhận đủ yêu thương 🎉',
}

function TapHeartGamePage({ onGoHome, onOpenStories, onOpenLetters }) {
  const [score, setScore] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [toast, setToast] = useState('')
  const [heartTapAnim, setHeartTapAnim] = useState(false)
  const [floatingItems, setFloatingItems] = useState([])
  const [particles, setParticles] = useState([])

  const navItems = useMemo(
    () => [
      { href: '#', icon: 'home', label: 'Home', onClick: onGoHome },
      { href: '#', icon: 'auto_stories', label: 'Stories', onClick: onOpenStories },
      { href: '#', icon: 'sports_esports', label: 'Game', active: true },
      { href: '#', icon: 'mail', label: 'Letters', onClick: onOpenLetters },
      { href: '#', icon: 'person', label: 'Profile' },
    ],
    [onGoHome, onOpenLetters, onOpenStories],
  )

  const showMilestone = (nextScore) => {
    const message = milestones[nextScore]
    if (!message) return
    setToast(message)
    setTimeout(() => {
      setToast((prev) => (prev === message ? '' : prev))
    }, 3000)
  }

  const spawnFloatingText = (x, y) => {
    const id = `${Date.now()}-${Math.random()}`
    const item = { id, x, y }
    setFloatingItems((prev) => [...prev, item])
    setTimeout(() => {
      setFloatingItems((prev) => prev.filter((entry) => entry.id !== id))
    }, 2500)
  }

  const spawnParticles = (x, y) => {
    for (let i = 0; i < 3; i += 1) {
      const id = `${Date.now()}-${Math.random()}-${i}`
      const drift = (Math.random() - 0.5) * 100
      const item = { id, x, y, drift }
      setParticles((prev) => [...prev, item])
      setTimeout(() => {
        setParticles((prev) => prev.filter((entry) => entry.id !== id))
      }, 3000)
    }
  }

  const handleTap = (x, y) => {
    if (isCompleted) return

    setScore((prev) => {
      const next = prev + 1
      showMilestone(next)

      if (next >= 100) {
        setIsCompleted(true)
        setTimeout(() => setShowModal(true), 500)
      }

      return next
    })

    if (x && y) {
      spawnFloatingText(x, y)
      spawnParticles(x, y)
    }

    setHeartTapAnim(false)
    requestAnimationFrame(() => setHeartTapAnim(true))
  }

  const handleMouseDown = (event) => {
    handleTap(event.clientX, event.clientY)
  }

  const handleTouchStart = (event) => {
    event.preventDefault()
    const touch = event.touches?.[0]
    if (!touch) return
    handleTap(touch.clientX, touch.clientY)
  }

  const resetGame = () => {
    setScore(0)
    setIsCompleted(false)
    setToast('')
    setShowModal(false)
    setHeartTapAnim(false)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const progress = Math.min(score, 100)

  return (
    <div className="font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <header className="fixed top-0 left-0 z-[60] flex h-16 w-full items-center justify-between bg-surface px-container-padding shadow-[0_4px_12px_rgba(74,59,62,0.08)]">
        <button
          type="button"
          onClick={onOpenStories}
          className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors duration-200 ease-out hover:bg-primary-container/20 active:scale-95"
        >
          <Icon name="arrow_back" />
        </button>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Our Story</h1>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors duration-200 ease-out hover:bg-primary-container/20 active:scale-95"
        >
          <Icon name="favorite" />
        </button>
      </header>

      <main className="bg-soft-gradient relative flex min-h-screen flex-col items-center overflow-hidden pt-20 pb-32">
        <div className="pointer-events-none absolute top-20 left-10 opacity-10">
          <Icon name="favorite" filled className="text-[120px]" />
        </div>
        <div className="pointer-events-none absolute right-10 bottom-40 opacity-10">
          <Icon name="favorite" filled className="text-[80px]" />
        </div>

        <div className="w-full max-w-md px-container-padding text-center">
          <div className="mb-stack-md">
            <h2 className="mb-2 font-headline-xl text-headline-xl text-on-surface">Tap vào trái tim</h2>
            <p className="px-4 font-body-md text-body-md text-on-surface-variant">
              Mỗi lần chạm là một chút yêu thương gửi đến em Én.
            </p>
          </div>

          <div className="glass-card mb-stack-lg relative flex w-full flex-col items-center rounded-lg p-container-padding shadow-lg">
            <div className="mb-stack-md flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container px-6 py-2">
              <Icon name="favorite" className="text-secondary" filled />
              <span className="font-label-md text-label-md text-secondary">Điểm yêu thương: {score}</span>
            </div>

            <div
              className="group relative flex h-72 w-72 cursor-pointer select-none touch-none items-center justify-center"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div
                className={`h-full w-full ${heartTapAnim ? 'heart-tap-anim' : 'heart-pulse'}`}
                onAnimationEnd={() => setHeartTapAnim(false)}
              >
                <img src="/images/heart.png" alt="trái tim" className="h-full w-full object-contain drop-shadow-2xl" />
              </div>
            </div>

            <div className="mt-stack-md">
              <p className="animate-bounce font-label-md text-label-md uppercase tracking-widest text-secondary">
                Tap vào trái tim để gửi yêu thương
              </p>
            </div>

            <div className="mt-stack-lg w-full">
              <div className="mb-2 flex items-end justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">{progress} / 100 yêu thương</span>
                <Icon name="celebration" className="text-sm text-secondary" />
              </div>
              <div className="h-4 w-full overflow-hidden rounded-full border border-outline-variant/20 bg-surface-container-highest">
                <div
                  className="h-full rounded-full bg-secondary shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex h-14 items-center justify-center overflow-visible">
            {toast && (
              <div className="milestone-toast rounded-full border border-primary/20 bg-primary-container px-6 py-2 font-label-md text-label-md font-bold text-on-primary-container shadow-lg">
                {toast}
              </div>
            )}
          </div>
        </div>
      </main>

      {floatingItems.map((item) => (
        <div key={item.id} className="floating-heart text-secondary font-bold select-none" style={{ left: item.x, top: item.y }}>
          <div className="-translate-x-1/2 flex flex-col items-center">
            <span className="text-xs">+1 Yêu</span>
            <Icon name="favorite" className="text-xl" filled />
          </div>
        </div>
      ))}

      {particles.map((item) => (
        <div
          key={item.id}
          className="particle text-secondary/60"
          style={{ left: item.x, top: item.y, '--tw-translateX': `${item.drift}px` }}
        >
          <Icon name="favorite" className="text-sm" filled />
        </div>
      ))}

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-inverse-surface/40 p-6 backdrop-blur-sm">
          <div className="glass-card w-full max-w-sm rounded-xl bg-surface p-container-padding text-center shadow-2xl">
            <div className="mb-stack-md flex h-24 w-24 items-center justify-center rounded-full bg-primary-container shadow-inner mx-auto">
              <Icon name="favorite" className="text-5xl text-on-primary-container animate-pulse" filled />
            </div>
            <h3 className="mb-2 font-headline-lg text-headline-lg text-on-surface">Trái tim đầy yêu thương</h3>
            <p className="mb-stack-lg font-body-md text-body-md text-on-surface-variant">
              Cảm ơn em Én đã nhận hết những yêu thương nhỏ này. Mỗi lần chạm là một điều dễ thương được gửi đến em.
            </p>
            <div className="flex w-full flex-col gap-3">
              <button
                type="button"
                onClick={resetGame}
                className="squish-effect flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-label-md text-label-md text-on-primary shadow-lg transition-all"
              >
                <Icon name="replay" className="text-lg" />
                Tap lại từ đầu
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="squish-effect flex w-full items-center justify-center gap-2 rounded-full border border-primary-container bg-surface-container py-4 font-label-md text-label-md text-primary transition-all"
              >
                <Icon name="auto_stories" className="text-lg" />
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

export default TapHeartGamePage
