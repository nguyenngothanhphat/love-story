import { useEffect, useMemo, useState } from 'react'
import BottomNav from '../layout/BottomNav'
import Icon from '../components/Icon'

const categories = ['Tất cả thư', 'Nhắn nhủ ngọt ngào', 'Kỷ niệm', 'Thư bí mật', 'Ngày không vui']

const letters = {
  'favorite': {
    title: 'Một ngày thật đẹp cùng em',
    date: '31 tháng 5, 2026',
    tag: 'Kỷ niệm dịu dàng',
    icon: 'favorite',
    preview:
      'Hôm nay là một ngày rất đặc biệt, không phải vì mọi thứ hoàn hảo, mà vì anh được cùng em làm những điều thật ý nghĩa...',
    content: [
      'Hôm nay là một ngày rất đặc biệt, không phải vì mọi thứ hoàn hảo, mà vì anh được cùng em làm những điều thật ý nghĩa. Cùng em đi làm gốm, cùng nhau cười vì những khoảnh khắc nhỏ, cùng khui blindbox rồi đặt nó lên xe của anh như một dấu nhớ dễ thương của riêng hai đứa.',
      'Có những lúc chỉ cần được ở gần em, nhìn em vui, nghe em nói, cùng em làm vài điều đơn giản thôi cũng đủ khiến anh thấy lòng mình nhẹ nhàng hơn rất nhiều. Ngoài trời hôm nay có mưa, có lạnh, nhưng lạ thật, ở bên em anh lại thấy mọi thứ trở nên ấm áp hơn. Anh không biết phải gọi cảm giác đó là gì cho thật đúng, chỉ biết rằng những ngày có em luôn khiến anh muốn giữ lại lâu hơn một chút.',
      'Cảm ơn em vì đã cùng anh tạo nên một ngày thật đẹp, một ngày mà anh sẽ muốn nhớ lại nhiều lần sau này. Và nếu có thể, anh mong sau này tụi mình sẽ còn có thêm nhiều ngày giản dị nhưng đáng nhớ như hôm nay.',
    ],
  },
  note: {
    title: 'Một lời nhắn nhỏ cho em',
    date: '29 tháng 5, 2026',
    tag: 'Nhắn nhủ ngọt ngào',
    icon: 'drafts',
    preview:
      'Mỗi khi em đọc lá thư này, hãy nhớ rằng trái tim em ấm như nắng và từng nụ cười em trao đều là món quà...',
    content: [
      'Mỗi khi em đọc lá thư này, hãy nhớ rằng trái tim em ấm như nắng và từng nụ cười em trao đều là món quà cho thế giới.',
      'Đừng để những ồn ào của một ngày làm em mất đi ánh sáng của mình. Em luôn đủ đầy theo cách rất riêng, và anh vẫn luôn ở đây nắm tay em đi qua từng chương nhỏ. Cứ mơ thật lớn nhé em.',
    ],
  },
  'bad-days': {
    title: 'Dành cho những ngày em mệt',
    date: '29 tháng 5, 2026',
    tag: 'Ngày không vui',
    icon: 'bedtime',
    preview:
      'Không sao đâu khi em muốn thở sâu một chút và nghỉ ngơi. Thế giới có thể chờ cho tới khi nguồn năng lượng dịu dàng của em quay lại...',
    content: [
      'Không sao đâu khi em muốn thở sâu một chút và nghỉ ngơi. Thế giới có thể chờ cho tới khi nguồn năng lượng dịu dàng của em quay lại.',
      'Hôm nay em không cần phải thật năng suất. Em chỉ cần là chính em thôi. Quấn chăn ấm, nghe tiếng mưa, và nhớ rằng mặt trăng cũng có lúc khuyết. Em vẫn thật đẹp trong những khoảnh khắc lặng yên.',
    ],
  },
}

const cards = [
  { id: 'favorite', delay: '0.1s' },
  { id: 'note', delay: '0.2s' },
  { id: 'bad-days', delay: '0.3s' },
]

