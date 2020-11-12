const { default: ContactForm } = require('../components/ContactForm')

const Contact = ({ setisHeader, setisFooter }) => {
  setisHeader(!true)
  setisFooter(!true)
  return (
    <>
      <ContactForm />
    </>
  )
}
export default Contact
