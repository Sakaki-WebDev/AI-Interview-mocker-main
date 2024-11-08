'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModal';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

function RecordAnswerSection({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) {
  const [userAnswer, setUserAnswer] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: false,
    useLegacyResults: false,
  });

  useEffect(() => {
    results?.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer?.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    console.log(userAnswer);
    setLoading(true);
    const feedbackPrompt =
      'Question:' +
      mockInterviewQuestion[activeQuestionIndex]?.question +
      ', User Answer:' +
      userAnswer +
      ',Depends on question and user answer for give interview question ' +
      ' please give us rating for answer and feedback as area of improvmenet if any ' +
      'in just 3 to 5 lines to improve it in JSON format with rating field and feedback field';

    const result = await chatSession.sendMessage(feedbackPrompt);
    const mockJsonResp = result.response
      .text()
      .replace('```json', '')
      .replace('```', '');
    const JsonFeedbackResp = JSON.parse(mockJsonResp);
    const resp = await db.insert(UserAnswer).values({
      mockIdRef: interviewData?.mockId,
      question: mockInterviewQuestion[activeQuestionIndex]?.question,
      correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns: userAnswer,
      feedback: JsonFeedbackResp?.feedback,
      rating: JsonFeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD-MM-yyyy'),
    });

    if (resp) {
      toast('User Answer recorded successfully');
      setUserAnswer('');
      setResults([]);
    }
    setResults([]);

    setLoading(false);
  };

  {
    /*      
  // NEW CODE TO REPLACE COMMENTED OUT CODE TO FIX THE ERROR
  const UpdateUserAnswer = async () => {
    console.log('User answer:', userAnswer);
    setLoading(true);

    const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, User Answer: ${userAnswer}.
  Please give us a rating for the answer and provide feedback (3-5 lines) on areas for improvement in JSON format with "rating" and "feedback" fields.`;

    try {
      // Send the prompt and get the response
      const result = await chatSession.sendMessage(feedbackPrompt);
      const responseText = await result.response.text();
      console.log('Raw response text:', responseText);

      // Use regex to extract JSON content
      const jsonMatch = responseText.match(/\{.*\}/s); // Adjust if JSON is in a different structure
      const mockJsonResp = jsonMatch ? jsonMatch[0] : null;

      if (!mockJsonResp) {
        console.error('No valid JSON found in the response.');
        toast.error('Error: Invalid response format from AI.');
        setLoading(false);
        return;
      }

      // Parse JSON response
      const JsonFeedbackResp = JSON.parse(mockJsonResp);
      console.log('Parsed JSON feedback response:', JsonFeedbackResp);

      // Insert into database
      const resp = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: JsonFeedbackResp.feedback,
        rating: JsonFeedbackResp.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-yyyy'),
      });

      if (resp) {
        toast.success('User Answer recorded successfully');
        setUserAnswer('');
        setResults([]);
      }
    } catch (error) {
      console.error('Error parsing JSON response:', error);
      toast.error('Error: Unable to parse response from AI.');
    } finally {
      setResults([]);
      setLoading(false);
    }
  };  */
  }

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col mt0 justify-center items-center bg-black rounded-lg p-5'>
        <Image
          src={'/webcam.png'}
          width={50}
          height={150}
          className='absolute'
        />
        <Webcam
          mirrored={true}
          style={{
            height: 100,
            width: 200,
            zIndex: 10,
          }}
        />
      </div>
      <Button
        disabled={loading}
        variant='outline'
        className='my-10'
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
            <StopCircle />
            Stop Recording
          </h2>
        ) : (
          <h2 className='text-primary flex gap-2 items-center'>
            <Mic /> Record Answer
          </h2>
        )}
      </Button>
    </div>
  );
}

export default RecordAnswerSection;
