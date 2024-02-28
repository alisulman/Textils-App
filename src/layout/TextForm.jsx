import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

function TextForm({ showAlert, mode }) {
  const [text, setText] = useState('')

  // important logic 
  const handleOn = (e) => {
    setText(e.target.value)
  }

  // logics here 
  const handleUp = () => {
    let texts = document.querySelector('#texterabox').value;
    if (texts === '') {
      showAlert('danger', 'Please fill the textera first')
    } else {
      let newText = text.toUpperCase();
      setText(newText)
      showAlert('success', 'Below text is in uppercase now!')
    }
  }
  const handleLow = () => {
    let texts = document.querySelector('#texterabox').value;
    if (texts === '') {
      showAlert('danger', 'Please fill the textera first')
    } else {
      let newText = text.toLowerCase()
      setText(newText)
      showAlert('success', 'Below text is in lowercase now!')
    }
  }
  const handleCap = () => {
    let texts = document.querySelector('#texterabox').value;
    if (texts === '') {
      showAlert('danger', 'Please fill the textera first')
    } else {
      showAlert('success', 'Below text is capitalize now!')
      let capitalize = (word) => {
        return word.split(' ').map(letters => letters.charAt(0).toUpperCase() + letters.slice(1).toLowerCase()).join(' ')
      }
      let newText = capitalize(text)
      setText(newText)
    }
  }

  const handleRES = () => {
    let texts = document.querySelector('#texterabox').value;
    if (texts === '') {
      showAlert('danger', 'Please fill the textera first')
    } else {
      let newText = text.split(/[ ]+/)
      setText(newText.join(' ').trim())
      showAlert('success', 'Extra spaces in below text is removed now!')
    }
  }

  const handleCC = () => {
    let texts = document.getElementById('texterabox').value;
    if (texts === '') {
      showAlert('danger', 'Please fill the textera first')
    } else {
      navigator.clipboard.writeText(texts)
      showAlert('success', 'Below text is copied to clipboard now!')
    }
  }

  const handleC = () => {
    let texts = document.querySelector('#texterabox').value;
    if (texts === '') {
      showAlert('danger', 'Please fill the textera first')
    } else {
      setText('')
      showAlert('success', 'Below text is clear now!')
    }
  }

  // local logics 
  let wordL = text.split(/\s+/).filter((elment) => {return elment.length != 0}).length
  let letterL = text.length
  let minTim = wordL * 0.00420168067

  return (
    <>
      <Form className='position-absolute top-20 left-14 w-75'>
        <Form.Group className="mb-3 container" controlId="texterabox">
          <Form.Label className={`fs-2 fw-medium h-hover text-${mode === 'colorOne' ? 'dark' : 'light'}`} l>Enter your text for analyze below: </Form.Label>
          <Form.Control as="textarea" rows={5} value={text} onChange={handleOn} />
          <Button variant={mode === 'colorOne' ? 'dark' : 'light'} className='fw-medium m-1' onClick={handleUp}>UpperCase </Button>
          <Button variant={mode === 'colorOne' ? 'dark' : 'light'} className='fw-medium m-1' onClick={handleLow}>LowerCase </Button>
          <Button variant={mode === 'colorOne' ? 'dark' : 'light'} className='fw-medium m-1' onClick={handleCap}>Capitalize </Button>
          <Button variant={mode === 'colorOne' ? 'dark' : 'light'} className='fw-medium m-1' onClick={handleRES}>Remove Extra Space </Button>
          <Button variant={mode === 'colorOne' ? 'dark' : 'light'} className='fw-medium m-1' onClick={handleCC}>Copy to Clipboard </Button>
          <Button variant={mode === 'colorOne' ? 'dark' : 'light'} className='fw-medium m-1' onClick={handleC}>Clear </Button>
        </Form.Group>
        <div className={`text-${mode === 'colorOne' ? 'dark' : 'light'}`}>
          <div className="h3 px-2 h-hover">Preview</div>
          <ul>
            <li> {wordL} Word(s).</li>
            <li> {letterL} Letter(s).</li>
            <li>You can read above text in  {minTim} Minute(s).</li>
          </ul>
        </div>
      </Form>
    </>
  );
}

export default TextForm;