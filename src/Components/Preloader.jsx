import React from 'react';
import Lottie from 'react-lottie'; // Importing Lottie
import animationData from '../assets/lottie/Animation - 1741931432560.json'; // Import the animation file

import Logo from "../assets/images/logo.png"
function Preloader() {
      const options = {
    loop: true, // Whether the animation should loop
    autoplay: true, // Whether the animation should start automatically
    animationData: animationData, // The animation data imported earlier
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Controls the animation size
    },
  };
  return (
    <div>

<section className="flex flex-col items-center justify-center">
      <Lottie options={options} height={100} width={100} />
    <img src={Logo} alt="" className="max-w-[120px]  " />
</section>

    </div>
  )
}

export default Preloader