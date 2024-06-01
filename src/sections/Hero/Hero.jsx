import cv from '../../assets/cv neupane.pdf';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import heroImg from '../../assets/hero-img.png';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import moon from '../../assets/moon.svg';
import themeIcom, { default as sun } from '../../assets/sun.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import twitterlight from '../../assets/twitter-light.svg';
import { useTheme } from '../../common/ThemeContext';
import styles from './HeroStyles.module.css';
function Hero(){
  const {theme,toggleTheme}=useTheme();
  const themeIcon = theme === 'light'?sun :moon;
  const xlogo = theme === 'light'? twitterlight :twitterDark;
  const linkedin = theme === 'light'?linkedinLight :linkedinDark;
  const github = theme === 'light'?githubLight :githubDark;

  return <>
   <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img className={styles.hero} src={heroImg} alt="Profile picture of sunil Neupane" />
      <img  className ={styles.colorMode} src={themeIcom} alt="Color Mode Icon" onClick={toggleTheme}/>
    </div>
    <div className={styles.info}>
      <h1>
        Sunil <br />
        Neupane
      </h1>
      <h2>Software Developer </h2>
      <span>
        
      <a href="https://twitter.com/SunilNeupane748" target='_blank'>
          <img src={xlogo} alt="Titter Icon" />
      </a>
        <a href="https://github.com/SunilNeupane77" target='_blank'>
          <img src={github} alt="github icon" />
        </a>
        <a href="https://Linkedin/SunilNeupane" target='_blank'>
          <img src={linkedin} alt="Linkedin Icom" />
        </a>
      </span>
       <p>Developing Modern Apps/Software to solve real world Problems</p>
       <a href={cv}>
        <button className='hover'  download>Resume</button>
       </a>
    </div>

   </section>
  </>
}
export default Hero