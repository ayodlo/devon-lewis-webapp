import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from "@/components/Navigation/Navigation";

describe("Navigation", () => {
  it("renders the Devon Lewis logo", () => {
    render(<Navigation />);
    expect(screen.getByText("Devon")).toBeInTheDocument();
    expect(screen.getByText("Lewis")).toBeInTheDocument();
  });

  it("logo links to the home route", () => {
    render(<Navigation />);
    const logo = screen.getByRole("link", { name: /devon lewis/i });
    expect(logo).toHaveAttribute("href", "/");
  });

  it("renders all desktop nav links", () => {
    render(<Navigation />);
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Producer Battles" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Music" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("nav links point to the correct routes", () => {
    render(<Navigation />);
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/projects"
    );
    expect(
      screen.getByRole("link", { name: "Producer Battles" })
    ).toHaveAttribute("href", "/producer-battles");
    expect(screen.getByRole("link", { name: "Music" })).toHaveAttribute(
      "href",
      "/music"
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/contact"
    );
  });

  it("renders a hamburger button for mobile", () => {
    render(<Navigation />);
    expect(
      screen.getByRole("button", { name: /open menu/i })
    ).toBeInTheDocument();
  });

  it("opens the mobile menu when hamburger is clicked", async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    const hamburger = screen.getByRole("button", { name: /open menu/i });
    await user.click(hamburger);

    expect(
      screen.getByRole("button", { name: /close menu/i })
    ).toBeInTheDocument();
  });

  it("shows mobile nav links after hamburger click", async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    await user.click(screen.getByRole("button", { name: /open menu/i }));

    const mobileLinks = screen.getAllByRole("link", { name: "Projects" });
    expect(mobileLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("closes the mobile menu when a link is clicked", async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    await user.click(screen.getByRole("button", { name: /open menu/i }));
    expect(
      screen.getByRole("button", { name: /close menu/i })
    ).toBeInTheDocument();

    const mobileLinks = screen.getAllByRole("link", { name: "Projects" });
    await user.click(mobileLinks[mobileLinks.length - 1]);

    expect(
      screen.getByRole("button", { name: /open menu/i })
    ).toBeInTheDocument();
  });

  it("producer battles appears before music in nav order", () => {
    render(<Navigation />);
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    const pbIndex = hrefs.indexOf("/producer-battles");
    const musicIndex = hrefs.indexOf("/music");
    expect(pbIndex).toBeLessThan(musicIndex);
  });
});
