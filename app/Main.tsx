import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 6

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          {posts.slice(0, 1).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            return (
              <div key={'main-article'} className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 pb-2">
                <div>
                  <Link href={`/blog/${slug}`}>
                    <img
                      src={
                        images && images.length > 0 ? images[0] : '/static/images/placeholder.svg'
                      }
                      className="sm:w-full md:w-auto h-auto object-cover"
                    ></img>
                  </Link>
                </div>
                <div>
                  <article>
                    <p className="text-1xl pb-1 text-left font-extrabold text-gray-600 dark:text-gray-300">
                      Latest
                    </p>
                    <Link
                      href={`/blog/${slug}`}
                      className="text-3xl font-extrabold no-underline hover:underline"
                    >
                      {title}
                    </Link>
                    <div className="flex flex-wrap pb-4 pt-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <p className="text-sm">{summary}</p>
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="pt-3 text-right text-sm leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                  </article>
                </div>
              </div>
            )
          })}
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(1, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 no-underline hover:underline dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 no-underline hover:text-primary-600 hover:underline dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                    <div className="self-end">
                      <dl>
                        <Link href={`/blog/${slug}`}>
                          <img
                            className="inline-block"
                            src={
                              images && images.length > 0
                                ? images[0]
                                : '/static/images/placeholder.svg'
                            }
                          ></img>
                        </Link>
                        <dt className="sr-only">Published on</dt>
                        <dd className="pt-3 text-right text-sm leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
