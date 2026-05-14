import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dataRequestSchema } from "@shared/schema";
import type { DataRequest } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Send } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

interface DataRequestFormProps {
  datasetId: string;
  datasetName: string;
}

export default function DataRequestForm({
  datasetId,
  datasetName,
}: DataRequestFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const siteKey =
    import.meta.env.VITE_RECAPTCHA_SITE_KEY ||
    "6LeS7AssAAAAAM4B7T805CMGOWh6Xb371jnIrX_l";
  console.log("reCAPTCHA site key status:", siteKey ? "LOADED" : "MISSING");

  const form = useForm<DataRequest>({
    resolver: zodResolver(dataRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      purpose: "",
      datasetId,
      datasetName,
    },
  });

  const onRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const mutation = useMutation({
    mutationFn: (data: DataRequest) =>
      apiRequest("POST", "/api/data-requests", data),
    onSuccess: () => {
      toast({
        title: "Request Submitted",
        description: "We'll review your request and contact you shortly.",
      });
      form.reset({
        name: "",
        email: "",
        organization: "",
        purpose: "",
        datasetId,
        datasetName,
      });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: DataRequest) => mutation.mutate(data);

  // const onSubmit = async (data: DataRequest) => {
  //   if (!recaptchaToken) {
  //     toast({
  //       title: "Verification Required",
  //       description: "Please complete the reCAPTCHA verification.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   console.log("Data request submitted:", data);
  //   console.log("reCAPTCHA token:", recaptchaToken);

  //   setTimeout(() => {
  //     toast({
  //       title: "Request Submitted",
  //       description: "We'll review your request and contact you shortly.",
  //     });
  //     form.reset({
  //       name: "",
  //       email: "",
  //       organization: "",
  //       purpose: "",
  //       datasetId,
  //     });
  //     setRecaptchaToken(null);
  //     recaptchaRef.current?.reset();
  //     setIsSubmitting(false);
  //   }, 1000);
  // };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Request Dataset Access</h3>
        <p className="text-muted-foreground">
          Submit your request to access{" "}
          <span className="font-medium">{datasetName}</span>
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      data-testid="input-name"
                    />
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      {...field}
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization</FormLabel>
                <FormControl>
                  <Input
                    placeholder="University, research institute, or company"
                    {...field}
                    data-testid="input-organization"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purpose of Use</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe how you plan to use this dataset..."
                    className="min-h-32"
                    {...field}
                    data-testid="input-purpose"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-6">
            <div className="flex justify-center md:justify-start">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey || ""}
                onChange={onRecaptchaChange}
                data-testid="recaptcha"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              //disabled={isSubmitting || !recaptchaToken}
              disabled={mutation.isPending || !recaptchaToken}
              className="w-full md:w-auto"
              data-testid="button-submit-request"
            >
              {/* {isSubmitting ? "Submitting..." : "Submit Request"} */}
              {mutation.isPending ? "Submitting..." : "Submit Request"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
