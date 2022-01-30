import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import DefaultPicture from '../assets/starlord.png'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

const Freelances = () => {
    return (
        <div>
            <Header/>
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    title={profile.name}
                />
            ))}
        </div>
    );
};
export default Freelances;