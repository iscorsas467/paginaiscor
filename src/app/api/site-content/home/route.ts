import { NextRequest, NextResponse } from 'next/server'
import { getHomeContent } from '@/lib/site-content'
import { saveHomeContent } from '@/lib/site-content-mutations'

export async function GET() {
  try {
    const content = await getHomeContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error loading home content:', error)
    return NextResponse.json(
      { error: 'Failed to load home content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { content, subsection } = await request.json()
    await saveHomeContent(content, subsection)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving home content:', error)
    return NextResponse.json(
      { error: 'Failed to save home content' },
      { status: 500 }
    )
  }
}
