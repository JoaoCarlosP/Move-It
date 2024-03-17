'use client'

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import useChallenges from './ChallengesContext'

interface ICountdownContext {
  minutes: number
  seconds: number
  isActive: boolean
  hasFinished: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

const CountdownContext = createContext({} as ICountdownContext)

let countdownTimeout: NodeJS.Timeout

export function CountdownProvider ({ children }: { children: ReactNode }) {
  const { startNewChallenge } = useChallenges()

  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountdown () {
    setIsActive(true)
  }

  function resetCountdown () {
    setIsActive(false)
    clearTimeout(countdownTimeout)
    setTime(25 * 60)
    setHasFinished(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(prev => prev - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time, startNewChallenge])

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      isActive,
      hasFinished,
      startCountdown,
      resetCountdown,
    }}>
      {children}
    </CountdownContext.Provider>
  )
}

export default function useCountdown () {
  const context = useContext(CountdownContext)

  if (context === undefined) {
    throw new Error('Error: useCountdown mus be used inside CountdownContext')
  }

  return context
}
