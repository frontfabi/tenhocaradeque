import Link from "next/link"
import Image from "next/image"
import { StyledNav } from "./NavMenu.style"
const NavMenu = ({ categories, logo }) => {
  console.log(logo)
  return (
    <StyledNav>
      <div className="uk-navbar-left">
        <h1>
          <Link href="/">
            <a>
              <Image
                alt={logo.alternativeText}
                width={logo.width || 120}
                height={logo.height || 60}
                src={logo.url}
              />
            </a>
          </Link>
        </h1>
      </div>

      <ul className="navMenuList">
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <Link href={`/category/${category.slug}`}>
                <a data-text={category.name} className="navLink">
                  {category.name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </StyledNav>
  )
}

export { NavMenu }
