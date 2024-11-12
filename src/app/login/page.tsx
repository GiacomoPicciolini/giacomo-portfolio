import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import styles from './style.module.scss';
import Image from 'next/image';
import PasswordForm from '@/components/Password/Form';
import Link from 'next/link';

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  const cookieStore = cookies();

  if (session) {
    redirect('/');
  }

  const csrfTokenCookie = `${
    process.env.NODE_ENV == 'production' ? '__Host-' : ''
  }next-auth.csrf-token`;
  const csrfToken = cookieStore.get(csrfTokenCookie)?.value.split('|')[0];

  return (
    <main id="top" className={styles.main}>
      <Link scroll={true} className={styles.closebuttonContainer} href='/#hey'>
        <div className={styles.closebutton}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='close'>
              <g mask='url(#mask0_8_56)'>
                <path
                  id='close_2'
                  d='M6.40001 18.3078L5.69226 17.6L11.2923 12L5.69226 6.40001L6.40001 5.69226L12 11.2923L17.6 5.69226L18.3078 6.40001L12.7078 12L18.3078 17.6L17.6 18.3078L12 12.7078L6.40001 18.3078Z'
                />
              </g>
            </g>
          </svg>
        </div>
      </Link>
      <div className={styles.body}>
        <div className={styles.formWrapper}>
          <div className={styles.labelText}>
            <Image src={'/radio.svg'} width={24} height={24} alt='dot' />
            <h2>PROJECT LOCKED</h2>
          </div>
          <div className={styles.description}>
            <p className={styles.big}>
              This project is locked because of Privacy reasons. <br /> Enter
              the password to unlock it.
            </p>
            <p className={styles.small}>
              Entering the password you accept to not share the private
              information presented in the project.
            </p>
          </div>
          <PasswordForm csrfToken={csrfToken} />
          <div className={styles.warning}>
            <div></div>
            <div>
              <p>In case you don’t have the password, please contact me @</p>
              <a
                className={styles.link}
                href='mailto:giacomo.picciolini3@gmail.com'
              >
                <span className={styles.firstImage}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='arrow_forward'>
                      <path
                        id='path'
                        d='M17.1176 17.6088L17.6089 17.6002L17.6089 17.1088V6.89115L17.6089 6.39115L17.1089 6.39115L6.89118 6.39115L6.39987 6.39115L6.39126 6.88238L6.37358 7.89001L6.36465 8.39878L6.8735 8.39878L14.187 8.39878L6.18407 16.4017L5.83052 16.7553L6.18407 17.1088L6.89118 17.816L7.24473 18.1695L7.59829 17.816L15.6012 9.813V17.1265L15.6012 17.6354L16.11 17.6264L17.1176 17.6088Z'
                      />
                    </g>
                  </svg>
                </span>
                <span className={styles.text}>
                  giacomo.picciolini3@gmail.com
                </span>
                <span className={styles.secondImage}>
                  <Image
                    color='white'
                    width={24}
                    height={24}
                    alt='Email'
                    src={'/arrow_forward.svg'}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
