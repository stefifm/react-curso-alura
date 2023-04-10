import './Footer.css'

function Footer() {
  return (
    <footer
      className='footer'
      style={{ backgroundImage: 'url(/img/footer.png)' }}>
      <div className='redes'>
        <a href='https://www.linkedin.com/in/stefania-bruera'>
          <img
            src='/img/linkedin.png'
            alt='Linkedin'
          />
        </a>
        <a href='https://twitter.com/stefifm'>
          <img
            src='/img/twitter.png'
            alt='twitter'
          />
        </a>
        <a href='https://www.instagram.com/bruerastefania'>
          <img
            src='/img/instagram.png'
            alt='instagram'
          />
        </a>
      </div>
      <img
        src='/img/Logo.png'
        alt='org'
      />
      <strong>Desarrollado por Stefania Verónica Bruera</strong>
    </footer>
  )
}

export default Footer
