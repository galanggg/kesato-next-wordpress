import Link from 'next/link'
const CreativeFooterLink = () => {
  return (
    <section>
      <div className=" lg:pt-48 pt-16">
        <ul className="lg:text-3xl text-base text-center lg:flex lg:items-center text-greyfont justify-center divide-x divide-greyfont lg:leading-none leading-relaxed">
          <li className="lg:px-3 ">
            <Link href="/">
              <a className="hover:text-kesato"> Strategy </a>
            </Link>
          </li>
          <li className="lg:px-3 ">
            <Link href="/">
              <a className="hover:text-kesato"> Marketing </a>
            </Link>
          </li>
          <li className="lg:px-3">
            <Link href="/">
              <a className="hover:text-kesato"> Development </a>
            </Link>
          </li>
          <li className="lg:px-3">
            <Link href="/">
              <a className="hover:text-kesato"> Creative </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default CreativeFooterLink
