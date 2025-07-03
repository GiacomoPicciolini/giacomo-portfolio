import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/core'
import styles from './style.module.scss'
import { ProtectedForm } from '@/features'
import Link from 'next/link'
import { E_ROUTES } from '@/shared'
import { CloseButton} from "@/shared/ui/close-button";

export default async function SignIn() {
  const session = await getServerSession(authOptions)
  const cookieStore = await cookies()


  if (session) {
    redirect('/')
  }

  const csrfTokenCookie = `${
    process.env.NODE_ENV == 'production' ? '__Host-' : ''
  }next-auth.csrf-token`
  const csrfToken = cookieStore.get(csrfTokenCookie)?.value.split('|')[0]

  return (
    <div className={styles.main}>
      <div className={styles.closeButtonWrapper}>
        <CloseButton
          href={E_ROUTES.HOME}
          className="menuButtonBlack"
          iconClassName="burgerMenuIcon"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>This Project is confidential</h2>
          <p className={styles.description}>Please enter the password to see more</p>
          <ProtectedForm csrfToken={csrfToken} />
          <div className={styles.warning}>
            <Link href={E_ROUTES.HOME} className={styles.cancelLink}>
              Cancel
            </Link>
            <a className={styles.text} href="mailto:giacomo.picciolini3@gmail.com">
              giacomo.picciolini3@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
