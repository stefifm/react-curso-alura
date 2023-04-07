import './CampoTexto.css'

function CampoTexto(datosExternos) {
  const placeholderUpdated = `${datosExternos.placeholder}...`
  return (
    <div className='campo-texto'>
      <label htmlFor=''>{datosExternos.title}</label>
      <input
        type='text'
        placeholder={placeholderUpdated}
      />
    </div>
  )
}

export default CampoTexto
