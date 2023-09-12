import { Github } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';

export function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className="px-6 py3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido no NLW da Rocketseat
          </span>
          
          <Separator orientation='vertical' className='h-6' />

          <Button variant="outline">
            <Github className='w-4 h-4 mr-2'/>
            Github
          </Button>
        </div>
      </div>

      <main className='flex-1 p-6 flex gap-6'>
        hi
      </main>
    </div>
  )
}
