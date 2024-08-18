import React from 'react';


const Experience = () => {
    const experiences = [
        {id: 1, title: 'Experience 1', description: 'Detailsfff fjdknen erbrfdjfddf dfbfdbfdn dhsjdsjds dwsjds ekrtkj erkreker ejrre about experience 1'},
        {id: 2, title: 'Experience 2', description: 'Details about experience 2'},
        {id: 3, title: 'Experience 3', description: 'Details about experience 3'}
    ];

    return (
       <div className='min-h-screen flex flex-col itemss-center justify-center m-auto mx-auto my-72'>
         <div className='flex flex-col items-center justify-center gap-4 text-white mb-16'>
                <div className='font-bold text-4xl'>My Experiences</div>
                <div>My Experiences span across industries</div>

            </div>
        <div className='mx-auto relative w-4/5 min-h-screen items-center'>
            {experiences.map((experience, index) => (
                <div key={experience.id}
                className={`flex items-center w-1/2 ${
                    index % 2 === 0 ? 'justify-end text-right' : 'justify-start text-left ml-auto'
                }`}
                >
                    <div className='relative w-[100%] h-40 z-10 bg-gray-100 p-4 mx-8 my-4 rounded-lg shadow-md'>
                        <h3 className='text-xl font-bold'>{experience.title}</h3>
                        <p className='mt-2'>{experience.description}</p>
                    </div>
                    <div className='absolute left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center z-20'>
                       <span>0{experience.id}</span>
                    </div>
                </div>
            ))}
            <div className='absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-500 transform -translate-x-1/2'></div>
        </div>
       </div>
    )
}


export default Experience;
