import { createFileRoute } from '@tanstack/react-router'
import DestinationPage from '@/components/DesinationPage/DestinationPage'

export const Route = createFileRoute('/destination')({
  component: DestinationPage
})