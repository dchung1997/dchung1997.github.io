import './ChartWrapper.css'

const ChartWrapper = (props, card) => {
  return (
    <div className="grid grid-cols-8 pt-4 pb-8 chart-wrapper">
    <div className="card col-start-2 col-span-6 chart">
        {props.children}
    </div>
  </div>
  )
}

export default ChartWrapper;
