import { PeriodSection } from '@/components'
import { prisma } from '@/lib'
import { APPOINTMENTS_MOCK } from '@/mocks'
import { groupAppointmentsByPeriod } from '@/utils'

export default async function Home() {
  const appointment = await prisma.appointment.findMany()

  console.log('results', appointment)

  const periods = groupAppointmentsByPeriod(APPOINTMENTS_MOCK)

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
