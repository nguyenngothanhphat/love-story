import { useState } from 'react'
import HugGamePage from './sections/HugGamePage'
import LettersPage from './sections/LettersPage'
import StoryPage from './sections/StoryPage'
import TapHeartGamePage from './sections/TapHeartGamePage'

function App() {
  const [screen, setScreen] = useState('story')

  if (screen === 'story') {
    return (
      <StoryPage
        onGoHome={() => setScreen('story')}
        onOpenHugGame={() => setScreen('hug')}
        onOpenLetters={() => setScreen('letters')}
        onOpenGame={() => setScreen('game')}
      />
    )
  }

  if (screen === 'letters') {
    return (
      <LettersPage
        onGoHome={() => setScreen('story')}
        onOpenStories={() => setScreen('hug')}
        onOpenGame={() => setScreen('game')}
      />
    )
  }

  if (screen === 'game') {
    return (
      <TapHeartGamePage
        onGoHome={() => setScreen('story')}
        onOpenStories={() => setScreen('hug')}
        onOpenLetters={() => setScreen('letters')}
      />
    )
  }

  return (
    <HugGamePage
      onGoHome={() => setScreen('story')}
      onOpenStories={() => setScreen('hug')}
      onOpenLetters={() => setScreen('letters')}
      onOpenGame={() => setScreen('game')}
    />
  )
}

export default App
