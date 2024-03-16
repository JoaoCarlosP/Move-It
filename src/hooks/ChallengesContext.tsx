'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface IChallengesContextProps {
  level: number
  levelUp: () => void
  currentExperience: number
  challengesCompleted: number
  startNewChallenge: () => void
}

export const ChallengesContext = createContext<IChallengesContextProps>({} as IChallengesContextProps)

export function ChallengesProvider ({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrenceExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const levelUp = () => {
    setLevel(prev => prev + 1)
  }

  const startNewChallenge = () => {
    console.log('new challenge')
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      currentExperience,
      challengesCompleted,
      startNewChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}

export default function useChallenges () {
  const context = useContext(ChallengesContext)

  if (context === undefined) {
    throw new Error('Error: UseChallenges mus be used inside ChallengesContext')
  }

  return context
} 