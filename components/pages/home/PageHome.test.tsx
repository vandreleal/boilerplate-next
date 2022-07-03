import { render, screen } from "@/utils/test-utils"

import { PageHome } from "./PageHome"

describe("PageHome", () => {
  it("renders a heading", () => {
    render(<PageHome />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
