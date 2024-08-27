import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/destination')({
  component: () => <div>
    <Outlet/>
  </div>
})