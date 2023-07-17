import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';
import Link from 'next/link';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    const lightMode = localStorage.getItem('theme') === 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else if (lightMode) {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSystemThemeChange = () => {
    let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
        {children}
      </div>
      <section className="mt-12 flex-row text-center">
        <Link href={'/contact'}>
          <span
            className={
              'mx-2 py-1 px-2 cursor-pointer hover:bg-primary' +
              ' transition-all duration-500'
            }
          >
            Contact Us
          </span>
        </Link>{' '}
        |{' '}
        <Link className={'hover:underline'} href={'/privacy'}>
          <span
            className={
              'mx-2 py-1 px-2 cursor-pointer hover:bg-primary' +
              ' transition-all duration-500'
            }
          >
            Privacy Policy
          </span>
        </Link>{' '}
        |{' '}
        <Link className={'hover:underline'} href={'/terms'}>
          <span
            className={
              'mx-2 py-1 px-2 cursor-pointer hover:bg-primary' +
              ' transition-all duration-500'
            }
          >
            Terms of Service
          </span>
        </Link>
      </section>
    </div>
  );
}
