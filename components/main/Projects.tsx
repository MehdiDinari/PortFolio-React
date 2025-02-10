import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
                <ProjectCard
                    src='/1.png'
                    title='RealTime Chat app'
                    description='A Realtime app chat made with django and HTMX'
                    link='https://github.com/MehdiDinari/Chat-App'
                />
                <ProjectCard
                    src='/2.png'
                    title='Breast Cancer Prediction'
                    description='Detecting breast cancer with sk-learn.'
                    link='https://github.com/MehdiDinari/Breast-Cancer-Predict'
                />
                <ProjectCard
                    src='/3.png'
                    title='A Hand shape detector app'
                    description='I trained models to detect hands shape.'
                    link='https://github.com/MehdiDinari/Hand-Shape-Detection'
                />
                <ProjectCard
                    src='/4.png'
                    title='Email Filter'
                    description='A simple and fonctional Spam detector.'
                    link='https://github.com/MehdiDinari/Email-Filter'
                />
                <ProjectCard
                    src='/5.png'
                    title='Diabete Detection system'
                    description='A django app to analyse and detect diabete.'
                    link='https://github.com/MehdiDinari/Diabetes-Prediction-System'
                />
                <ProjectCard
                    src='/6.png'
                    title='A Portfolio'
                    description='A python reflex portfolio.'
                    link='https://portfo-navy-orca.reflex.run/'
                />
               
            </div>
        </div>
    );
};

export default Projects;
