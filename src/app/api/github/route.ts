import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const username = "yashmakkar5";
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "YashMakkar-Portfolio",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 }
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers,
        next: { revalidate: 3600 }
      })
    ]);

    if (!userRes.ok) {
      return NextResponse.json(
        {
          error: "GitHub API rate limit or user unavailable",
          username,
          profileUrl: `https://github.com/${username}`
        },
        { status: userRes.status === 403 ? 200 : 500 }
      );
    }

    const userData = await userRes.json();
    const reposData = reposRes.ok ? await reposRes.json() : [];

    interface RepoSummary {
      name: string;
      description: string | null;
      html_url: string;
      language: string | null;
      stargazers_count: number;
      forks_count: number;
      updated_at: string;
    }

    const repos: RepoSummary[] = Array.isArray(reposData)
      ? reposData.slice(0, 4).map((r) => ({
          name: r.name,
          description: r.description,
          html_url: r.html_url,
          language: r.language,
          stargazers_count: r.stargazers_count,
          forks_count: r.forks_count,
          updated_at: r.updated_at,
        }))
      : [];

    return NextResponse.json({
      success: true,
      user: {
        login: userData.login,
        name: userData.name || "Yash Makkar",
        avatar_url: userData.avatar_url,
        html_url: userData.html_url,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        created_at: userData.created_at,
        bio: userData.bio,
      },
      recentRepos: repos,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal fetch failure";
    return NextResponse.json(
      {
        error: errorMsg,
        username,
        profileUrl: `https://github.com/${username}`
      },
      { status: 200 }
    );
  }
}
