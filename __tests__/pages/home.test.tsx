import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "@/app/page";

describe("Home page", () => {
  it("renders the hero tagline", () => {
    render(<Page />);
    expect(
      screen.getByText(/frontend engineer and music producer/i)
    ).toBeInTheDocument();
  });

  it("renders the Engineering Projects CTA linking to /projects", () => {
    render(<Page />);
    const link = screen.getByRole("link", { name: /engineering projects/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/projects");
  });

  it("renders the Music Portfolio CTA linking to /music", () => {
    render(<Page />);
    const link = screen.getByRole("link", { name: /music portfolio/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/music");
  });

  it("renders the About Me section heading", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", { name: /devon lewis/i })
    ).toBeInTheDocument();
  });

  it("renders all three About Me pillars", () => {
    render(<Page />);
    // Exact label text to avoid matching "Engineering Projects" button
    expect(screen.getByText("Engineering")).toBeInTheDocument();
    expect(screen.getByText("AI & Technology")).toBeInTheDocument();
    expect(screen.getByText("Music Production")).toBeInTheDocument();
  });

  it("renders pillar body text for engineering", () => {
    render(<Page />);
    expect(screen.getByText(/full-stack web applications/i)).toBeInTheDocument();
  });

  it("renders pillar body text mentioning Claude Code and OpenAI", () => {
    render(<Page />);
    expect(screen.getByText(/claude code/i)).toBeInTheDocument();
    expect(screen.getByText(/openai/i)).toBeInTheDocument();
  });

  it("renders pillar body text mentioning 16 years of music production", () => {
    render(<Page />);
    expect(screen.getByText(/16 years/i)).toBeInTheDocument();
  });

  it("renders the hero image", () => {
    render(<Page />);
    expect(screen.getByAltText("Devon Lewis")).toBeInTheDocument();
  });

  it("renders the scroll-down arrow button", () => {
    render(<Page />);
    expect(
      screen.getByText(/learn more about me/i)
    ).toBeInTheDocument();
  });

  it("scroll button triggers smooth scroll on click", async () => {
    const user = userEvent.setup();
    const scrollIntoViewMock = jest.fn();
    const aboutEl = document.createElement("div");
    aboutEl.id = "about";
    aboutEl.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(aboutEl);

    render(<Page />);
    await user.click(screen.getByText(/learn more about me/i));
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });

    document.body.removeChild(aboutEl);
  });
});
