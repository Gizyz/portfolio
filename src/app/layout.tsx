import type { Metadata } from 'next'
import "./app.css";

export const metadata: Metadata = {
    title: 'Karl-Gustav Thommessen',
    description: 'My App is a...',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}