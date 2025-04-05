import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 text-foreground">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <Link href="/" passHref>
          <Button size="lg">
            Voltar para o início
          </Button>
        </Link>
      </div>
    </main>
  )
} 