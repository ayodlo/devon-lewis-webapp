import { render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";

describe("Contact page", () => {
  it("renders the Let's Connect heading", () => {
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", { name: /let's connect/i, level: 1 })
    ).toBeInTheDocument();
  });

  it("renders the Get in Touch eyebrow label", () => {
    render(<ContactPage />);
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
  });

  it("renders the intro paragraph", () => {
    render(<ContactPage />);
    expect(
      screen.getByText(/collaborate on some jams/i)
    ).toBeInTheDocument();
  });

  it("renders the Email channel card", () => {
    render(<ContactPage />);
    expect(screen.getByText("devonlewis808@gmail.com")).toBeInTheDocument();
  });

  it("email card links to mailto", () => {
    render(<ContactPage />);
    const link = screen
      .getAllByRole("link")
      .find((l) => l.getAttribute("href") === "mailto:devonlewis808@gmail.com");
    expect(link).toBeInTheDocument();
  });

  it("renders the LinkedIn channel card", () => {
    render(<ContactPage />);
    expect(screen.getByText("in/dl1991")).toBeInTheDocument();
  });

  it("LinkedIn card links to the correct profile URL", () => {
    render(<ContactPage />);
    const link = screen
      .getAllByRole("link")
      .find((l) =>
        l.getAttribute("href") === "https://www.linkedin.com/in/dl1991/"
      );
    expect(link).toBeInTheDocument();
  });

  it("renders the Instagram channel card", () => {
    render(<ContactPage />);
    expect(screen.getByText("@ayodlobeats")).toBeInTheDocument();
  });

  it("Instagram card links to the correct profile URL", () => {
    render(<ContactPage />);
    const link = screen
      .getAllByRole("link")
      .find((l) =>
        l.getAttribute("href") === "https://www.instagram.com/ayodlobeats/"
      );
    expect(link).toBeInTheDocument();
  });

  it("renders the X / Twitter channel card", () => {
    render(<ContactPage />);
    expect(screen.getByText("@devonmlewis")).toBeInTheDocument();
  });

  it("X card links to the correct profile URL", () => {
    render(<ContactPage />);
    const link = screen
      .getAllByRole("link")
      .find((l) => l.getAttribute("href") === "https://x.com/devonmlewis");
    expect(link).toBeInTheDocument();
  });

  it("renders the GitHub channel card", () => {
    render(<ContactPage />);
    expect(screen.getByText("github.com/ayodlo")).toBeInTheDocument();
  });

  it("GitHub card links to the correct profile URL", () => {
    render(<ContactPage />);
    const link = screen
      .getAllByRole("link")
      .find((l) => l.getAttribute("href") === "https://github.com/ayodlo");
    expect(link).toBeInTheDocument();
  });

  it("renders five contact channel cards", () => {
    render(<ContactPage />);
    const labels = ["Email", "LinkedIn", "Instagram", "X / Twitter", "GitHub"];
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders all CTA link texts", () => {
    render(<ContactPage />);
    expect(screen.getByText(/send an email/i)).toBeInTheDocument();
    expect(screen.getByText(/view profile/i)).toBeInTheDocument();
    expect(screen.getByText(/follow on instagram/i)).toBeInTheDocument();
    expect(screen.getByText(/follow on x/i)).toBeInTheDocument();
    expect(screen.getByText(/view repositories/i)).toBeInTheDocument();
  });

  it("renders the closing No cold pitches section", () => {
    render(<ContactPage />);
    expect(screen.getByText(/no cold pitches needed/i)).toBeInTheDocument();
  });

  it("external links open in a new tab", () => {
    render(<ContactPage />);
    const externalLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("target") === "_blank");
    expect(externalLinks.length).toBeGreaterThan(0);
  });

  it("external links have rel noopener noreferrer", () => {
    render(<ContactPage />);
    const externalLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("target") === "_blank");
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
