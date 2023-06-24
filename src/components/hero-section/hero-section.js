import Pic from '../../assets/image.png'

export default function HeroSection() {
  return (
    <>
        <div className="px-32">
            <img src={Pic} alt="Anshuman" className='rounded-full w-[150px] p-4'/>
            <h1 className='text-5xl font-bold'>Anshuman Dhiman, founder <br/> developer and designer </h1>
            <br/>
            <p className='text-xl'>I am a full stack developer and designer. I love to build things that are useful and beautiful.</p>
        </div>

    </>
  )
}
