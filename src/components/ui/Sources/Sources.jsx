const Sources = ({items}) => {
  return (
    <section>
      <div className="mt-16 flex flex-col items-center">
        <p className="pb-2 text-center text-md leading-7 text-gray-700">
          ENDNOTES
        </p>
        <ol className="list-decimal text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="hover:underline">
              <a href={item}>{item}</a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Sources;
