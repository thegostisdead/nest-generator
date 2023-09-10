'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ThemeToggle from '@/components/theme-toggle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';


interface Schematics {
  name: string;
  alias?: string;
  description: string;
}

const schematicsData = [
  { name: 'app', description: 'Generate a new application within a monorepo (converting to monorepo if it\'s a standard structure).' },
  { name: 'library', alias: 'lib', description: 'Generate a new library within a monorepo (converting to monorepo if it\'s a standard structure).' },
  { name: 'class', alias: 'cl', description: 'Generate a new class.' },
  { name: 'controller', alias: 'co', description: 'Generate a controller declaration.' },
  { name: 'decorator', alias: 'd', description: 'Generate a custom decorator.' },
  { name: 'filter', alias: 'f', description: 'Generate a filter declaration.' },
  { name: 'gateway', alias: 'ga', description: 'Generate a gateway declaration.' },
  { name: 'guard', alias: 'gu', description: 'Generate a guard declaration.' },
  { name: 'interface', alias: 'itf', description: 'Generate an interface.' },
  { name: 'interceptor', alias: 'itc', description: 'Generate an interceptor declaration.' },
  { name: 'middleware', alias: 'mi', description: 'Generate a middleware declaration.' },
  { name: 'module', alias: 'mo', description: 'Generate a module declaration.' },
  { name: 'pipe', alias: 'pi', description: 'Generate a pipe declaration.' },
  { name: 'provider', alias: 'pr', description: 'Generate a provider declaration.' },
  { name: 'resolver', alias: 'r', description: 'Generate a resolver declaration.' },
  { name: 'resource', alias: 'res', description: 'Generate a new CRUD resource. See the CRUD (resource) generator for more details.' },
  { name: 'service', alias: 's', description: 'Generate a service declaration.' },
];


function generateCommand() {
  return 'nest generate <schematic> <name>';
}


function Schematic({ name, alias, description }: Schematics) {
  return (
    <div className='items-top flex space-x-4 space-y-4'>
      <Checkbox id={name + '_' + alias} />
      <div className='grid gap-1.5 leading-none'>

        <span
          className='text-sm font-bold group ml-2 inline-block rounded-3xl bg-[#fafafa] px-3 text-black'>
          <span className=''>{name}</span>
        </span>
        <p className='text-sm text-muted-foreground'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <section className='flex flex-col lg:flex-row h-screen'>
      <section className='flex w-full flex-col justify-between p-9 lg:h-auto'>
        <div className='flex w-full items-center justify-between'>
          <Link
            href='/'
            className={`flex items-center text-2xl font-bold dark:text-white`}
          >
            Nest Gen.{' '}
            <span
              className={`text-sm font-bold group ml-2 inline-block rounded-3xl bg-[#fafafa] px-3 text-black`}
            >
            <span className=''>v1</span>
          </span>
          </Link>
          <ThemeToggle />
        </div>

        <div className='flex w-full items-center justify-between'>
          <div className='flex w-1/2 m-4 h-full'>
            <Card className='w-full h-full'>
              <CardHeader>
                <CardTitle>Select your cli options</CardTitle>
                <CardDescription>Copy and paste in your terminal generated commands</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className='grid w-full items-center gap-4'>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='name'>The name of the generated component.</Label>
                      <Input id='name' placeholder='Name of your project' />
                    </div>
                    <div className='flex flex-col space-y-1.5'>
                      <ScrollArea className='w-full border p-4 h-[700px]'>
                        {schematicsData.map((schematic) => (
                          <Schematic key={schematic.name} {...schematic} />
                        ))}
                      </ScrollArea>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <Button variant='outline'>Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </div>
          <div className='flex w-1/2 m-4 h-full'>
            <Card className='w-full '>
              <CardHeader>
                <CardTitle>Generated Commands</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid w-full gap-2'>
                  <Textarea placeholder={generateCommand()} />
                  <Button>Copy to clipboard</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className={'flex w-full '}>
          <p className='text-3xl font-bold'>
            <span className='text-green-500'>Nest Gen.</span> is a{' '}
            <span className='text-green-500'>Tool</span> to help you to {' '}
            <span className='text-green-500'>generate</span> {' '}
            nest commands.
          </p>
        </div>


      </section>
    </section>
  );
}
