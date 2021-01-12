const CreativeFooterLink = () => {
  return (
    <section>
      <div className=" lg:pt-48 pt-16">
        <ul className="lg:text-3xl text-base text-center lg:flex lg:items-center text-greyfont justify-center divide-x divide-greyfont lg:leading-none leading-relaxed">
          <li className="lg:px-3 ">
            <a className="hover:text-kesato" href="">
              Strategy
            </a>
          </li>
          <li className="lg:px-3 ">
            <a className="hover:text-kesato" href="">
              Marketing
            </a>
          </li>
          <li className="lg:px-3">
            <a className="hover:text-kesato" href="">
              Developement
            </a>
          </li>
          <li className="lg:px-3">
            <a className="hover:text-kesato" href="">
              Creative
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default CreativeFooterLink
