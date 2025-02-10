import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface Props {
    src: string;
    title: string;
    description: string;
    link: string; // Nouveau prop pour le lien du projet
}

const ProjectCard = ({ src, title, description, link }: Props) => {
    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#1a1a2e]'>
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className='w-full object-cover'
            />
            <div className='relative p-4'>
                <h1 className='text-2xl font-semibold text-white'>{title}</h1>
                <p className='mt-2 text-gray-300'>{description}</p>
                <div className='mt-4'>
                    <Link href={link} passHref>
                        <button className='px-4 py-2 bg-[#4CAF50] text-white rounded-md hover:bg-[#45A049] transition duration-300'>
                            Voir le projet
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
