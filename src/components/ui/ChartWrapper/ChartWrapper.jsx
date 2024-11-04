const ChartWrapper = (props, card) => {
  return (
    <div className="grid grid-cols-8 pt-4 pb-8">
    <div className="card col-start-2 col-span-6">
        {props.children}
    </div>
  </div>
  )
}

export default ChartWrapper;
