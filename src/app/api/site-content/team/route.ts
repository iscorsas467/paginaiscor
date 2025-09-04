import { NextRequest, NextResponse } from 'next/server'
import { getTeamContent } from '@/lib/site-content'
import { saveTeamContent } from '@/lib/site-content-mutations'

export async function GET() {
  try {
    const content = await getTeamContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error loading team content:', error)
    return NextResponse.json(
      { error: 'Failed to load team content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { content, subsection } = await request.json()
    await saveTeamContent(content, subsection)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving team content:', error)
    return NextResponse.json(
      { error: 'Failed to save team content' },
      { status: 500 }
    )
  }
}
