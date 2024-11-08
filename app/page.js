import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Header from './dashboard/_components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
          <a
            href='#'
            className='inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
            role='alert'
          >
            <span className='text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3'>
              More Content From
            </span>{' '}
            <span className='text-sm font-medium'>Sakaki Lab.</span>
            <svg
              className='ml-2 w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </a>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
            Welcome to Inter-u
          </h1>
          <p className='mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
            Your interview, reimagined.
          </p>
          <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
            Intelligent AI generated Interview Practice for serious contenders.{' '}
          </p>
          <div className='flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
            <a
              href='/dashboard'
              className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
            >
              Get Started
              <svg
                className='ml-2 -mr-1 w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a>
            <a
              href='/dashboard/how'
              className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
            >
              <svg
                width='35'
                height='35'
                viewBox='0 0 24 24'
                className='mr-2'
                fill='#343C54'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.9201 10.4379C10.9201 9.84143 11.4036 9.35792 12 9.35792C12.5965 9.35792 13.08 9.84143 13.08 10.4379C13.08 10.8035 12.8989 11.127 12.6182 11.3236C12.3475 11.5131 12.0204 11.7662 11.7572 12.0841C11.491 12.4055 11.25 12.8426 11.25 13.3841C11.25 13.7983 11.5858 14.1341 12 14.1341C12.4142 14.1341 12.75 13.7983 12.75 13.3841C12.75 13.3091 12.7807 13.1999 12.9125 13.0408C13.0471 12.8782 13.2442 12.7164 13.4785 12.5523C14.143 12.0871 14.58 11.3136 14.58 10.4379C14.58 9.01301 13.4249 7.85792 12 7.85792C10.5751 7.85792 9.42006 9.01301 9.42006 10.4379C9.42006 10.8521 9.75584 11.1879 10.1701 11.1879C10.5843 11.1879 10.9201 10.8521 10.9201 10.4379Z'
                  fill='#343C54'
                />
                <path
                  d='M11.9993 14.6421C11.5851 14.6421 11.2493 14.9779 11.2493 15.3921C11.2493 15.8063 11.5851 16.1421 11.9993 16.1421C12.4135 16.1421 12.75 15.8063 12.75 15.3921C12.75 14.9779 12.4135 14.6421 11.9993 14.6421Z'
                  fill='#343C54'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z'
                  fill='#343C54'
                />
              </svg>
              More Info
            </a>
          </div>
          <div className='px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36'>
            <span className='font-semibold text-gray-400 uppercase'>
              Brought to you by Sakaki Lab.
            </span>
            <span className='ml-5 font-semibold text-gray-400 uppercase'>
              Feel free to check us out via the links below
            </span>
            <div className=' justify-center items-center mt-20 text-gray-500 sm:justify-between grid grid-flow-col'>
              <a
                href='https://github.com/Sakaki-WebDev'
                target='_blank'
                className='ml-36 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400'
              >
                Github
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='100'
                  height='100'
                  viewBox='0 0 50 50'
                >
                  <path d='M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z'></path>
                </svg>
              </a>
              <a
                href='https://sakaki-lab-dev.vercel.app/'
                target='_blank'
                className='mr-36 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400'
              >
                Portfolio
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='100'
                  height='100'
                  viewBox='0 0 64 64'
                >
                  <path d='M 45 7 A 8 8 0 0 0 38.90625 20.169922 L 33.279297 29.115234 L 21.707031 29.886719 A 8 8 0 0 0 14 24 A 8 8 0 0 0 14 40 A 8 8 0 0 0 21.714844 34.113281 L 33.279297 34.884766 L 38.90625 43.830078 A 8 8 0 0 0 45 57 A 8 8 0 0 0 45 41 A 8 8 0 0 0 42.550781 41.388672 L 38.287109 32 L 42.552734 22.607422 A 8 8 0 0 0 45 23 A 8 8 0 0 0 45 7 z'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
