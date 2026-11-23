import React, { useEffect, useState } from "react";
import "./style/project.css";

const USERNAME = "thyfrei";
const TOPIC = ""; // Leave empty to show all projects
const EXCLUDE = ["thyfrei", "Message-Spamming-Script"];

const CACHE_KEY = `gh-repos-${USERNAME}`;
const CACHE_MS = 10 * 60 * 1000; // 10 minutes

export default function Project() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Read cached repositories
    function readCache() {
      try {
        const raw = sessionStorage.getItem(CACHE_KEY);

        if (!raw) return null;

        const { time, data } = JSON.parse(raw);

        return Date.now() - time < CACHE_MS ? data : null;
      } catch {
        return null;
      }
    }

    // Save repositories in sessionStorage
    function writeCache(data) {
      try {
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            time: Date.now(),
            data,
          })
        );
      } catch {
        // Page will still work without cache
      }
    }

    // Fetch GitHub repositories
    async function getRepos() {
      const cached = readCache();

      if (cached) return cached;

      const response = await fetch(
        `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`,
        {
          headers: {
            Accept: "application/vnd.github+json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API responded with ${response.status}`);
      }

      const raw = await response.json();

      const data = raw.map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        updated: repo.pushed_at || repo.updated_at,
        topics: repo.topics || [],
        homepage: repo.homepage,
        fork: repo.fork,
        archived: repo.archived,
      }));

      writeCache(data);

      return data;
    }

    // Fetch data when component mounts
    getRepos()
      .then((data) => {
        const filtered = data.filter(
          (repo) =>
            !repo.fork &&
            !repo.archived &&
            !EXCLUDE.includes(repo.name) &&
            (!TOPIC || repo.topics.includes(TOPIC))
        );

        setRepos(filtered);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Loading state
  if (loading) {
    return (
      <main className="project-main">
        <div className="project-list">
          <p className="repo-status">Loading projects...</p>
        </div>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="project-main">
        <div className="project-list">
          <p className="repo-status">
            Couldn't load projects from GitHub right now.{" "}
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View my GitHub profile
            </a>
          </p>
        </div>
      </main>
    );
  }

  // Empty state
  if (repos.length === 0) {
    return (
      <main className="project-main">
        <div className="project-list">
          <p className="repo-status">
            No projects to show yet.{" "}
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View my GitHub profile
            </a>
          </p>
        </div>
      </main>
    );
  }

  // Projects list
  return (
    <main className="project-main">
      <div className="project-list">
        {repos.map((repo) => {
          const visibleTopics = repo.topics.filter(
            (topic) => topic !== TOPIC
          );

          return (
            <article className="repo-card" key={repo.name}>
              <h3 className="repo-title">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h3>

              <p className="repo-desc">
                {repo.description || "No description yet."}
              </p>

              <div className="repo-meta">
                {repo.language && <span>{repo.language}</span>}

                {repo.stars > 0 && <span>★ {repo.stars}</span>}

                <span>
                  Updated{" "}
                  {new Date(repo.updated).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              {visibleTopics.length > 0 && (
                <div className="repo-topics">
                  {visibleTopics.map((topic) => (
                    <span className="repo-topic" key={topic}>
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {repo.homepage && (
                <div className="repo-live">
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site →
                  </a>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </main>
  );
}