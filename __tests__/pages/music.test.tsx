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
    expect(screen.getByText(/baseball season/i)).toBeInTheDocument();
    expect(screen.getByText(/benny cassette/i)).toBeInTheDocument();
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
    // Use getByRole("heading") to scope to h3 elements only,
    // avoiding false matches in the description paragraphs
    expect(
      screen.getByRole("heading", { name: /hannibal interlude/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /london town/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /competitive platform/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /sharing music with artists/i })
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
    expect(screen.getByText("2015")).toBeInTheDocument();
    expect(screen.getByText("2019")).toBeInTheDocument();
    expect(screen.getByText("2023")).toBeInTheDocument();
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

  it("renders the Sounds eyebrow label for the genres section", () => {
    render(<MusicPage />);
    expect(screen.getByText("Sounds")).toBeInTheDocument();
  });
});
