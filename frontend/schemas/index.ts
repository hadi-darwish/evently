import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters",
    }),
    passwordConfirmation: z.string().min(8, {
      message: "Password must be at least 8 characters",
    }),
    phoneNumber: z.string().min(8, {
      message: "Phone number is required",
    }),
    address: z.string().min(1, {
      message: "Address is required",
    }),
    city: z.string().min(1, {
      message: "City is required",
    }),
    gender: z.string().min(1, {
      message: "Gender is required",
    }),
    type: z.string().min(1, {
      message: "Type is required",
    }),
    organizationName: z.string().optional().or(z.literal("")),
    firstName: z.string().optional().or(z.literal("")),
    lastName: z.string().optional().or(z.literal("")),
    day: z.string().optional().or(z.literal("")),
    month: z.string().optional().or(z.literal("")),
    year: z.string().optional().or(z.literal("")),
  })
  .refine(
    (data) => {
      if (data.type === "organizer" && !data.organizationName) {
        return false;
      }
      if (
        data.type === "user" &&
        (!data.firstName ||
          !data.lastName ||
          !data.day ||
          !data.month ||
          !data.year)
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Required fields are missing",
      path: ["type"], // This path is just a placeholder; it will be ignored in favor of the custom error message.
    }
  )
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  })
  .superRefine((data, ctx) => {
    if (data.type === "user") {
      if (!data.firstName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "First name is required for users",
          path: ["firstName"],
        });
      }
      if (!data.lastName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Last name is required for users",
          path: ["lastName"],
        });
      }
      if (
        !data.day ||
        !data.month ||
        !data.year ||
        data.day === "Day" ||
        data.month === "Month" ||
        data.year === "Year" ||
        data.day === "" ||
        data.month === "" ||
        data.year === "" ||
        data.day === undefined ||
        data.month === undefined ||
        data.year === undefined
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Day, month, and year are required for users",
          path: ["day", "month", "year"],
        });
      }
    }
    if (data.type === "organizer" && !data.organizationName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Organization name is required for organizers",
        path: ["organizationName"],
      });
    }
  });
