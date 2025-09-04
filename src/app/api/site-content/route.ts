import { NextRequest, NextResponse } from 'next/server'
import { getAllSiteContent } from '@/lib/site-content'
import { 
  saveHomeContent, 
  saveCompanyContent, 
  saveTeamContent, 
  saveContactContent, 
  saveGlobalContent 
} from '@/lib/site-content-mutations'

export async function GET() {
  try {
    const content = await getAllSiteContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error loading site content:', error)
    return NextResponse.json(
      { error: 'Failed to load site content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { section, content } = body

    switch (section) {
      case 'home':
        await saveHomeContent(content)
        break
      case 'company':
        await saveCompanyContent(content)
        break
      case 'team':
        await saveTeamContent(content)
        break
      case 'contact':
        await saveContactContent(content)
        break
      case 'global':
        await saveGlobalContent(content)
        break
      default:
        return NextResponse.json(
          { error: 'Invalid section' },
          { status: 400 }
        )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving site content:', error)
    return NextResponse.json(
      { error: 'Failed to save site content' },
      { status: 500 }
    )
  }
}
