import Link from "next/link";

function MainNavigation() {
  return (
    <>
      <header>
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/share">
                Share
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
