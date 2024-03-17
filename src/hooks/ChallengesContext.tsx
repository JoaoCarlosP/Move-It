'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'

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
  activeChallenge: IChallenge | null
  resetChallenge: () => void
  experienceToNextLevel: number
  completeChallenge: () => void
}

export const ChallengesContext = createContext<IChallengesContextProps>({} as IChallengesContextProps)

interface IChallengesProviderProps {
  children: ReactNode
  level?: number
  currentExperience?: number
  challengesCompleted?: number
}

export function ChallengesProvider ({ children, ...rest }: IChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrenceExperience] = useState(rest.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)

  const [activeChallenge, setActiveChallenge] = useState<IChallenge | null>(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => {
    setLevel(prev => prev + 1)
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge as IChallenge)

    new Audio("/notification.mp3").play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉!', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
  }

  const completeChallenge = () => {
    if (!activeChallenge) return

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrenceExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(prev => prev + 1)
  }

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  return (
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      currentExperience,
      challengesCompleted,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completeChallenge
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