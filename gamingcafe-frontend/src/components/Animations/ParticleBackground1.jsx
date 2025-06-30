import React from "react";
import Particles from "react-tsparticles";
import particle1 from "../config/particle1";
import { useParams } from "react-router-dom";
const ParticlesBackground1 = () => {
    return  ( <Particles params={particle1}/> );

   
};

export default ParticlesBackground1;