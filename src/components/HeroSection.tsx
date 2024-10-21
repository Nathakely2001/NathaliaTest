import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import IconArrow from './icons/IconArrow';

const HeroSection: React.FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(1);
  const [topValue, setTopValue] = useState(`calc(35% + ${offset}px)`);
  const [leftValue, setLeftValue] = useState('0');

  // Typing effect state
  const text1 = 'Solutions de développement';
  const text2 = 'rapides et flexibles avec';
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const handleMouseOver = () => {
    console.log('Mouse is over the button!');
    // You can add any additional actions here
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        // Adjust for mobile screens
        setTopValue(`calc(20% + ${offset}px)`);
        setLeftValue('15%'); // Adjust the left value for smaller screens
      } else {
        // Adjust for larger screens
        setTopValue(`calc(35% + ${offset}px)`);
        setLeftValue('0'); // Default left value for larger screens
      }
    };
    // Set initial top value based on screen size
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Animation interval
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + direction;
        if (newOffset >= 20) {
          setDirection(-1);
          return 20; // Upper limit
        }
        if (newOffset <= 0) {
          setDirection(1);
          return 0; // Lower limit
        }
        return newOffset;
      });
    }, 50);

    // Cleanup both interval and event listener on unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [direction, offset]); // Add offset as a dependency to update the top value

  useEffect(() => {
    const typingInterval1 = setInterval(() => {
      if (index1 < text1.length) {
        setDisplayedText1((prev) => prev + text1.charAt(index1));
        setIndex1((prev) => prev + 1);
      } else {
        clearInterval(typingInterval1);
      }
    }, 100); // Adjust the typing speed by changing the interval

    return () => clearInterval(typingInterval1); // Cleanup on unmount
  }, [index1]);

  useEffect(() => {
    const typingInterval2 = setInterval(() => {
      if (index2 < text2.length) {
        setDisplayedText2((prev) => prev + text2.charAt(index2));
        setIndex2((prev) => prev + 1);
      } else {
        clearInterval(typingInterval2);
      }
    }, 100); // Adjust the typing speed by changing the interval

    return () => clearInterval(typingInterval2); // Cleanup on unmount
  }, [index2]);

  return (
    <>
      <div 
        className='flex w-full h-full'
        style={{
          width: '100vw',  
          height: '135vh',
          position: 'relative',
        }}
      >
        <div className='relative py-5 z-10 flex flex-col items-center justify-center mt-0 w-full h-full'>
          <div
            className="absolute left-10"
            style={{
              backgroundImage: 'url(/images/cube-in-left-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '40vw',
              height: '40vh',
              top: topValue, // Use the dynamic top value here
              left: '0',
              animation: 'rotateLeft 5s linear infinite alternate, pause 5s linear infinite alternate 5s',
              backgroundColor: 'transparent',
              opacity: 1,
            }}
          />
          <div
            className="absolute hide-on-mobile left-10"
            style={{
              backgroundImage: 'url(/images/cube-in-right-medium.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '30vw',
              height: '30vh',
              top: `calc(40% + ${offset}px)`,
              left: '68%',
              animation: 'rotateRight 5s linear infinite alternate 5s, pause 5s linear infinite alternate 10s',
              backgroundColor: 'transparent',
              opacity: 1,
            }}
          />
          <div
            className='absolute hide-on-mobile'
            style={{
              backgroundImage: 'url(/images/cube-in-right-medium.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '15vw',
              height: '15vh',
              top: `calc(20% + ${offset}px)`,
              left: '64%',
              animation: 'rotateRight 5s linear infinite alternate 5s, pause 5s linear infinite alternate 10s',
              backgroundColor: 'transparent',
              opacity: 1,
            }}
          />
          <style jsx>{`
            @keyframes rotateLeft {
              0% {
                transform: rotate(0deg) scale(1);
              }
              50% {
                transform: rotate(90deg) scale(1.1);
              }
              100% {
                transform: rotate(180deg) scale(1);
              }
            }

            @keyframes pause {
              0% {
                transform: rotate(180deg) scale(1);
                opacity: 1;
              }
              100% {
                opacity: 0.8;
              }
            }

            @keyframes rotateRight {
              0% {
                transform: rotate(0deg) scale(1);
              }
              50% {
                transform: rotate(90deg) scale(1.1);
              }
              100% {
                transform: rotate(180deg) scale(1);
              }
            }

            @keyframes mobileAnimation {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
              100% {
                transform: translateY(0);
              }
            }

            @media (max-width: 768px) {
              .hide-on-mobile {
                display: none;
              }

              /* Adjust background position for mobile */
              .background-mobile {
                top: calc(50% + ${offset}px); /* Adjust as necessary for mobile */
                animation: mobileAnimation 2s ease-in-out infinite; /* Mobile animation */
              }

              /* Other mobile-specific styles */
              .rotate-animation {
                animation: rotateLeft 3s linear infinite alternate, pause 3s linear infinite alternate 3s;
              }
            }

            @media (min-width: 769px) {
              .rotate-animation {
                animation: rotateLeft 5s linear infinite alternate, pause 5s linear infinite alternate 5s;
              }
            }
          `}</style>

          <div
            className='absolute hide-on-mobile'
            style={{
              backgroundImage: 'url(/images/desktop-background-why-strapi.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '130vw',
              height: '50vh',
              top: `calc(-30% + ${offset}px)`,
              right: '30%',
              animation: 'rotateRight 5s linear infinite alternate 5s, pause 5s linear infinite alternate 10s',
            }}
          />

          <div
            className="absolute left-0"
            style={{
              backgroundImage: 'url(/images/cube-in-left-medium.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '130vw',
              height: '130vh',
              top: `calc(0% + ${offset}px)`,
              left: '-5%',
            }}
          />

          <div
            className='absolute hide-on-mobile'
            style={{
              backgroundImage: 'url(/images/cube-in-right-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '130vw',
              height: '130vh',
              top: `calc(0% + ${offset}px)`,
              left: '36%',
              animation: 'moveDiagonally3 2s ease-in-out infinite, shrink 5s ease-in-out infinite',
            }}
          />

          <div style={{ marginTop: '-100px' }}>
            {isDarkTheme ? (
              <Image 
                alt='dark_mode'
                src='/images/logos/f4d-black.gif'
                height={450}
                width={450}
              />
            ) : (
              <Image 
                alt='dark_mode'
                src='/images/logos/f4d-white.gif'
                height={600}
                width={600}
              />
            )}
          </div>

          <div className='flex flex-col space-y-2 items-center mb-5 mt-5 text-4xl md:text-6xl'>
            <div className='flex flex-row w-full'>
              <div className='flex justify-start'></div>
              <div className='flex flex-col items-center w-full min-w-[300px] md:min-w-[800px] ml-[18px]'>
                <p className='text-center'>
                  <strong>{displayedText1}</strong>
                </p>
                <p className='text-center'>
                  <strong>{displayedText2}</strong>
                </p>
              </div>
            </div>

            <div className='flex space-x-4'>
              <button 
                className={`flex items-center px-5 sm:px-20 py-5 mb-5 mt-5 text-sm tracking-wide text-white bg-none border border-blue-500 rounded-md shrink-0 w-full sm:w-auto rotate-border 
                  shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkTheme ? 'shadow-blue-500' : 'shadow-blue-500'}`}
              >
                <div className='flex items-center'>
                  {isDarkTheme ? (
                    <>
                      <Image 
                        alt='Strapi logo'
                        src='/images/Strapi-logo-white.png'
                        height={100}
                        width={100}
                      />
                      &nbsp;<span style={{ color: 'white' }}>&</span>&nbsp;
                      <Image 
                        alt='Next.js logo'
                        src='/images/Next-JS-logo-white.png'
                        height={100}
                        width={100}
                      />
                    </>
                  ) : (
                    <>
                      <Image 
                        alt='Strapi logo'
                        src='/images/Strapi-logo-black.png'
                        height={100}
                        width={100}
                      />
                      &nbsp;<span style={{ color: 'black' }}>&</span>&nbsp;
                      <Image 
                        alt='Next.js logo'
                        src='/images/Next-JS-logo-black.png'
                        height={100}
                        width={100}
                      />
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
          <p className='text-center text-2xl mx-8 my-5 max-w-lg md:max-w-[800px] text-lg md:text-base'>
            Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.
          </p>

          <button 
            onMouseOver={handleMouseOver} // Add the onMouseOver event
            className={`flex items-center pl-2 py-2 px-3 text-sm tracking-wide transition-all duration-300 bg-blue-800 border border-blue-800 rounded-full shrink-0 sm:w-auto ${isDarkTheme ? "text-white" : "text-black"} 
            hover:bg-blue-600 hover:scale-105 hover:shadow-lg`}
          >
            Demander une démo
            <div className='bg-white rounded-full ml-2 transform -rotate-45'>
              <IconArrow />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
