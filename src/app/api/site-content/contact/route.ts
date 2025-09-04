import { NextRequest, NextResponse } from 'next/server'
import { getContactContent } from '@/lib/site-content'
import { saveContactContent } from '@/lib/site-content-mutations'

export async function GET() {
  try {
    const content = await getContactContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error loading contact content:', error)
    return NextResponse.json(
      { error: 'Failed to load contact content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { content, subsection } = body
    await saveContactContent(content, subsection)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving contact content:', error)
    return NextResponse.json(
      { error: 'Failed to save contact content', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
