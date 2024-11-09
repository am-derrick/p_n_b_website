import TestimonialList from "../components/testimonials/TestimonialList";

const TestimonialsPage = () => {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience working with us.
            </p>
          </div>
          <TestimonialList />
        </div>
      </div>
    );
  };
  
  export default TestimonialsPage;