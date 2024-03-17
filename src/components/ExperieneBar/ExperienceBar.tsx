'use client'

import useChallenges from '@/hooks/ChallengesContext'
import styles from './ExperienceBar.module.css'
import React from 'react'

function ExperienceBar () {
  const { currentExperience, experienceToNextLevel } = useChallenges()

  const percentageToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel)

  return (
    <header className={styles.experienceBar}>
      <span>0 px</span>

      <div>
        <div style={{ width: `${percentageToNextLevel}%` }}/>

        <span className={styles.currentExperience} style={{ left: `${percentageToNextLevel}%` }}>
          {currentExperience} px
        </span>
      </div>

      <span>{experienceToNextLevel} px</span>
    </header>
  )
}

export default ExperienceBar
