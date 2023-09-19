import './InfoEND.css'
import instagram from './assets/instagram.svg'
import twitterX from './assets/twitterX.svg'
import telegram from './assets/telegram.svg' 

export const InfoEND = () => {
  return (
    <>
    <main className='containInfo'>
      <section className='section1'>
      <a href="" target="_blank" rel="noreferrer">
      <div className='Contact'>Contact</div>
      </a>
      <a href="" target="_blank" rel="noreferrer">
      <div className='Contact'>Contact</div>
      </a>
      <a href="" target="_blank" rel="noreferrer">
      <div className='Contact'>Contact</div>
      </a>
      </section>

      <section className='section2'>
      <a href="" target="_blank" rel="noreferrer">
          <img src={instagram} className="logos" alt="Instagram logo" />
      </a>

      <a href="" target="_blank" rel="noreferrer">
          <img src={twitterX} className="logos" alt="TwitterX logo" />
      </a>  

      <a href="" target="_blank" rel="noreferrer">
          <img src={telegram} className="logos" alt="Telegram logo" />
      </a>
      </section>

    </main>
    </>
  )
}
