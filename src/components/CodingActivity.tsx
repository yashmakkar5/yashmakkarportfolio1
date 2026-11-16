"use client";

import React, { useState, useEffect } from "react";
import { Github, Star, GitFork, ExternalLink, Activity, Code, Database, RefreshCw, AlertCircle } from "lucide-react";

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  bio: string | null;
}

interface RepoItem {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export default function CodingActivity() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [recentRepos, setRecentRepos] = useState<RepoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true);
        const res = await fetch("/api/github");
        const json = await res.json();
        if (json.success && json.user) {
          setUserData(json.user);
          setRecentRepos(json.recentRepos || []);
        } else {
          setError(json.error || "GitHub public feed unavailable");
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Network error");
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  return (
    <section id="developer-presence" className="relative py-24 bg-obsidian-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 uppercase tracking-widest mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
              <span>09 // Live Developer Telemetry</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Public <span className="text-crimson-500">Activity</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-zinc-500 max-w-sm">
            Live telemetry from public GitHub API. Zero fabricated streaks or synthetic graphs.
          </p>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main GitHub Profile Status */}
          <div className="lg:col-span-5 rounded-2xl border border-zinc-800 bg-obsidian-900/40 p-6 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-850 mb-6">
                <div className="flex items-center gap-2.5">
                  <Github className="h-5 w-5 text-crimson-500" />
                  <span className="text-xs font-mono font-semibold text-zinc-200">
                    github.com/yashmakkar5
                  </span>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE SYNC
                </span>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-12 text-zinc-500 font-mono text-xs gap-3">
                  <RefreshCw className="h-6 w-6 animate-spin text-crimson-500" />
                  <span>Polling verified GitHub metrics...</span>
                </div>
              ) : error ? (
                <div className="p-4 rounded-xl border border-zinc-800 bg-obsidian-950/80 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2 text-crimson-400 mb-2">
                    <AlertCircle className="h-4 w-4" />
                    <span>Rate limit / Offline fallback</span>
                  </div>
                  <p className="text-zinc-500 mb-4">
                    GitHub public API rate limit reached or endpoint unavailable. View live repositories directly on GitHub.
                  </p>
                  <a
                    href="https://github.com/yashmakkar5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-crimson-400 hover:text-white transition"
                  >
                    <span>Visit @yashmakkar5</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              ) : userData ? (
                <div className="space-y-6">
                  {/* Avatar + bio */}
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={userData.avatar_url}
                      alt={userData.login}
                      className="h-16 w-16 rounded-2xl border border-zinc-800 object-cover"
                    />
                    <div>
                      <h4 className="font-editorial text-lg font-bold text-white">
                        {userData.name}
                      </h4>
                      <p className="font-mono text-xs text-crimson-400">
                        @{userData.login}
                      </p>
                      {userData.bio && (
                        <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                          {userData.bio}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Public metrics */}
                  <div className="grid grid-cols-3 gap-3 font-mono text-center">
                    <div className="rounded-xl border border-zinc-850 bg-obsidian-950/70 p-3">
                      <span className="block text-xl font-bold text-white">
                        {userData.public_repos}
                      </span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                        Public Repos
                      </span>
                    </div>
                    <div className="rounded-xl border border-zinc-850 bg-obsidian-950/70 p-3">
                      <span className="block text-xl font-bold text-white">
                        {userData.followers}
                      </span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                        Followers
                      </span>
                    </div>
                    <div className="rounded-xl border border-zinc-850 bg-obsidian-950/70 p-3">
                      <span className="block text-xl font-bold text-white">
                        {userData.following}
                      </span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                        Following
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-850">
              <a
                href="https://github.com/yashmakkar5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-mono text-zinc-400 hover:text-white transition"
              >
                <span>Browse Full GitHub Profile</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Repositories & Secondary Profiles */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Recent Repos */}
            <div className="rounded-2xl border border-zinc-800 bg-obsidian-900/40 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-850 mb-4">
                <span className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider">
                  Active Public Repositories
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  Source: GitHub REST API v3
                </span>
              </div>

              <div className="space-y-3">
                {recentRepos.length > 0 ? (
                  recentRepos.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-zinc-850 bg-obsidian-950/60 p-3.5 transition hover:border-crimson-600/50 hover:bg-obsidian-950"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-zinc-200 group-hover:text-crimson-400 transition">
                            {repo.name}
                          </span>
                          {repo.language && (
                            <span className="rounded bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 text-[9px] font-mono text-zinc-400">
                              {repo.language}
                            </span>
                          )}
                        </div>
                        {repo.description && (
                          <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                            {repo.description}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 shrink-0">
                        {repo.stargazers_count > 0 && (
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            {repo.stargazers_count}
                          </span>
                        )}
                        <ExternalLink className="h-3.5 w-3.5 group-hover:text-crimson-400 transition" />
                      </div>
                    </a>
                  ))
                ) : (
                  <div className="text-xs font-mono text-zinc-500 py-4 text-center">
                    Placey MACOS &amp; GymFlow repositories available at github.com/yashmakkar5
                  </div>
                )}
              </div>
            </div>

            {/* Other Profiles (LeetCode, Kaggle placeholders with clear status) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-850 bg-obsidian-900/30 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-crimson-400" />
                    <span className="text-xs font-mono font-semibold text-zinc-300">
                      LeetCode
                    </span>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-500">
                    Target Profile
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 leading-snug">
                  Data Structures &amp; Algorithms practice. Configure in <code className="text-zinc-400">src/data/socials.ts</code> to display live stats.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-850 bg-obsidian-900/30 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-crimson-400" />
                    <span className="text-xs font-mono font-semibold text-zinc-300">
                      Kaggle
                    </span>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-500">
                    Target Profile
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 leading-snug">
                  Machine learning model evaluations &amp; exploratory datasets. Ready for username configuration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
