import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import IconArrow from './icons/IconArrow';

const HeroSection: React.FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(1); // 1 pour descendre, -1 pour monter

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + direction;
        // Change de direction si on atteint une certaine limite
        if (newOffset >= 20) {
          setDirection(-1);
          return 20; // Limite supérieure
        }
        if (newOffset <= 0) {
          setDirection(1);
          return 0; // Limite inférieure
        }
        return newOffset;
      });
    }, 100); // Ajustez la durée pour contrôler la vitesse

    return () => clearInterval(interval); // Nettoie l'intervalle à la désactivation du composant
  }, [direction]);

  return (
    <>
      <div className='flex'>
        <div className='relative z-10 mt-20 flex flex-col items-center justify-center py-5' style={{ height: '50vh' }}>
          
          {/* Image à gauche */}
          <div
            className='absolute left-0'
            style={{
              backgroundImage: 'url(/images/cube-in-right-medium.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '50%', // Ajustez cette valeur selon vos besoins
              height: '50%', // Ajustez cette valeur selon vos besoins
              top: `calc(10% + ${offset}px)`, // Montée et descente
              left: '2%', // Centre cette image
            }}
          />
          
          {/* Image au centre */}
          <div
            className='absolute'
            style={{
              backgroundImage: 'url(/images/cube-in-right-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '50%', // Ajustez cette valeur selon vos besoins
              height: '200%', // Ajustez cette valeur selon vos besoins
              top: `calc(10% + ${offset}px)`, // Montée et descente
              left: '30%', // Centre cette image
              transform: 'translateX(-95%)', // Centre l'image
            }}
          />
   
          {/* Image à droite */}
          <div
            className='absolute'
            style={{
              backgroundImage: 'url(/images/cube-in-right-medium.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '50%', // Ajustez cette valeur selon vos besoins
              height: '50%', // Ajustez cette valeur selon vos besoins
              top: `calc(30% + ${offset}px)`, // Montée et descente
              left: '75%', // Centre cette image
            }}
          />
          
          {/* Image au centre */}
          <div
  className='absolute'
  style={{
    backgroundImage: 'url(/images/cube-in-right-large.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '60%', // Ajustez cette valeur selon vos besoins
    height: '200%', // Ajustez cette valeur selon vos besoins
    top: `calc(-50% + ${offset}px)`, // Ajustez ce chiffre pour modifier le point de départ de la montée
    right: '30%', 
    transform: 'translateX(95%)', // Centre l'image
  }}
/>

   
          <div
            className='absolute'
            style={{
              backgroundImage: 'url(/images/cube-in-right-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '50%', // Ajustez cette valeur selon vos besoins
              height: '100%', // Ajustez cette valeur selon vos besoins
              top: `calc(-10% + ${offset}px)`, // Montée et descente
              left: '60%', // Centre cette image
              transform: 'translateX(-95%)', // Centre l'image
            }}
          />
          
          {/* Image à droite */}
          <div
            className='absolute right-0'
            style={{
              backgroundImage: 'url(/images/cube-in-right-small.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '50%', // Ajustez cette valeur selon vos besoins
              height: '60%', // Ajustez cette valeur selon vos besoins
              top: `calc(-45% + ${offset}px)`, // Montée et descente
              left: '90%',
            }}
          />

          {/* Contenu du Hero Section */}
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

          <div className='flex flex-col space-y-4 items-center text-3xl'>
            <div className='flex flex-row w-full'>
              <div className='flex justify-start'></div>
              <div className='flex flex-col items-center w-full ml-8'>
                <p><strong>Solutions</strong> de développement</p> 
                <p><strong>rapides </strong>et <strong>flexibles</strong> avec</p>
              </div>
            </div>

            <div className='flex space-x-4'>
            <button className='relative flex items-center justify-center px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-transparent border border-blue-500 rounded-md shrink-0 sm:w-auto'>
  {/* Bordure sans animation */}
  <span className='absolute inset-0 rounded-md border-2 border-blue-500'></span>

  {/* Contenu du bouton */}
  <div className='relative z-10 flex items-center'>
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

          <p className='text-center m-5'>
            Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.
          </p>

          <button 
            className={`flex items-center px-5 py-3 m-2 text-sm tracking-wide transition-colors duration-200 bg-blue-500 border border-blue-500 rounded-full shrink-0 sm:w-auto ${isDarkTheme ? "text-white" : "text-black"}`}
          >
            Demander une démo
            <div className='bg-white rounded-full ml-2'>
              <IconArrow />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
