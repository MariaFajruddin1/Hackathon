import Image from 'next/image'
import NavBar from '@/components/navBar'
import Header from '@/components/header'
import SectionOne from '@/components/sectionOne'
import SectionTwo from '@/components/sectionTwo'
import SectionThree from '@/components/sectionThree'
import SectionFour from '@/components/sectionFour'
import SectionFive from '@/components/sectionFive'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <div className='container 2xl:px-8 xl:px-4'>
        <NavBar />
        <Header />
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <Footer/>
      </div>
    </>
  )
}
