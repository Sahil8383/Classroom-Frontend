import React from "react";

const Questions = () => {
  return (
    <>
      <div className=" h-[100%] w-[100%] overflow-auto space-y-4 p-4">
        <div class=" w-[500px] bg-white p-6 rounded-md shadow-md">
          <h2 class="text-2xl font-bold mb-4">
            What is the Square root of 4?
          </h2>

          <form>
            <div class="mb-4">
              <input
                type="radio"
                id="paris"
                name="capital"
                value="paris"
                class="mr-2"
              />
              <label for="paris" class="text-gray-800">
                2
              </label>
            </div>

            <div class="mb-4">
              <input
                type="radio"
                id="berlin"
                name="capital"
                value="berlin"
                class="mr-2"
              />
              <label for="berlin" class="text-gray-800">
                4
              </label>
            </div>

            <div class="mb-4">
              <input
                type="radio"
                id="london"
                name="capital"
                value="london"
                class="mr-2"
              />
              <label for="london" class="text-gray-800">
                6
              </label>
            </div>

            <div class="mb-4">
              <input
                type="radio"
                id="madrid"
                name="capital"
                value="madrid"
                class="mr-2"
              />
              <label for="madrid" class="text-gray-800">
                8
              </label>
            </div>
          </form>
        </div>
        <div class=" w-[500px] bg-white p-6 rounded-md shadow-md">
          <h2 class="text-2xl font-bold mb-4">
            What is -4-6+2 ?
          </h2>

          <form>
            <div class="mb-4">
              <input
                type="radio"
                id="paris"
                name="capital"
                value="paris"
                class="mr-2"
              />
              <label for="paris" class="text-gray-800">
                -8
              </label>
            </div>

            <div class="mb-4">
              <input
                type="radio"
                id="berlin"
                name="capital"
                value="berlin"
                class="mr-2"
              />
              <label for="berlin" class="text-gray-800">
                -2
              </label>
            </div>

            <div class="mb-4">
              <input
                type="radio"
                id="london"
                name="capital"
                value="london"
                class="mr-2"
              />
              <label for="london" class="text-gray-800">
                2
              </label>
            </div>

            <div class="mb-4">
              <input
                type="radio"
                id="madrid"
                name="capital"
                value="madrid"
                class="mr-2"
              />
              <label for="madrid" class="text-gray-800">
                8
              </label>
            </div>
          </form>
        </div>
        <div class=" w-[500px] bg-white p-6 rounded-md shadow-md">
          <h2 class="text-2xl font-bold mb-4">
            What is a Quadratic Equation?
          </h2>

          <form>
            <div class="mb-4">
              <input
                type="radio"
                id="paris"
                name="capital"
                value="paris"
                class="mr-2"
              />
              <label for="paris" class="text-gray-800">
                ax^2+bx+c=0
              </label>
            </div>

            <div class="mb-4">
              <input
                type="radio"
                id="berlin"
                name="capital"
                value="berlin"
                class="mr-2"
              />
              <label for="berlin" class="text-gray-800">
                ax^2+bx+c=1
              </label>
            </div>

            <div class="mb-4">
              <input
                type="radio"
                id="london"
                name="capital"
                value="london"
                class="mr-2"
              />
              <label for="london" class="text-gray-800">
                ax^2+bx+c=2
              </label>
            </div>

            <div class="mb-4">
              <input
                type="radio"
                id="madrid"
                name="capital"
                value="madrid"
                class="mr-2"
              />
              <label for="madrid" class="text-gray-800">
                ax^2+bx+c=3
              </label>
            </div>
          </form>
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Questions;
