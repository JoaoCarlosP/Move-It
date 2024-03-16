import styles from './ExperienceBar.module.css'
import React from 'react'

function ExperienceBar () {
  return (
    <header className={styles.experienceBar}>
      <span>0 px</span>

      <div>
        <div style={{ width: '50%' }}/>

        <span className={styles.currentExperience} style={{ left: '50%' }}>
          300px
        </span>
      </div>

      <span>600 px</span>
    </header>
  )
}

export default ExperienceBar
