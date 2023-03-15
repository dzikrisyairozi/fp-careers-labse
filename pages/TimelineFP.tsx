import React from 'react'
import Timeline, { DateHeader, SidebarHeader, TimelineHeaders } from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

// 15 - 18 Maret 2023
// - Demo Susulan Tugas Modul
// - Planning dan Inisiasi FP
// 19 Maret 2023
// - Demo Progress ke masing masing client
// 19 -25 Maret 2023 
// - Pengerjaan minggu pertama
// 26 Maret 2023
// - Demo Progress ke masing masing client
// 26 Maret -  1 April 2023
// - Pengerjaan minggu kedua
// 2 April 2023
// - Pengumpulan

const startDate = moment('2023-03-15');
const endDate = moment('2023-04-02');

const groups = [
  { id: 1, title: 'Demo Susulan Tugas Modul' }, 
  { id: 2, title: 'Planning dan Inisiasi FP' },
  { id: 3, title: 'Demo Progress'},
  { id: 4, title: 'Pengerjaan minggu #1'},
  { id: 5, title: 'Demo Progress'},
  { id: 6, title: 'Pengerjaan minggu #2'},
  { id: 7, title: 'Pengumpulan FP'},
]

const items = [
  {
    id: 1,
    group: 1,
    title: null,
    start_time: moment('2023-03-15'),
    end_time: moment('2023-03-19')
  },
  {
    id: 2,
    group: 2,
    title: null,
    start_time: moment('2023-03-15'),
    end_time: moment('2023-03-20')
  },
  {
    id: 3,
    group: 3,
    title: null,
    start_time: moment('2023-03-19'),
    end_time: moment('2023-03-20')
  },
  {
    id: 4,
    group: 4,
    title: null,
    start_time: moment('2023-03-19'),
    end_time: moment('2023-03-26')
  },
  {
    id: 5,
    group: 5,
    title: null,
    start_time: moment('2023-03-25'),
    end_time: moment('2023-03-26')
  },
  {
    id: 6,
    group: 6,
    title: null,
    start_time: moment('2023-03-26'),
    end_time: moment('2023-04-2')
  },
  {
    id: 7,
    group: 7,
    title: null,
    start_time: moment('2023-04-02'),
    end_time: moment('2023-04-03')
  },
]

const TimelineFP = () => {

  const timelineStyles = {
    fontWeight: 600 // change the background color to red
  };

  const dateHeaderStyles = {
    backgroundColor: '#00235B'
  }

  return (
    <div style={timelineStyles} >
    <Timeline
      groups={groups}
      items={items}
      sidebarWidth={256}
      defaultTimeStart={startDate}
      defaultTimeEnd={endDate}
    >
      <TimelineHeaders
      >
        <div style={dateHeaderStyles}>
          <SidebarHeader >
            {({ getRootProps }) => {
              return <div  {...getRootProps()}></div>
            }}
          </SidebarHeader>
        </div>
        
        <DateHeader unit="primaryHeader" />
        <DateHeader unit="day" />
      </TimelineHeaders>
    </Timeline>
  </div>
  )
}

export default TimelineFP