import React, { useEffect } from "react";
import { useState } from "react";


const optionsQ1 = [
  { id: 1, text: "2" },
  { id: 2, text: "4" },
  { id: 3, text: "6" },
  { id: 4, text: "10" },
];

const optionsQ2 = [
  { id: 1, text: "-8" },
  { id: 2, text: "-2" },
  { id: 3, text: "-10" },
  { id: 4, text: "8" },
];

const optionsQ3 = [
  { id: 1, text: "ax^2+bx+c=0" },
  { id: 2, text: "ax^2+bx+c=1" },
  { id: 3, text: "ax^2+bx+c=2" },
  { id: 4, text: "ax^2+bx+c=3" },
];


const Questions = () => {

  const correctAnswers = ["2", "-8", "ax^2+bx+c=0"];
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSelect = (answer) => {
    setSelectedAnswer(answer);
  }

  return (
    <>
      <div className=" h-[100%] w-[100%] overflow-auto space-y-4 p-4">
        <div class=" w-[800px] bg-white p-6 rounded-md shadow-md">
          <h2 class="text-2xl font-bold mb-4">
            What is the Square root of 4?
          </h2>

          {
            optionsQ1.map((option) => (
              <div class="mb-4">
                <button
                  type="radio"
                  id="paris"
                  name="capital"
                  value={option.text}
                  class="mr-2"
                  className={`mr-2 border-2 rounded-md px-4 py-2 w-full flex justify-items-start  ${
                    selectedAnswer === option.text
                      ? correctAnswers.includes(selectedAnswer)
                        ? 'bg-green-500'
                        : 'bg-red-500'
                      : ''
                  }`}
                  onClick={() => handleSelect(option.text)}
                >
                  {option.text}
                </button>
              </div>
            ))
          }
        </div>
        <div class=" w-[800px] bg-white p-6 rounded-md shadow-md">
          <h2 class="text-2xl font-bold mb-4">
            What is -4-6+2 ?
          </h2>

          {
            optionsQ2.map((option) => (
              <div class="mb-4">
                <button
                  type="radio"
                  id="paris"
                  name="capital"
                  value={option.text}
                  class="mr-2"
                  className={`mr-2 border-2 rounded-md px-4 py-2 w-full flex justify-items-start  ${
                    selectedAnswer === option.text
                      ? correctAnswers.includes(selectedAnswer)
                        ? 'bg-green-500'
                        : 'bg-red-500'
                      : ''
                  }`}
                  onClick={() => handleSelect(option.text)}
                >
                  {option.text}
                </button>
              </div>
            ))
          }
        </div>
        <div class=" w-[800px] bg-white p-6 rounded-md shadow-md">
          <h2 class="text-2xl font-bold mb-4">
            What is a Quadratic Equation?
          </h2>

          {
            optionsQ3.map((option) => (
              <div class="mb-4">
                <button
                  type="radio"
                  id="paris"
                  name="capital"
                  value={option.text}
                  class="mr-2"
                  className={`mr-2 border-2 rounded-md px-4 py-2 w-full flex justify-items-start  ${
                    selectedAnswer === option.text
                      ? correctAnswers.includes(selectedAnswer)
                        ? 'bg-green-500'
                        : 'bg-red-500'
                      : ''
                  }`}
                  onClick={() => handleSelect(option.text)}
                >
                  {option.text}
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Questions;
