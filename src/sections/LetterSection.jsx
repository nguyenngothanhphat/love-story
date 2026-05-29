import Icon from '../components/Icon'

function LetterSection({ isOpen, onToggle }) {
  return (
    <section id="letter-section" className="overflow-hidden px-container-padding py-stack-lg">
      <div className={`mx-auto max-w-md text-center ${isOpen ? 'letter-open' : ''}`}>
        <h2 className="mb-stack-lg font-headline-lg text-headline-lg text-primary">Một lá thư gửi em</h2>
        <div className="group relative cursor-pointer transition-transform duration-500 hover:scale-105">
          <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-lg border-2 border-white bg-primary-container shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center bg-white/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-secondary shadow-lg transition-transform group-hover:scale-110">
                <Icon name="mail" className="text-3xl text-white" filled />
              </div>
            </div>
            <div className="absolute bottom-0 h-1/2 w-full bg-on-primary-fixed-variant/5" />
          </div>
          <button
            type="button"
            onClick={onToggle}
            className="mt-stack-md rounded-full bg-secondary px-stack-lg py-3 font-label-md text-label-md text-on-secondary shadow-lg"
          >
            {isOpen ? 'Gấp lá thư' : 'Mở lá thư'}
          </button>
        </div>

        <div className="letter-content mt-stack-lg">
          <div className="relative overflow-hidden rounded-sm border border-primary-container/30 bg-[#FFF9F0] p-stack-lg text-left shadow-inner">
            <div className="absolute top-0 left-0 h-1 w-full bg-secondary/10" />
            <p className="mb-4 font-headline-lg-mobile text-headline-lg-mobile text-primary italic">Én ơiiii,</p>
            <p className="mb-4 font-body-md leading-relaxed text-on-surface-variant">
              Dạo này anh hay nhớ em nhiều hơn một chút. Chỉ cần thấy em cười, ngày của anh tự nhiên cũng vui theo, mấy chuyện mệt mỏi cũng nhẹ đi nhiều.
            </p>
            <p className="mb-4 font-body-md leading-relaxed text-on-surface-variant">
              Anh thích những lúc mình nói chuyện vu vơ, kể nhau nghe mấy chuyện nhỏ xíu trong ngày. Có hôm em im im là anh lại lo, chỉ mong em luôn ổn và ngủ thật ngon.
            </p>
            <p className="mb-8 font-body-md leading-relaxed text-on-surface-variant">
              Chỉ muốn nói là anh luôn quý em, thương em, và trân trọng sự hiện diện của em trong cuộc sống của anh.
            </p>
            <p className="text-right font-headline-lg-mobile text-headline-lg-mobile text-secondary">- Người hay nhớ em</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LetterSection
