import { NextRequest, NextResponse } from 'next/server'
import { getGlobalContent } from '@/lib/site-content'
import { saveGlobalContent } from '@/lib/site-content-mutations'

export async function GET() {
  try {
    const content = await getGlobalContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error loading global content:', error)
    return NextResponse.json(
      { error: 'Failed to load global content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { content, subsection } = await request.json()
    await saveGlobalContent(content, subsection)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving global content:', error)
    return NextResponse.json(
      { error: 'Failed to save global content' },
      { status: 500 }
    )
  }
}
