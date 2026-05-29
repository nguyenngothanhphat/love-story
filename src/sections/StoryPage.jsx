import { useState } from 'react'
import {
  bottomNavItems,
  heartItems,
  loveTraits,
  memories,
  timelineItems,
} from '../data/storyData'
import BottomNav from '../layout/BottomNav'
import TopBar from '../layout/TopBar'
import FinalSection from './FinalSection'
import GallerySection from './GallerySection'
import LetterSection from './LetterSection'
import SurpriseSection from './SurpriseSection'
import TimelineSection from './TimelineSection'
import TraitsSection from './TraitsSection'
import WelcomeSection from './WelcomeSection'

function StoryPage({ onGoHome, onOpenHugGame, onOpenLetters, onOpenGame }) {
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const [poppedHearts, setPoppedHearts] = useState([])

  const handlePopHeart = (index) => {
    setPoppedHearts((prev) => (prev.includes(index) ? prev : [...prev, index]))
  }

  const storyNavItems = bottomNavItems.map((item) => {
    if (item.label === 'Home') return { ...item, onClick: onGoHome }
    if (item.label === 'Stories') return { ...item, onClick: onOpenHugGame }
    if (item.label === 'Game') return { ...item, onClick: onOpenGame }
    if (item.label === 'Letters') return { ...item, onClick: onOpenLetters }
    return item
  })

  return (
    <div className="bg-background pb-24 font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <TopBar />

      <main className="overflow-x-hidden pt-16">
        <WelcomeSection />
        <TimelineSection items={timelineItems} />
        <GallerySection memories={memories} />
        <TraitsSection traits={loveTraits} />
        <LetterSection isOpen={isLetterOpen} onToggle={() => setIsLetterOpen((prev) => !prev)} />
        <SurpriseSection hearts={heartItems} poppedHearts={poppedHearts} onPop={handlePopHeart} />
        <FinalSection />
      </main>

      <BottomNav items={storyNavItems} />
    </div>
  )
}

export default StoryPage
