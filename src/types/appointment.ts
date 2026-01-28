export type PeriodType = 'morning' | 'afternoon' | 'evening'

export type Appointment = {
  id: string
  time: string
  petName: string
  tutorName: string
  phone: string
  description: string
  scheduledAt: Date
  period: PeriodType
}

export type AppointmentPeriod = {
  title: string
  type: PeriodType
  timeRange: string
  appointments: Appointment[]
}
