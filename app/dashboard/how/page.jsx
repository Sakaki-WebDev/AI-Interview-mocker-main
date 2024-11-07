import React from 'react';

function How() {
  return (
    <div>
      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
            Step by Step Guide:
          </h1>
          <p className='mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
            A quick guide to improve your experience using Intervu
          </p>

          <div className=' py-8 mt-16 mx-auto text-center  md:max-w-screen-md lg:max-w-screen-lg lg:px-36 '>
            <div className='flex flex-wrap items-center mt-8 text-gray-800 text-xl sm:justify-between '>
              <div className=' border rounded-2xl bg-purple-100'>
                <ul>
                  <li className='mb-10 p-5 text-left'>
                    <strong>1. </strong>
                    If you are reading this, then you ahve already successfully
                    created an account and logged in. The first step on our
                    journey is to navigate to the <strong>"Dashboard"</strong>.
                    This can be done by clicking on the
                    <strong> "Dashboard" </strong> at the top of the page, you
                    will see the navigation links: move your mouse over
                    <strong>"Dashboard"</strong> and click to navigate to it
                  </li>
                  <li className='mb-10 p-5 text-left'>
                    <strong>2. </strong>
                    Once on the Dashboard page, you can click on the + Add New
                    button. This will open a pop up window titled
                    <strong> "Tell us more about your job interview". </strong>
                    You need to provide details of your job interview, the job
                    role or position, job description and your years of
                    experience in this role. Once its fully filled in click the{' '}
                    <strong>"Start interview"</strong> button.
                  </li>
                  <li className='mb-10 p-5 text-left'>
                    <strong>3. </strong>
                    If you have successfully completed the previous steps you
                    should now be directed to a new page titled:
                    <strong>
                      <i> "Lets Get Started". </i>
                    </strong>
                    This page will display the info you have filled into the
                    form on the previous page, a pink info box and a web cam
                    picture.
                    <p>
                      <strong> Important: </strong>
                      <mark>
                        Make sure to click on the enable web cam and microphone
                        button before clicking the
                        <strong> "Start Interview" </strong> button.
                      </mark>
                    </p>
                  </li>
                  <li className='mb-10 p-5 text-left'>
                    <strong>4. </strong>
                    Now you will be directed to the interview page. It will show
                    your webcam open on the right of the screen, and the 5
                    questions on the left of the screen. Now you should read
                    each question, then click the record answer button and say
                    your answer outloud to be recorded. Afterwhich you should
                    click next question. The app will take your answers and once
                    the interview is over, it will collate your answers and
                    present feedback helping you to improve your interviewing
                    skills.
                    <p>
                      <strong>Important: </strong>
                      <mark>
                        Make sure to click on the enable web cam and microphone
                        button before clicking the
                        <strong> "Start Interview"</strong> button. Make sure to
                        speak clearly and not to pause between sentences for too
                        long, as the app is designed to stop recording
                        automatically after your finish saying your answer.
                      </mark>
                    </p>
                  </li>
                </ul>
                <h1 className='text-2xl text-primary w-full text-center mt-8 mb-8 p-5 '>
                  <strong>
                    We hope you enjoy Intervu and wish you the best of luck with
                    your future job interviews!
                  </strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default How;