function LettersPage({ onGoHome, onOpenStories, onOpenGame }) {
  const [activeCategory, setActiveCategory] = useState('Tất cả thư')
  const [modalLetterId, setModalLetterId] = useState(null)
  const [floatingEmojis, setFloatingEmojis] = useState([])

  const navItems = useMemo(
    () => [
      { href: '#', icon: 'home', label: 'Home', onClick: onGoHome },
      { href: '#', icon: 'auto_stories', label: 'Stories', onClick: onOpenStories },
      { href: '#', icon: 'sports_esports', label: 'Game', onClick: onOpenGame },
      { href: '#', icon: 'mail', label: 'Letters', active: true },
      { href: '#', icon: 'person', label: 'Profile' },
    ],
    [onGoHome, onOpenGame, onOpenStories],
  )

  useEffect(() => {
    document.body.style.overflow = modalLetterId ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [modalLetterId])

  const createHeartBurst = () => {
    for (let i = 0; i < 8; i += 1) {
      const id = `${Date.now()}-${Math.random()}`
      const glyphs = ['💖', '✨', '🌸', '🍭']
      const item = {
        id,
        glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        delay: `${Math.random() * 0.5}s`,
      }
      setFloatingEmojis((prev) => [...prev, item])
      setTimeout(() => {
        setFloatingEmojis((prev) => prev.filter((emoji) => emoji.id !== id))
      }, 2000)
    }
  }

  const openLetter = (id) => {
    setModalLetterId(id)
    createHeartBurst()
  }

  const closeLetter = () => {
    setModalLetterId(null)
  }

  const filteredCards =
    activeCategory === 'Tất cả thư'
      ? cards
      : cards.filter((card) => letters[card.id].tag === activeCategory)

  const modalLetter = modalLetterId ? letters[modalLetterId] : null

  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-24 font-body-md text-on-background">
      <header className="fixed top-0 left-0 z-40 flex h-16 w-full items-center justify-between bg-surface px-container-padding shadow-[0_4px_12px_rgba(74,59,62,0.08)]">
        <button
          type="button"
          onClick={onGoHome}
          className="squish-active flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-primary-container/20"
        >
          <Icon name="arrow_back" className="text-primary" />
        </button>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Letters for Én</h1>
        <button
          type="button"
          className="squish-active flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-primary-container/20"
        >
          <Icon name="favorite" className="text-primary" filled />
        </button>
      </header>

      {floatingEmojis.map((emoji) => (
        <div
          key={emoji.id}
          className="floating-heart text-2xl"
          style={{ left: emoji.left, top: emoji.top, animationDelay: emoji.delay }}
        >
          {emoji.glyph}
        </div>
      ))}

      <main className="mx-auto mt-20 w-full max-w-2xl flex-grow px-container-padding pb-32">
        <div className="no-scrollbar -mx-container-padding mb-gutter flex gap-stack-sm overflow-x-auto px-container-padding pb-4">
          {categories.map((category) => {
            const isActive = category === activeCategory
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`glass-chip squish-active whitespace-nowrap rounded-full px-stack-md py-2 font-label-md text-label-md transition-all ${
                  isActive
                    ? 'bg-secondary-container/30 text-secondary ring-2 ring-secondary/10 border-secondary/20'
                    : 'text-on-surface-variant hover:bg-white'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="space-y-gutter">
          {filteredCards.map((card) => {
            const letter = letters[card.id]
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => openLetter(card.id)}
                className="letter-fade-in paper-texture group relative w-full cursor-pointer rounded-lg border border-outline-variant/30 p-stack-lg text-left shadow-[0_8px_20px_rgba(74,59,62,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(74,59,62,0.12)]"
                style={{ animationDelay: card.delay }}
              >
                <div className="mb-base flex items-start justify-between">
                  <span className="rounded-full bg-primary-container/40 px-3 py-1 font-label-sm text-label-sm text-on-primary-fixed-variant">
                    {letter.tag}
                  </span>
                  <Icon name={letter.icon} className="text-primary/40 transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mb-2 font-headline-lg text-headline-lg text-on-surface">{letter.title}</h3>
                <p className="line-clamp-2 font-body-md text-on-surface-variant">{letter.preview}</p>
                <div className="mt-stack-md flex items-center font-label-sm text-label-sm text-primary/60">
                  <Icon name="calendar_today" className="mr-1 text-[14px]" />
                  {letter.date}
                </div>
              </button>
            )
          })}

          <div
            className="letter-fade-in relative overflow-hidden rounded-lg border border-outline-variant/20 bg-surface-container p-stack-lg shadow-inner"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/30 backdrop-blur-md">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon name="lock" className="text-primary" filled />
              </div>
              <p className="font-label-md text-label-md text-primary">Mở vào sinh nhật của em</p>
            </div>
            <div className="pointer-events-none opacity-30 blur-sm">
              <h3 className="mb-2 font-headline-lg text-headline-lg text-on-surface">Một lá thư bí mật nho nhỏ</h3>
              <p className="font-body-md text-on-surface-variant">
                Đây là một lá thư rất đặc biệt anh cất lại cho đúng thời điểm.
              </p>
            </div>
          </div>
        </div>
      </main>

      {modalLetter && (
        <div className="fixed inset-0 z-[60]">
          <button type="button" className="absolute inset-0 bg-primary/20 backdrop-blur-sm" onClick={closeLetter} aria-label="close" />
          <div className="absolute inset-0 flex items-center justify-center p-container-padding">
            <div className="modal-enter paper-texture relative flex aspect-[4/5] w-full max-w-lg flex-col overflow-hidden rounded-xl border-[12px] border-white p-stack-lg shadow-2xl">
              <button
                type="button"
                onClick={closeLetter}
                className="squish-active absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80"
              >
                <Icon name="close" className="text-primary" />
              </button>

              <div className="mt-12 flex-grow overflow-y-auto pr-2">
                <p className="mb-stack-md font-label-sm text-label-sm text-primary/60 italic">{modalLetter.date}</p>
                <h2 className="mb-stack-md font-headline-xl text-headline-xl leading-tight text-on-surface">{modalLetter.title}</h2>
                <div className="space-y-4 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                  {modalLetter.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-stack-lg border-t border-primary/10 pt-stack-md">
                  <p className="font-label-md text-label-md text-secondary italic">Từ người đã tạo nên thế giới nho nhỏ này cho em.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNav items={navItems} />
    </div>
  )
}

export default LettersPage
