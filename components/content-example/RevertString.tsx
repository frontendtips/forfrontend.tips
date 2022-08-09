import React, { FC, useState } from 'react'

export const RevertString: FC = () => {
  const [value, setValue] = useState('')

  const revertText = (text: string) => {
    // 1. Split a string to convert it to an array
    const splitText = [...text]

    // 2. Reverse array using reverse() method
    const reversedText = splitText.reverse()

    // 3. Join array
    const joinedText = reversedText.join('')

    return joinedText
  }

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setValue(value || '')
  }

  return (
    <div className="revertString">
      <div className="flex items-center relative">
        <input
          value={value}
          onChange={handleChangeValue}
          type="text"
          className="bg-gray-50 border m-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Introduce un texto"
        />
        {value && (
          <button
            onClick={() => setValue('')}
            className="absolute flex w-8 rounded-full justify-center border border-gray-300 font-bold h-8  right-3 hover:bg-red-100 hover:text-red-400 hover:border-red-300 z-10"
          >
            &#88;
          </button>
        )}
      </div>
      {value && (
        <div className="bg-gray-100 p-4 rounded-lg">
          👉🏻 <span className="text-xl font-bold">{revertText(value)}</span>
        </div>
      )}
    </div>
  )
}
