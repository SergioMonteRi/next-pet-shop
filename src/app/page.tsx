export default function Home() {
  return (
    <div className="bg-background-primary p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-title-size text-content-primary">Sua agenda</h1>
          <p className="text-paragraph-small-size text-content-secondary">
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>
      </div>
    </div>
  )
}
