import Awards from '../components/Awards'
import Certifications from '../components/Certifications'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProfilePage from '../components/ProfileSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

const Index = () => {
  return (
    <>
    <div className="bg-main font-['Poppins'] overflow-hidden">
    <Header />
        <HeroSection/>
        <ProfilePage />
        <SkillsSection />
        <ProjectsSection />
        <Experience />
        <Certifications />
        <Awards />
        <Footer />
        </div>
    </>
  )
}

export default Index