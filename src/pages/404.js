import React from 'react'
import Link from 'next/link'

function ErrorPage() {
    return (
        <div>
            <h1>Page not found !</h1>
            <Link href="/">
                <a>Go Home</a>
            </Link>
        </div>
    )
}

export default ErrorPage
