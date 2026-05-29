import Icon from '../components/Icon'

function TopBar() {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-surface/80 px-container-padding shadow-[0_4px_12px_rgba(74,59,62,0.08)] backdrop-blur-md">
      <div className="flex items-center gap-2">
        <Icon name="favorite" className="text-primary" filled />
        <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">Our Story</span>
      </div>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-primary-container/20"
      >
        <Icon name="share" />
      </button>
    </header>
  )
}

export default TopBar
