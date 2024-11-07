import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, Your browser does not support text to speech');
    }
  };
  return Array.isArray(mockInterviewQuestion) &&
    mockInterviewQuestion.length > 0 ? (
    <div className='p-5 border rounded-lg my-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockInterviewQuestion.map((question, index) => (
          <h2
            key={index} // Add a unique key for each mapped item
            className={`p-2 border rounded-full text-xs md:text-sm text-center cursor-pointer ${
              activeQuestionIndex === index ? 'bg-primary text-white' : ''
            }`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>

      {mockInterviewQuestion[activeQuestionIndex] ? (
        <>
          <h2 className='my-5 text-md md:text-lg'>
            {mockInterviewQuestion[activeQuestionIndex]?.question}
          </h2>
          <Volume2
            className='cursor-pointer'
            onClick={() =>
              textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
            }
          />
        </>
      ) : (
        <p className='text-red-500'>No question selected.</p>
      )}

      <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
        <h2 className='flex gap-2 items-center text-primary'>
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <h2 className='text-sm text-primary my-2'>
          {process.env.NEXT_PUBLIC_QUESTION_NOTE ||
            'Note information not available'}
        </h2>
      </div>
    </div>
  ) : (
    <p>Loading interview questions...</p>
  );
}

export default QuestionsSection;
