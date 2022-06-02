import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react'
const ChartGantt = ({ propTasks, propViewMode }) => {
  var viewMode
  switch (propViewMode) {
    case 'day':
      viewMode = ViewMode.Day
      break
    case 'week':
      viewMode = ViewMode.Week
      break
    case 'month':
      viewMode = ViewMode.Month
      break

    default:
      viewMode = ViewMode.Day
      break
  }

  var tasks = []
  for (var i = 0; i < propTasks.length; i++) {
    let propTask = propTasks[i]
    let color
    let selectedColor
    switch (propTask.color) {
      case 'green':
        color = `#5EBD3E`
        selectedColor = '#5EBD3E'
        break
      case 'yellow':
        color = `#FFB900`
        selectedColor = '#FFB900'
        break
      case 'orange':
        color = `#F78200`
        selectedColor = '#F78200'
        break
      case 'red':
        color = `#E23838`
        selectedColor = '#E23838'
        break
      case 'violet':
        color = `#973999`
        selectedColor = '#973999'
        break
      case 'blue':
        color = `#009CDF`
        selectedColor = '#009CDF'
        break
      default:
        color = '#c8c8c8'
        selectedColor = '#c8c8c8'
        break
    }

    var task = {
      start: new Date(propTask.start),
      end: new Date(propTask.end),
      name: propTask.name,
      id: i,
      type: 'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: color, progressSelectedColor: selectedColor },
    }
    tasks.push(task)
  }

  return (
    <div className="py-4">
      <Gantt tasks={tasks} viewMode={viewMode} listCellWidth={''} />
    </div>
  )
}
ChartGantt.defaultProps = {
  propTasks: [
    {
      name: 'task name 1',
      start: '2022-04-01',
      end: '2022-04-4',
      color: 'green',
    },
    {
      name: 'task name 2',
      start: '2022-04-04',
      end: '2022-04-7',
      color: 'yellow',
    },
  ],
  propViewMode: 'day',
}

export default ChartGantt
