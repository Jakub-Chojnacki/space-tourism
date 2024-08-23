import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/crew')({
  component: () => <div>Hello /crew!</div>
})