// src/models/Contact.js
import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot be more than 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ]
  },
  phone: {
    type: String,
    trim: true
  },
  projectType: {
    type: String,
    required: [true, 'Please select a project type'],
    enum: [
      'Website',
      'Web Application',
      'Mobile App',
      'Custom Software',
      'E-commerce',
      'UI/UX Design',
      'Digital Marketing',
      'Other'
    ]
  },
  budget: {
    type: String,
    enum: [
      '₹50K–₹1L',
      '₹1L–₹3L',
      '₹3L–₹5L',
      '₹5L+',
      'Not sure'
    ]
  },
  details: {
    type: String,
    required: [true, 'Please provide project details'],
    trim: true,
    maxlength: [2000, 'Details cannot be more than 2000 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'in-progress', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

// Update timestamp on save
ContactSchema.pre('save', function() {
  this.updatedAt = Date.now()
})

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema)