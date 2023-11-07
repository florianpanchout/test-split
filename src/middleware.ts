import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import type { NextMiddlewareResult } from 'next/dist/server/web/types'

export const middleware = (req: NextRequest): NextMiddlewareResult => {
  const rewriteTo = `https://test-split.vercel.app/`
  const isExternal = rewriteTo.startsWith('http')

  if (isExternal) return NextResponse.rewrite(rewriteTo)

  return NextResponse.next()
}
