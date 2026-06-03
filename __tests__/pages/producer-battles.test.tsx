import { render, screen } from "@testing-library/react";
import ProducerBattlesPage from "@/app/producer-battles/page";

describe("Producer Battles page", () => {
  it("renders the Producer Battles heading", () => {
    render(<ProducerBattlesPage />);
    expect(
      screen.getByRole("heading", { name: /producer battles/i, level: 1 })
    ).toBeInTheDocument();
  });

  it("renders the Independent Full-Stack Build eyebrow", () => {
    render(<ProducerBattlesPage />);
    expect(screen.getByText(/independent full-stack build/i)).toBeInTheDocument();
  });

  it("renders the hero description mentioning Devon as builder", () => {
    render(<ProducerBattlesPage />);
    expect(
      screen.getByText(/designed, engineered, and deployed on my own/i)
    ).toBeInTheDocument();
  });

  it("renders the View Live Site button linking to producerbattles.com", () => {
    render(<ProducerBattlesPage />);
    const link = screen.getByRole("link", { name: /view live site/i });
    expect(link).toHaveAttribute("href", "https://producerbattles.com");
  });

  it("renders all four stat cards", () => {
    render(<ProducerBattlesPage />);
    expect(screen.getByText("24")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText("S3 + PG")).toBeInTheDocument();
    // "Vercel" appears in both the stat card and the stack card
    expect(screen.getAllByText("Vercel").length).toBeGreaterThanOrEqual(2);
  });

  it("renders all stat labels", () => {
    render(<ProducerBattlesPage />);
    expect(
      screen.getByText(/participants across 2 competitions/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/independently designed and built/i)
    ).toBeInTheDocument();
  });

  it("renders the Technologies Used section", () => {
    render(<ProducerBattlesPage />);
    expect(
      screen.getByRole("heading", { name: /technologies used/i })
    ).toBeInTheDocument();
  });

  it("renders all five stack cards", () => {
    render(<ProducerBattlesPage />);
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    expect(screen.getByText("Prisma")).toBeInTheDocument();
    expect(screen.getByText("AWS S3")).toBeInTheDocument();
    // "Vercel" also appears in the stat card, so use getAllByText
    expect(screen.getAllByText("Vercel").length).toBeGreaterThanOrEqual(1);
  });

  it("renders stack role labels", () => {
    render(<ProducerBattlesPage />);
    expect(screen.getByText(/full-stack framework/i)).toBeInTheDocument();
    expect(screen.getByText(/relational database/i)).toBeInTheDocument();
    expect(screen.getByText(/orm & migrations/i)).toBeInTheDocument();
    expect(screen.getByText(/asset storage/i)).toBeInTheDocument();
    expect(screen.getByText(/deployment & ci/i)).toBeInTheDocument();
  });

  it("renders the Engineering Scope heading", () => {
    render(<ProducerBattlesPage />);
    expect(
      screen.getByRole("heading", { name: /engineering scope/i })
    ).toBeInTheDocument();
  });

  it("renders all five scope areas", () => {
    render(<ProducerBattlesPage />);
    expect(screen.getByText("Authentication")).toBeInTheDocument();
    expect(screen.getByText("Competition Engine")).toBeInTheDocument();
    expect(screen.getByText("File Uploads")).toBeInTheDocument();
    expect(screen.getByText("Judging System")).toBeInTheDocument();
    expect(screen.getByText("Admin Interface")).toBeInTheDocument();
  });

  it("renders the What Producer Battles Is section", () => {
    render(<ProducerBattlesPage />);
    expect(
      screen.getByRole("heading", { name: /what producer battles is/i })
    ).toBeInTheDocument();
  });

  it("renders the From the Engineer founder note", () => {
    render(<ProducerBattlesPage />);
    expect(screen.getByText(/from the engineer/i)).toBeInTheDocument();
  });

  it("attributes the quote to Devon Lewis", () => {
    render(<ProducerBattlesPage />);
    expect(screen.getByText("Devon Lewis")).toBeInTheDocument();
    expect(
      screen.getByText(/engineer & founder · producer battles/i)
    ).toBeInTheDocument();
  });

  it("renders presigned URLs mentioned on the page", () => {
    render(<ProducerBattlesPage />);
    // Appears in both the hero description and the File Uploads scope row
    expect(screen.getAllByText(/presigned urls/i).length).toBeGreaterThanOrEqual(1);
  });
});
