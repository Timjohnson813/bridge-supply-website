import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default calendar styles
import emailjs from 'emailjs-com';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: Calendar, 2: Form
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    website: '',
    revenue: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setStep(2); // Move to form after date selection
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // For now, we'll simulate sending the email and log the data
      // In production, you would configure EmailJS with proper service ID, template ID, and user ID
      console.log('Booking request:', {
        from_name: formData.fullName,
        from_email: formData.email,
        company_name: formData.companyName,
        website: formData.website,
        revenue: formData.revenue,
        goals: formData.goals,
        selected_date: selectedDate ? selectedDate.toDateString() : 'No date selected',
        to_email: 'accounts@bridgesupplyco.com'
      });
      
      // Simulate successful submission
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          companyName: '',
          website: '',
          revenue: '',
          goals: ''
        });
        setSelectedDate(null);
        setStep(1);
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep(1);
    setSelectedDate(null);
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      website: '',
      revenue: '',
      goals: ''
    });
    setSubmitStatus('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{step === 1 ? 'Select a Date' : 'Book Your Call'}</DialogTitle>
          <DialogDescription>
            {step === 1 ? 'Choose a preferred date for your consultation.' : `You selected ${selectedDate ? selectedDate.toDateString() : 'a date'}. Please fill out the form.`}
          </DialogDescription>
        </DialogHeader>
        {step === 1 ? (
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            minDate={new Date()} // Cannot select past dates
            className="react-calendar-iphone-style"
          />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="website">Website/Brand</Label>
              <Input id="website" name="website" value={formData.website} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="revenue">Current Monthly Revenue</Label>
              <select 
                id="revenue" 
                name="revenue" 
                value={formData.revenue} 
                onChange={handleInputChange} 
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50"
              >
                <option value="">Select revenue range</option>
                <option value="0-10k">$0 - $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-500k">$100,000 - $500,000</option>
                <option value="500k+">$500,000+</option>
              </select>
            </div>
            <div>
              <Label htmlFor="goals">Tell us about your goals *</Label>
              <Textarea id="goals" name="goals" value={formData.goals} onChange={handleInputChange} required rows={3} />
            </div>

            {submitStatus === 'success' && (
              <div className="p-2 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">
                Thank you! Your booking request has been sent.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-2 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                There was an error sending your request. Please try again.
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Booking'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

