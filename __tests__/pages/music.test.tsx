import { render, screen } from "@testing-library/react";
import MusicPage from "@/app/music/page";

describe("Music page", () => {
  it("renders the Music Producer heading", () => {
    render(<MusicPage />);
    expect(
      screen.getByRole("heading", { name: /music producer/i, level: 1 })
    ).toBeInTheDocument();
  });

  it("renders the Music eyebrow label", () => {
    render(<MusicPage />);
    // Exact text match to avoid matching the h1 "Music Producer"
    expect(screen.getByText("Music")).toBeInTheDocument();
  });

  it("renders the bio paragraphs", () => {
    render(<MusicPage />);
    expect(screen.getByText(/hip-hop and trap/i)).toBeInTheDocument();
    expect(
      screen.getByText(/raw concept to a polished production/i)
    ).toBeInTheDocument();
  });

  it("renders all genre tags", () => {
    render(<MusicPage />);
    const genres = ["Hip-Hop", "Trap", "R&B", "Electronic", "808s", "Sample-based"];
    genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it("renders the Credits & Achievements section heading", () => {
    render(<MusicPage />);
    expect(
      screen.getByRole("heading", { name: /credits & achievements/i })
    ).toBeInTheDocument();
  });

  it("renders all four credit card titles", () => {
    render(<MusicPage />);
    // Use heading role to target the h3 specifically, not the category badge
    expect(
      screen.getByRole("heading", { name: "Achievement One" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Production Credit" })
    ).toBeInTheDocument();
    // "Milestone" appears as both h3 and category span — check we have at least one
    expect(screen.getAllByText("Milestone").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("heading", { name: "Producer Battle" })
    ).toBeInTheDocument();
  });

  it("renders credit category badges", () => {
    render(<MusicPage />);
    expect(screen.getByText("Award")).toBeInTheDocument();
    expect(screen.getByText("Credit")).toBeInTheDocument();
    expect(screen.getByText("Competition")).toBeInTheDocument();
  });

  it("renders credit years", () => {
    render(<MusicPage />);
    expect(screen.getByText("2024")).toBeInTheDocument();
    const years2023 = screen.getAllByText("2023");
    expect(years2023.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText("2022")).toBeInTheDocument();
  });

  it("renders the My Music / Spotify section heading", () => {
    render(<MusicPage />);
    expect(
      screen.getByRole("heading", { name: /my music/i })
    ).toBeInTheDocument();
  });

  it("renders the Spotify iframe embed", () => {
    render(<MusicPage />);
    const iframe = screen.getByTitle(/devon lewis/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe.tagName).toBe("IFRAME");
  });

  it("spotify iframe has the correct src", () => {
    render(<MusicPage />);
    const iframe = screen.getByTitle(/devon lewis/i);
    expect(iframe.getAttribute("src")).toContain("open.spotify.com");
  });

  it("renders the Streaming eyebrow label", () => {
    render(<MusicPage />);
    expect(screen.getByText("Streaming")).toBeInTheDocument();
  });
});
