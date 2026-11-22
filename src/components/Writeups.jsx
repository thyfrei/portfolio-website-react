import React, { useEffect, useState } from 'react'
import './style/writeups.css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

export default function Writeups() {
  const [writeups, setWriteups] = useState([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    async function loadWriteups() {
      try {
        const response = await fetch('/writeups/index.json')
        const filenames = await response.json()

        const articles = await Promise.all(
          filenames.map(async (filename) => {
            const mdResponse = await fetch(`/writeups/${filename}`)
            const content = await mdResponse.text()

            const titleMatch = content.match(/^#\s+(.+)$/m)

            const title = titleMatch
              ? titleMatch[1]
              : filename.replace('.md', '').replace(/_/g, ' ')

            const description = content
              .split('\n')
              .filter(line => line.trim() !== '')
              .filter(line => !line.startsWith('#'))
              .slice(0, 3)
              .join(' ')
              .replace(/[*_`]/g, '')
              .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

            return {
              filename,
              content,
              title,
              description
            }
          })
        )

        setWriteups(articles)
      } catch (error) {
        console.error('Failed to load writeups:', error)
      } finally {
        setLoading(false)
      }
    }

    loadWriteups()
  }, [])

  if (loading) {
    return (
      <main className="writeups-main">
        <p>Loading writeups...</p>
      </main>
    )
  }

  return (
    <main className="writeups-main">

      {writeups.length === 0 ? (
        <section className="writeups-empty">
          <div className="empty-content">
            <img
              src="/learn-learning.gif"
              alt="Working on writeups"
              className="empty-gif"
            />

            <div className="empty-text">
              <span className="empty-label">THE WRITING DESK</span>

              <h1>Ideas are being put into words.</h1>

              <p>
                Notes, experiments, learnings and thoughts are currently
                being documented. New writeups will appear here soon.
              </p>

              <div className="empty-status">
                <span className="status-dot"></span>
                Currently working on it
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="writeups-list">

          {writeups.map(({ filename, content, title, description }) => {
            const isExpanded = expanded === filename

            return (
              <article
                className={`writeup-card ${isExpanded ? 'expanded' : ''}`}
                key={filename}
              >
                <button
                  className="writeup-card-header"
                  onClick={() =>
                    setExpanded(isExpanded ? null : filename)
                  }
                  aria-expanded={isExpanded}
                >
                  <div className="writeup-card-info">
                    <span className="writeup-label">
                      TECHNICAL WRITEUP
                    </span>

                    <h2>{title}</h2>

                    {!isExpanded && (
                      <p className="writeup-description">
                        {description}
                      </p>
                    )}
                  </div>

                  <span className="writeup-toggle">
                    {isExpanded ? '−' : '+'}
                  </span>
                </button>

                {isExpanded && (
                  <div className="writeup-content">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                    >
                      {content}
                    </ReactMarkdown>
                  </div>
                )}
              </article>
            )
          })}

        </div>
      )}

    </main>
  )
}