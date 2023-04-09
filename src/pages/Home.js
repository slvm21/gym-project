import React, {useState} from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExerCises] = useState([]);
  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExerCises={setExerCises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercises 
      exercises={exercises}
      setExerCises={setExerCises}
      bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home