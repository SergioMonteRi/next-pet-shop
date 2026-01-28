import { Cloudy, Moon, Sun } from 'lucide-react'

import { AppointmentPeriod } from '@/types'

type PeriodSectionProps = {
  period: AppointmentPeriod
}

const PeriodIcons = {
  morning: <Sun className="text-accent-blue" />,
  afternoon: <Cloudy className="text-accent-orange" />,
  evening: <Moon className="text-accent-yellow" />,
}

export const PeriodSection = ({ period }: PeriodSectionProps) => {
  const { type, title, timeRange } = period

  return (
    <section className="bg-background-tertiary rounded-xl">
      <div className="flex items-center justify-between border-b border-gray-600 px-5 py-3">
        <div className="flex items-center gap-3">
          <div>{PeriodIcons[type]}</div>
          <h2 className="text-label-large text-content-primary">{title}</h2>
        </div>
        <span className="text-label-large text-content-secondary">
          {timeRange}
        </span>
      </div>
    </section>
  )
}
