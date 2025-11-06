import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  company: z.string().trim().min(1, "Company name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  vehicle_types: z.string().trim().min(1, "Type of vehicles is required").max(200),
  annual_production: z.string().trim().min(1, "Annual production is required").max(100),
  questions: z.string().trim().max(1000).optional(),
});

const Builders = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      email: "",
      phone: "",
      vehicle_types: "",
      annual_production: "",
      questions: "",
    },
  });

  useEffect(() => {
    document.title = "For Builders - Soul Interface";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Resources and opportunities for builders in the Soul Interface ecosystem"
      );
    }
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { error } = await supabase.from("builder_inquiries").insert([
        {
          company: values.company,
          email: values.email,
          phone: values.phone || null,
          vehicle_types: values.vehicle_types,
          annual_production: values.annual_production,
          questions: values.questions || null,
        },
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "We will be in touch soon!",
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <Link to="/sema">
          <Button variant="ghost" className="mb-8">
            ← Back to SEMA
          </Button>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          For Builders
        </h1>

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-card p-8 rounded-lg border text-center">
              <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
              <p className="text-muted-foreground text-lg">
                We will be in touch soon!
              </p>
            </div>
          ) : (
            <div className="bg-card p-8 rounded-lg border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="vehicle_types"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of Vehicles Built</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Luxury sedans, SUVs"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="annual_production"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Production</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., 10,000 vehicles/year"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="questions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Any specific questions about Soul Interface? (Optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your interests..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Builders;
