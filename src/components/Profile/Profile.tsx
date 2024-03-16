import Image from 'next/image'
import React from 'react'
import styles from './Profile.module.css'

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <Image
        src='https://github.com/JoaoCarlosP.png'
        alt='João Carlos'
        height={90}
        width={90}
      />

      <div>
        <strong>João Carlos</strong>
        <p>
          <Image
            src="icons/level.svg"
            alt="Level icon"
            height={16}
            width={16}
          />
          Level 1
        </p>
      </div>
    </div>
  )
}

export default Profile