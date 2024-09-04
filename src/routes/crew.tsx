import CrewPage from '@/components/CrewPage/CrewPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/crew')({
  component: CrewPage
})