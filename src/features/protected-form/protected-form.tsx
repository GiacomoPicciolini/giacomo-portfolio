'use client'

import { ChangeEvent, useState } from 'react'
import styles from './protected-form.module.scss'
import Image from 'next/image'

export function ProtectedForm({ csrfToken }: { csrfToken?: string }) {
  const [password, setPassword] = useState('')
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setPassword(value)

    if (value.length === 15) {
      e?.target?.form?.submit() // Automatically submit the form when 15 characters are reached
    }
  }

  return (
    <form method="post" action="/api/auth/callback/credentials" className={styles.form}>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <div className={styles.inputWrapper}>
        <input
          style={{ width: '100%' }}
          name="password"
          type={isHiddenPassword ? 'password' : 'text'}
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          maxLength={15}
        />

        <button
          className={styles.eyeButton}
          type="button"
          onClick={() => setIsHiddenPassword((prevState) => !prevState)}
        >
          <Image
            src={isHiddenPassword ? '/icons/eye.svg' : '/icons/eye-off.svg'}
            alt="eye"
            width={48}
            height={48}
          />
        </button>
      </div>
    </form>
  )
}
