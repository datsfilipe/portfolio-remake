import { useState, useEffect, useRef, type ReactNode } from 'react'
import Card from './Card'

interface InfiniteScrollProps {
  repositories: Array<{
    name: string
    url: string
    description: string
    homepageUrl: string
    updatedAt: string
    defaultBranchRef: {
      target: {
        history: {
          nodes: [{
            committedDate: string
          }]
        }
      }
    }
  }>
}

export default function InfiniteScroll ({ repositories }: InfiniteScrollProps): ReactNode {
  const [data, setData] = useState<InfiniteScrollProps['repositories']>(repositories.slice(0, 1))
  const lastElementRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading) {
      const newData = repositories.slice(0, data.length + 10)
      setData(newData)
      setLoading(false)
    }
  }, [loading])

  useEffect(() => {
    if (loading) {
      const newData = [...data, ...repositories.slice(data.length, data.length + 10)]
      setData(newData)
      setLoading(false)
    }
  }, [loading])

  const handleObserver = (entities: IntersectionObserverEntry[]): void => {
    const target = entities[0]
    if (target === undefined) return

    if (target.isIntersecting) {
      setLoading(true)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 1
    })
    if (lastElementRef.current != null) {
      observer.observe(lastElementRef.current)
    }
  }, [])

  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {index === data.length - 1
              ? <div ref={lastElementRef}>
                <Card repo={item} />
              </div>
              : <>
                <Card repo={item} />
              </>
            }
          </div>
        )
      })}
      {loading && <p>Loading...</p>}
    </>
  )
}