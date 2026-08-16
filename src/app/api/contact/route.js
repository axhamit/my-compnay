// src/app/api/contact/route.js
import connectDB from '@/lib/mongodb'
import Contact from '@/models/Contact'
import { NextResponse } from 'next/server'

// Named export for POST method
export async function POST(request) {
  try {
    // Connect to MongoDB
    await connectDB()

    // Parse request body
    const body = await request.json()

    // Validate required fields
    const { name, email, projectType, details } = body

    if (!name || !email || !projectType || !details) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please provide all required fields: name, email, projectType, details' 
        },
        { status: 400 }
      )
    }

    // Create new contact
    const contact = new Contact({
      name: body.name,
      company: body.company || '',
      email: body.email,
      phone: body.phone || '',
      projectType: body.projectType,
      budget: body.budget || '',
      details: body.details,
    })

    // Save to database
    await contact.save()

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your inquiry has been sent successfully!',
        data: contact 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error submitting contact form:', error)

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message)
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation error',
          errors: errors 
        },
        { status: 400 }
      )
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Duplicate entry. Please check your information.' 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again.' 
      },
      { status: 500 }
    )
  }
}

// Named export for GET method
export async function GET(request) {
  try {
    await connectDB()

    // Optional: Add authentication
    const authHeader = request.headers.get('authorization')
    // Uncomment to enable authentication
    // if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    //   return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
    // }

    const contacts = await Contact.find({}).sort({ createdAt: -1 })

    return NextResponse.json(
      { 
        success: true, 
        count: contacts.length,
        data: contacts 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch contacts' 
      },
      { status: 500 }
    )
  }
}

// Optional: Named export for OPTIONS method (for CORS)
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Allow': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  )
}