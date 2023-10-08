import React from 'react'

export default function Contributors() {

  const contributors = [
    {
      username: 'Awais Nazir',
      avatarUrl: 'https://avatars.githubusercontent.com/u/113518103?v=4',
    },
    {
      username: 'Faareh Ahmed',
      avatarUrl: 'https://avatars.githubusercontent.com/u/122796902?v=4',
    },
    {
      username: 'Malik Shahzaib',
      avatarUrl: 'https://avatars.githubusercontent.com/u/123496357?v=4',
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">CONTRIBUTORS</h1>

      <div className="h-screen flex flex-col justify-center bg-red-400">
        {/* <h1 className="text-2xl font-bold mb-4">CONTRIBUTORS</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-1/2 bg-slate-500">
          {contributors.map((contributor) => (
            <div key={contributor.username} className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center ">
              <img
                src={contributor.avatarUrl}
                alt={`${contributor.username}'s avatar`}
                className="w-1/4 h-2/6 rounded-full mx-auto mb-2"
              />

              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-2/3">
                {contributor.username}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
