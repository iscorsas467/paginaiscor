import { NextRequest, NextResponse } from 'next/server'
import { getCompanyContent } from '@/lib/site-content'
import { saveCompanyContent } from '@/lib/site-content-mutations'

export async function GET() {
  try {
    const content = await getCompanyContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error loading company content:', error)
    return NextResponse.json(
      { error: 'Failed to load company content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { content, subsection } = await request.json()
    await saveCompanyContent(content, subsection)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving company content:', error)
    return NextResponse.json(
      { error: 'Failed to save company content' },
      { status: 500 }
    )
  }
}
