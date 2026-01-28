import { Appointment } from '@/types'

type AppointmentCardProps = {
  appointment: Appointment
}

export const AppointmentCard = ({ appointment }: AppointmentCardProps) => {
  return (
    <div>
      <div className="pr-4 text-left md:pr-0">
        <span className="text-label-small text-content-primary font-semibold">
          {appointment.time}
        </span>
      </div>

      <div className="text-right md:pr-4 md:text-left">
        <div className="flex items-center justify-end gap-1 md:justify-center">
          <span className="text-label-small text-content-primary font-semibold">
            {appointment.petName}
          </span>
          <span className="text-paragraph-small text-content-secondary">/</span>
          <span className="text-paragraph-small text-content-secondary">
            {appointment.tutorName}
          </span>
        </div>

        <div className="col-span-2 flex items-center justify-end gap-2 pr-4 text-left md:col-span-1 md:mt-0">
          <span className="text-paragraph-small text-content-secondary">
            {appointment.description}
          </span>
        </div>
      </div>
    </div>
  )
}
