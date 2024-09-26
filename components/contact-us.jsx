"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormStatus("success");
    // Reset form after successful submission
    event.currentTarget.reset();
  };

  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-36 justify-between">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">
              Have questions or want to learn more about MaxPower Fitness? We're
              here to help!
            </p>
            <div className="space-y-2">
              <p>
                <strong>Address:</strong> 7th street, Eastleigh, Nairobi, Kenya
              </p>
              <p>
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p>
                <strong>Email:</strong> info@maxpowerfitness.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <Textarea id="message" name="message" required />
              </div>
              <Button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </Button>
              {formStatus === "success" && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {formStatus === "error" && (
                <p className="text-red-600">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
