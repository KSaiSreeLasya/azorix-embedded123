import { RequestHandler } from "express";
import { ContactFormRequest, ContactFormResponse } from "@shared/api";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    // Validate request body
    const data = contactFormSchema.parse(req.body);

    // Insert into Supabase
    const { data: insertedData, error } = await supabase
      .from("contact_submissions")
      .insert({
        name: data.name,
        email: data.email,
        message: data.message,
        created_at: new Date().toISOString(),
      })
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to submit contact form",
      } as ContactFormResponse);
    }

    const response: ContactFormResponse = {
      success: true,
      message: "Thank you! We'll get back to you shortly.",
      id: insertedData?.[0]?.id,
    };

    res.status(200).json(response);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: err.errors[0].message,
      } as ContactFormResponse);
    }

    console.error("Error handling contact form:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your request",
    } as ContactFormResponse);
  }
};
