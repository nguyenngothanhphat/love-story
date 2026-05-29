import Icon from '../components/Icon'

function BottomNav({ items }) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 flex w-full items-center justify-around rounded-t-lg border-t border-outline-variant/30 bg-surface-container-low px-4 py-3 shadow-[0_-4px_16px_rgba(74,59,62,0.1)]"
      style={{
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
      }}
    >
      {items.map((item) => {
        const baseClass = 'flex flex-col items-center justify-center px-4 py-1 transition-all'
        const activeClass = item.active
          ? 'rounded-full bg-secondary-container text-on-secondary-container active:scale-95'
          : 'text-on-tertiary-fixed-variant hover:bg-primary-container/30'

        return (
          <a
            key={item.label}
            href={item.href}
            onClick={(event) => {
              if (!item.onClick) return
              event.preventDefault()
              item.onClick()
            }}
            className={`${baseClass} ${activeClass}`.trim()}
          >
            <Icon name={item.icon} filled={item.active} />
            <span className="font-label-sm text-label-sm">{item.label}</span>
          </a>
        )
      })}
    </nav>
  )
}

export default BottomNav
