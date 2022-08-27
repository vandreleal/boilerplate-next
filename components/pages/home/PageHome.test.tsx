import { render, screen } from "@/utils/test-utils"

import { PageHome } from "./PageHome"

describe("PageHome", () => {
  it("renders a heading", () => {
    render(<PageHome />)

    const heading = screen.getByRole("heading", {
      name: /Next.js Boilerplate/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
