import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/destination')({
  component: () => <div>Hello /destination!</div>
})