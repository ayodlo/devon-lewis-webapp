import { render, screen } from "@testing-library/react";
import ProjectsPage from "@/app/projects/page";

describe("Projects page", () => {
  it("renders the page heading", () => {
    render(<ProjectsPage />);
    expect(
      screen.getByRole("heading", { name: "Projects", level: 1 })
    ).toBeInTheDocument();
  });

  it("renders the Engineering eyebrow label", () => {
    render(<ProjectsPage />);
    // Exact string match — avoids matching "reliable engineering." in the description
    expect(screen.getByText("Engineering")).toBeInTheDocument();
  });

  it("renders the GitHub profile link", () => {
    render(<ProjectsPage />);
    const githubLink = screen.getByRole("link", {
      name: /github\.com\/ayodlo/i,
    });
    expect(githubLink).toHaveAttribute("href", "https://github.com/ayodlo");
  });

  it("renders Producer Battles project card", () => {
    render(<ProjectsPage />);
    expect(
      screen.getByRole("heading", { name: /producer battles/i })
    ).toBeInTheDocument();
  });

  it("Producer Battles links to the internal case study route", () => {
    render(<ProjectsPage />);
    const link = screen.getByRole("link", { name: /view case study/i });
    expect(link).toHaveAttribute("href", "/producer-battles");
  });

  it("renders Suno Bot project card", () => {
    render(<ProjectsPage />);
    expect(
      screen.getByRole("heading", { name: /suno bot/i })
    ).toBeInTheDocument();
  });

  it("Suno Bot links to the correct GitHub repo", () => {
    render(<ProjectsPage />);
    const links = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href")?.includes("ayodlo/suno-bot"));
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders Visadapt Scraper project card", () => {
    render(<ProjectsPage />);
    expect(
      screen.getByRole("heading", { name: /visadapt scraper/i })
    ).toBeInTheDocument();
  });

  it("Visadapt Scraper links to the correct GitHub repo", () => {
    render(<ProjectsPage />);
    const links = screen
      .getAllByRole("link")
      .filter((l) =>
        l.getAttribute("href")?.includes("ayodlo/visadapt-scraper")
      );
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders the correct tech tags for Producer Battles", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    expect(screen.getByText("Prisma")).toBeInTheDocument();
    expect(screen.getByText("AWS S3")).toBeInTheDocument();
    expect(screen.getByText("Vercel")).toBeInTheDocument();
  });

  it("renders Python tag on at least two projects (Suno Bot and Visadapt Scraper)", () => {
    render(<ProjectsPage />);
    // Both Suno Bot and Visadapt Scraper are Python projects
    expect(screen.getAllByText("Python").length).toBeGreaterThanOrEqual(2);
  });

  it("renders Playwright tag", () => {
    render(<ProjectsPage />);
    expect(screen.getAllByText("Playwright").length).toBeGreaterThanOrEqual(1);
  });

  it("renders Click and YAML tags for Suno Bot", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("Click")).toBeInTheDocument();
    expect(screen.getByText("YAML")).toBeInTheDocument();
  });

  it("renders three project cards in total", () => {
    render(<ProjectsPage />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(3);
  });

  it("renders project images for each card", () => {
    render(<ProjectsPage />);
    expect(screen.getByAltText("Producer Battles")).toBeInTheDocument();
    expect(screen.getByAltText("Suno Bot")).toBeInTheDocument();
    expect(screen.getByAltText("Visadapt Scraper")).toBeInTheDocument();
  });
});
