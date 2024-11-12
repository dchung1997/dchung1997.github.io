const ArticleHeader = ({ title, date }) => {
    const imagePath = import.meta.env.VITE_IMAGE_PATH;

    const formattedDate = date.toLocaleDateString("en-US", {
    weekday: 'long',        
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="pt-6 xl:pb-6 article-header">
      <div className="space-y-1 text-center">
        <dl className="space-y-10">
          <div>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500">
              <time dateTime="2024-10-31T00:00:00.000Z">
                    {formattedDate}
              </time>
            </dd>
          </div>
        </dl>
        <div className="border-b border-gray-300">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {title}
          </h1>
          <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 pt-8 pb-8">
            <li className="flex items-center space-x-2">
              <img
                alt="avatar"
                loading="lazy"
                width="38"
                height="38"
                decoding="async"
                data-nimg="1"
                className="h-10 w-10 rounded-full border border-gray-300 "
                src={`${imagePath}/avatar.png`}
              />
              <dl className="whitespace-nowrap text-sm font-medium leading-5">
                <dt className="sr-only">Name</dt>
                <dd className="text-gray-900 ">David Chung</dd>
                <dt className="sr-only">Twitter</dt>
                <dd>
                  <a
                    className="text-fuchsia-500 hover:text-fuchsia-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/dchung1997"
                  >
                    @dchung1997
                  </a>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;
