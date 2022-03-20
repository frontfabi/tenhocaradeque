import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import {NavMenu} from "."

const Layout = (props) => {
  console.log(props.global.logo)
  return (
    <>
      <NavMenu categories={props.categories} logo={props.global.logo[0]} />
      {props.children}
    </>
  )}

export default Layout
