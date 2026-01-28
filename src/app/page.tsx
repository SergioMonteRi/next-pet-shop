import { PeriodSection } from '@/components'
import { Appointment as AppointmentPrisma } from '@/generated/prisma'
import { Appointment, AppointmentPeriod, PeriodType } from '@/types'

const appointments: AppointmentPrisma[] = [
  {
    id: '1',
    petName: 'Rex',
    description: 'Consulta',
    tutorName: 'João',
    phone: '1234567890',
    scheduledAt: new Date('2025-08-17T10:00:00'),
  },
  {
    id: '2',
    petName: 'Mimi',
    tutorName: 'Maria',
    description: 'Banho',
    phone: '1234567890',
    scheduledAt: new Date('2025-08-17T11:00:00'),
  },
  {
    id: '3',
    petName: 'Nina',
    tutorName: 'Natalia',
    description: 'Consulta',
    phone: '1234567890',
    scheduledAt: new Date('2025-08-17T14:00:00'),
  },
  {
    id: '4',
    petName: 'Nina',
    tutorName: 'Natalia',
    description: 'Consulta',
    phone: '1234567890',
    scheduledAt: new Date('2025-08-17T19:00:00'),
  },
]

function getPeriodType(hour: number): PeriodType {
  if (hour >= 9 && hour < 12) {
    return 'morning'
  }

  if (hour >= 13 && hour < 18) {
    return 'afternoon'
  }

  return 'evening'
}

function groupAppointmentsByPeriod(
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

export default function Home() {
  const periods = groupAppointmentsByPeriod(appointments)

  return (
    <div className="bg-background-primary flex flex-col gap-8 px-5 py-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-title text-content-primary">Sua agenda</h1>
          <p className="text-paragraph-medium text-content-secondary">
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 pb-24 md:p-0">
        {periods.map((period) => (
          <PeriodSection key={period.type} period={period} />
        ))}
      </div>
    </div>
  )
}
