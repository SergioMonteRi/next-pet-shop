import { Appointment as AppointmentPrisma } from '@/generated/prisma/client'
import { Appointment, AppointmentPeriod, PeriodType } from '@/types'

export function getPeriodType(hour: number): PeriodType {
  if (hour >= 9 && hour < 12) {
    return 'morning'
  }

  if (hour >= 13 && hour < 18) {
    return 'afternoon'
  }

  return 'evening'
}

export function groupAppointmentsByPeriod(
  appointments: AppointmentPrisma[],
): AppointmentPeriod[] {
  const transformedAppointments: Appointment[] = appointments.map(
    (appointment) => ({
      ...appointment,
      time: appointment.scheduledAt.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      service: appointment.description,
      period: getPeriodType(appointment.scheduledAt.getHours()),
    }),
  )

  const morningAppointments = transformedAppointments.filter(
    (appointment) => appointment.period === 'morning',
  )

  const afternoonAppointments = transformedAppointments.filter(
    (appointment) => appointment.period === 'afternoon',
  )

  const eveningAppointments = transformedAppointments.filter(
    (appointment) => appointment.period === 'evening',
  )

  return [
    {
      type: 'morning',
      title: 'Manhã',
      appointments: morningAppointments,
      timeRange: '09h-12h',
    },
    {
      type: 'afternoon',
      title: 'Tarde',
      appointments: afternoonAppointments,
      timeRange: '13h-18h',
    },
    {
      type: 'evening',
      title: 'Noite',
      appointments: eveningAppointments,
      timeRange: '19h-21h',
    },
  ]
}
