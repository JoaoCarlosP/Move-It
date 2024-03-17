'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import challenges from '../../challenges.json'

interface IChallenge {
  type: 'body' | 'eye' | 'mindfulness'
  description: string
  amount: number
}
interface IChallengesContextProps {
  level: number
  levelUp: () => void
  currentExperience: number
  challengesCompleted: number
  startNewChallenge: () => void
  activeChallenge: IChallenge | null,
  resetChallenge: () => void,
  experienceToNextLevel: number
}

export const ChallengesContext = createContext<IChallengesContextProps>({} as IChallengesContextProps)

export function ChallengesProvider ({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrenceExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState<IChallenge | null>(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => {
    setLevel(prev => prev + 1)
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge as IChallenge)
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      currentExperience,
      challengesCompleted,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel
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