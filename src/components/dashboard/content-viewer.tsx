import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button.tsx'
import Markdown from 'react-markdown'
import { ClipboardIcon, ShareIcon } from '@heroicons/react/16/solid'
import { StarIcon } from '@heroicons/react/16/solid'

type ContentViewer = {
    content: string
}
export default function ContentViewer({ content }: ContentViewer) {
    return (
        <Card className="mt-4">
            <CardContent className="p-8">
                <div className="prose lg:prose-xl">
                    <Markdown>{content}</Markdown>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">
                    <ShareIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                    <ClipboardIcon className="h-4, w-4" />
                </Button>
                <Button variant="outline">
                    <StarIcon className="h-4 w-4" />
                </Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    )
}
