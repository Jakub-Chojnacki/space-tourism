import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/technology')({
  component: () => <div>Hello /technology!</div>
})