import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises.js';
import HeroBanner from '../components/HeroBanner.js';
import SearchExercises from '../components/SearchExercises.js';

const Home = () => {

    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

    console.log(bodyPart)

    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} />
            <Exercises
                exercises={exercises} />
                setExercises={setExercises}
                bodyPart={bodyPart}
        </Box>
    )
}

export default Home