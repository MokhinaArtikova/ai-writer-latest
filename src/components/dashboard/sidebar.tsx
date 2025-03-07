import { Pencil } from 'lucide-react'
import PromptHistory from '@/components/dashboard/prompt-history.tsx'
import { TPromptHistory } from '@/shared/types/prompt-history.type.ts'
import { PencilSquareIcon } from '@heroicons/react/16/solid'

const mockItems: TPromptHistory[] = [
    {
        date: 'Today',
        links: [
            {
                title: 'Prompt 1',
                url: '/dashboard/prompt/1',
            },
            {
                title: 'Prompt 1',
                url: '/dashboard/prompt/2',
            },
        ],
    },
    {
        date: 'Yesterday',
        links: [
            {
                title: 'Prompt 1',
                url: '/dashboard/prompt/1',
            },
            {
                title: 'Prompt 1',
                url: '/dashboard/prompt/2',
            },
        ],
    },
]
export default function SideBar() {
    return (
        <nav className={'h-screen w-80 border-r p-4'}>
            <div className={'flex item-center justify-between'}>
                <h1 className={'text-xl font-semibold '}>Ai Writer</h1>
                <button>
                    <PencilSquareIcon className="w-6 h-6" />
                </button>
            </div>
            <PromptHistory items={mockItems} />
        </nav>
    )
}
