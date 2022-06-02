import { Pie } from 'react-chartjs-2'

const ChartPie = ({ labels, data, title }) => {
  const colorName = ['red', 'blue', 'yellow', 'green', 'violet', 'orange']
  const colorDict = {
    green: '#5EBD3E',
    yellow: '#FFB900',
    orange: '#F78200',
    red: '#E23838',
    violet: '#973999',
    blue: '#009CDF',
  }

  function getBgColor() {
    var colors = []
    for (var i = 0; i < data.length; i++) {
      colors.push(colorDict[String(colorName[i % colorName.length])])
    }

    //replace the color of the last slice if it is the same as the first
    if (colors[colors.length - 1] == colors[0]) {
      colors[colors.length - 1] =
        colorDict[String(colorName[(colorName.length + 1) % colorName.length])]
    }

    return colors
  }
  function getHoverBgColor() {
    return getBgColor()
  }

  const pieData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: getBgColor(),
        hoverBackgroundColor: getHoverBgColor(),
      },
    ],
  }

  return (
    <div className="flex pb-9">
      <div className="m-auto">
        <h2>{title}</h2>
        <Pie data={pieData} />
      </div>
    </div>
  )
}
ChartPie.defaultProps = {
  title: 'Pie Example',
  labels: ['red', 'blue', 'yellow'],
  data: [1, 2, 3],
}

export default ChartPie
